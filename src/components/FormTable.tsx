import { useState } from "react";
import "../index.css";

const FormTable: React.FC = () => {
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [height, setHeight] = useState("");
  const [desiredWeight, setDesiredWeight] = useState("");
  const [age, setAge] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [calories, setCalories] = useState<number | null>(null);
  const [foodRecommendations, setFoodRecommendations] = useState<string>("");

  const calculateCalories = () => {
    const heightInCm = parseInt(height) * 100; 
    const weightInKg = parseInt(currentWeight); 
    const ageInYears = parseInt(age);
    const genderFactor = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5; 
    const dailyCalories = genderFactor * 1.2; // Factor de activitate

    setCalories(dailyCalories);

    // Recomandări pentru alimente
    setFoodRecommendations(
      "Evitați alimentele procesate, zahărul rafinat și grăsimile saturate. Concentrați-vă pe proteine slabe, legume și carbohidrați complecși."
    );

    // Deschide modalul
    setShowModal(true);
  };

  return (
    <div className="overflow-x-auto mt-7 sm:mt-20 flex flex-col items-center bg-transparent">
      <h2 className="mb-5 text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
        Calculate your daily calorie intake right now
      </h2>
      <table className="w-full table-fixed text-sm sm:text-lg md:text-xl lg:text-2xl">
        <tbody>
          {/* Linie 1 */}
          <tr className="block sm:table-row">
            <td className="p-3 block md:table-cell">
              <input
                placeholder="Height *"
                type="text"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="p-3 block sm:table-cell">
              <input
                placeholder="Desired weight *"
                type="text"
                id="desired-weight"
                value={desiredWeight}
                onChange={(e) => setDesiredWeight(e.target.value)}
                className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
          </tr>

          {/* Linie 2 */}
          <tr className="block sm:table-row">
            <td className="p-3 block md:table-cell">
              <input
                type="text"
                id="age"
                placeholder="Age *"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="p-3 hidden block sm:table-cell">
              <input
                placeholder="Blood type *"
                type="text"
                id="blood-type"
                value={selectedBloodType}
                className="border-b-[0.5px] border-gray-300 p-2 w-full cursor-not-allowed text-gray-500"
                readOnly
                required
              />
            </td>
          </tr>

          {/* Linie 3 */}
          <tr>
            <td className="p-2 block sm:table-row">
              <input
                placeholder="Current weight *"
                type="text"
                id="current-weight"
                value={currentWeight}
                onChange={(e) => setCurrentWeight(e.target.value)}
                className="border-b-[1px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="pl-4 block sm:table-cell text-gray-500">
              <label className="block sm:hidden mb-2" htmlFor="blood-type">
                Blood type *
              </label>
              <div className="flex gap-4">
                {["1", "2", "3", "4"].map((type) => (
                  <label key={type} className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="blood-type"
                      value={type}
                      onChange={(e) => setSelectedBloodType(e.target.value)}
                      required
                    />
                    {type}
                  </label>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={calculateCalories}
        className="text-sm sm:text-lg md:text-xl lg:text-2xl bg-orange-400 text-white font-semibold px-4 py-2 rounded-lg mt-4"
      >
        Start losing weight
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 sm:w-1/2 lg:w-1/3">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Your Recommended Daily Calories
            </h3>
            <p className="mb-4">
              Based on your input, your recommended daily calories are:{" "}
              <strong>{calories?.toFixed(0)} kcal</strong>.
            </p>
            <p className="mb-4">{foodRecommendations}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormTable;
