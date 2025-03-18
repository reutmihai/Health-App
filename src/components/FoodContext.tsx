import React, { createContext, useContext, useEffect, useState } from "react";
import foodData from '../data/products.json';

// Item food structure
interface FoodItem {
  title: string;
  grams: number;
  calories: number;
}

// Daily data structure
interface DailyFoodData {
  date: string;
  foodList: FoodItem[];
}

// Context structure
interface FoodContextType {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  foodList: FoodItem[];
  addFood: (food: FoodItem) => void;
  removeFood: (index: number) => void;
  clearFoodList: () => void;
  totalCalories: number;
  remainingCalories: number;
  dailyRate: number;
  percentageOfNormal: number;
  forbiddenFoods: string[];
}

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dailyRate = 2000; // Default daily rate of calories
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0] // Default to today's date
  );
  const [foodList, setFoodList] = useState<FoodItem[]>([]);
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [remainingCalories, setRemainingCalories] = useState<number>(dailyRate);
  const [percentageOfNormal, setPercentageOfNormal] = useState<number>(0);
  const [forbiddenFoods, setForbiddenFoods] = useState<string[]>([]);

  // Upload data from localStorage for the current day
  useEffect(() => {
    const storedData = localStorage.getItem("foodDiary");
    if (storedData) {
      const parsedData: DailyFoodData[] = JSON.parse(storedData);
      const dailyData = parsedData.find((entry) => entry.date === selectedDate);
      setFoodList(dailyData ? dailyData.foodList : []);
    }
  }, [selectedDate]);

  // Update localStorage and calculate nutrition values
  useEffect(() => {
    const total = foodList.reduce((acc, food) => acc + food.calories, 0);
    setTotalCalories(total);
    setRemainingCalories(dailyRate - total);
    setPercentageOfNormal(parseFloat(((total / dailyRate) * 100).toFixed(1)));

    // Searching for forbidden foods (based on calories exceeding remaining)
    const getForbiddenFoods = () => {
      // Searching foods which are not recommanded
      const forbiddenList = foodData.filter((food) => {
        return (
          food.calories !== undefined && food.calories > remainingCalories 
        );
      });

      // Showing first 5 foods
      return forbiddenList.slice(0, 5).map((food) => food.title);
    };

    // Set forbidden foods state
    setForbiddenFoods(getForbiddenFoods());

    // Save food data in localStorage
    const storedData = localStorage.getItem("foodDiary");
    const parsedData: DailyFoodData[] = storedData ? JSON.parse(storedData) : [];

    const updatedData = parsedData.filter(
      (entry) => entry.date !== selectedDate
    );
    updatedData.push({ date: selectedDate, foodList });

    localStorage.setItem("foodDiary", JSON.stringify(updatedData));
  }, [foodList, selectedDate, remainingCalories]); // `remainingCalories` is a dependency

  // Handle functions
  const addFood = (food: FoodItem) => {
    setFoodList((prev) => [...prev, food]);
  };

  const removeFood = (index: number) => {
    setFoodList((prev) => prev.filter((_, i) => i !== index));
  };

  const clearFoodList = () => {
    setFoodList([]);
  };

  return (
    <FoodContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        foodList,
        addFood,
        removeFood,
        clearFoodList,
        totalCalories,
        remainingCalories,
        dailyRate,
        percentageOfNormal,
        forbiddenFoods,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

// Custom hook for context
export const useFood = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error("useFood must be used within a FoodProvider");
  }
  return context;
};
