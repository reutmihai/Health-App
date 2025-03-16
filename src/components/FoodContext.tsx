import React, { createContext, useContext, useEffect, useState } from "react";

interface FoodItem {
  title: string;
  grams: number;
  calories: number;
}

interface FoodContextType {
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
  const [foodList, setFoodList] = useState<FoodItem[]>([]);
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [remainingCalories, setRemainingCalories] = useState<number>(0);
  const [percentageOfNormal, setPercentageOfNormal] = useState<number>(0);
  const [forbiddenFoods, setForbiddenFoods] = useState<string[]>([]);
  const dailyRate = 2000;

  useEffect(() => {
    // Check if food list exists in localStorage and load it
    const storedFoodList = localStorage.getItem("foodList");
    if (storedFoodList) {
      setFoodList(JSON.parse(storedFoodList));
    }
  }, []);

  useEffect(() => {
    // Update localStorage every time foodList changes
    localStorage.setItem("foodList", JSON.stringify(foodList));

    // Calculate calories and forbidden foods whenever the foodList is updated
    const total = foodList.reduce((acc, food) => acc + food.calories, 0);
    setTotalCalories(total);
    setRemainingCalories(dailyRate - total);
    setPercentageOfNormal(parseFloat(((total / dailyRate) * 100).toFixed(1)));

    // Update forbidden foods
    const forbidden = foodList
      .filter((food) => food.title.toLowerCase().includes("sugar"))
      .map((food) => food.title);
    setForbiddenFoods(forbidden);
  }, [foodList]);

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
        foodList,
        addFood,
        removeFood,
        clearFoodList,
        totalCalories,
        remainingCalories,
        dailyRate,
        percentageOfNormal: Number(percentageOfNormal),
        forbiddenFoods,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error("useFood must be used within a FoodProvider");
  }
  return context;
};
