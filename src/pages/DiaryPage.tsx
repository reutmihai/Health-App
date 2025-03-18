import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "@heroicons/react/24/outline";
import FoodList from "../components/FoodInput";
import { useFood } from "../components/FoodContext";

const DiaryPage: React.FC = () => {
  const { selectedDate, setSelectedDate } = useFood();

  return (
    <div className="mt-10 sm:mt-20 ml-5 relative">
      <DatePicker
        selected={new Date(selectedDate)}
        onChange={(date: Date | null) =>
          date && setSelectedDate(date.toISOString().split("T")[0])
        }
        dateFormat="dd.MM.yyyy"
        customInput={
          <div className="flex items-center cursor-pointer text-2xl sm:text-5xl font-bold sm:mb-5">
            <span>{new Date(selectedDate).toLocaleDateString()}</span>
            <CalendarIcon className="h-5 w-5 ml-2 text-gray-500" />
          </div>
        }
      />

      <FoodList />
    </div>
  );
};

export default DiaryPage;
