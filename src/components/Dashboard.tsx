import { useFood } from "../components/FoodContext";
import Userbar from "./Userbar";

const Dashboard = () => {
  const {
    selectedDate,
    foodList,
    totalCalories,
    remainingCalories,
    dailyRate,
    percentageOfNormal,
    forbiddenFoods,
  } = useFood();

  return (
    <div className="fixed bottom-0 right-0 lg:top-0 lg:right-0 bg-gray-100 px-5 py-20 lg:px-20 w-full lg:w-auto lg:h-full z-[1]">
      <div className="hidden lg:block relative left-10">
        <Userbar />
      </div>
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col sm:flex-row lg:flex-col space-x-25 lg:space-x-0">
          <div>
            <h2 className="text-md font-bold mb-5">
              Summary for {new Date(selectedDate).toLocaleDateString()}
            </h2>
            <p>Left: {remainingCalories} kcal</p>
            <p>Consumed: {totalCalories} kcal</p>
            <p>Daily rate: {dailyRate} kcal</p>
            <p>n% of normal: {percentageOfNormal}%</p>
          </div>

          <div className="lg:my-5">
            <h2 className="text-md font-bold mb-5">Food not recommended</h2>
            {foodList.length === 0 ? <p className="text-gray-300">Your diet will be displayed here</p> : (
              <ul>{forbiddenFoods.map((food, index) => <li key={index}>{food}</li>)}</ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
