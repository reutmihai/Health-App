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

export const FoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [foodList, setFoodList] = useState<FoodItem[]>([]);
  const dailyRate = 2000; 

  useEffect(() => {
    localStorage.setItem("foodList", JSON.stringify(foodList));
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



  const totalCalories = foodList.reduce((acc, food) => acc + food.calories, 0);
  const remainingCalories = dailyRate - totalCalories;
  const percentageOfNormal = ((totalCalories / dailyRate) * 100).toFixed(1);

  // Not recommanded food
  const forbiddenFoods = foodList
    .filter((food) => food.title.toLowerCase().includes("sugar")) 
    .map((food) => food.title);


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
