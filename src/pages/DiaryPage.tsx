import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";


const DiaryPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="mt-20 ml-15 relative w-64">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => date && setSelectedDate(date)}
        dateFormat="dd.MM.yyyy"
        customInput={
          <div className="flex items-center cursor-pointer text-xl font-bold">
            <span>{selectedDate.toLocaleDateString()}</span>
            <CalendarIcon className="h-5 w-5 ml-2 text-gray-500" />
          </div>
        }
      />
    </div>
  )
}

export default DiaryPage