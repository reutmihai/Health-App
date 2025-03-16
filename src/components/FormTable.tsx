import { useState, useEffect } from "react";
import productsData from "../data/products.json";
import MobileUserBar from "./MobileUserbar";
import Navbar from "./Navbar";

interface Product {
  _id: { $oid: string };
  categories: string;
  weight: number;
  title: string;
  calories?: number;
  groupBloodNotAllowed: (boolean | null)[];
  __v: number;
}

const FormTable: React.FC = () => {
  const [selectedBloodType, setSelectedBloodType] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [recommendedCalories, setRecommendedCalories] = useState<number | null>(
    null
  );
  const [forbiddenProducts, setForbiddenProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // JSON
  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleCalculateCalories = () => {
    // kcal calc
    const height = parseFloat(
      (document.getElementById("height") as HTMLInputElement).value
    );
    const weight = parseFloat(
      (document.getElementById("current-weight") as HTMLInputElement).value
    );
    const age = parseInt(
      (document.getElementById("age") as HTMLInputElement).value
    );

    if (height && weight && age) {
      const calories = weight * 24;
      setRecommendedCalories(calories);

      // Not recommanded products filtred based on blood group
      const forbidden = products.filter(
        (product) =>
          product.groupBloodNotAllowed[parseInt(selectedBloodType)] === true
      );
      setForbiddenProducts(forbidden.slice(0, 5));

      setIsModalOpen(true); // Open modal
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="overflow-x-auto  mt-5 sm:mt-10 flex flex-col items-center bg-transparent">
      <h2 className="sm:mb-5 text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
        Calculate your daily calorie intake right now
      </h2>
      <table className="w-full table-fixed text-sm sm:text-lg md:text-xl lg:text-xl">
        <tbody>
          {/* Data Form */}
          <tr className="block sm:table-row">
            <td className="p-3 block md:table-cell">
              <input
                placeholder="Height *"
                type="text"
                id="height"
                className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="p-3 block sm:table-cell">
              <input
                placeholder="Desired weight *"
                type="text"
                id="desired-weight"
                className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
          </tr>

          <tr className="block sm:table-row">
            <td className="p-3 block md:table-cell">
              <input
                placeholder="Age *"
                type="text"
                id="age"
                className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="p-3 hidden block sm:table-cell">
              <input
                placeholder="Blood type *"
                type="text"
                id="blood-type"
                className="border-b-[0.5px] border-gray-300 p-2 w-full cursor-not-allowed text-gray-500"
                value={selectedBloodType}
                readOnly
                required
              />
            </td>
          </tr>

          {/* Blood group */}
          <tr>
            <td className="p-2 block sm:table-row">
              <input
                placeholder="Current weight *"
                type="text"
                id="current-weight"
                className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="p-2 block sm:table-cell">
              <label className="block sm:hidden mb-2 text-gray-400">
                Blood Type *
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

      {/* Button for calc kcal */}
      <button
        onClick={handleCalculateCalories}
        className="text-sm  lg:text-md bg-orange-400 text-white font-semibold px-4 py-2 rounded-lg mt-4"
      >
        Start losing weight
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex sm:justify-center items-center sm:backdrop-blur-[3px] backdrop-blur-none">
          <div className="w-full h-screen sm:h-auto sm:max-w-[500px] bg-white sm:p-15 rounded-lg shadow-lg flex flex-col">
            <div className="sm:hidden">
              <Navbar />
            </div>
            <MobileUserBar
              isSearchModalOpen={true}
              handleCloseModal={closeModal}
            />
            <div className="flex flex-col items-center mt-20 sm:mt-0 px-3">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
                Your recommended daily calorie intake is
              </h2>
              <h1 className="text-3xl sm:text-5xl text-[#1b3287] font-bold text-center">
                {recommendedCalories} <span className="text-xl">calories</span>
              </h1>
              <div className="block w-full border-b border-gray-300 my-3"></div>

              <h4 className="text-sm sm:text-sm font-bold mb-2">
                Foods you should not eat
              </h4>
              {forbiddenProducts.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {forbiddenProducts.map((product, index) => (
                    <p
                      key={product._id.$oid}
                      className="text-gray-500 text-sm sm:text-sm"
                    >
                      {index + 1}. {product.title}
                    </p>
                  ))}
                </div>
              ) : (
                <p>No forbidden foods for your blood type.</p>
              )}

              <button
                onClick={closeModal}
                className="text-xs sm:text-sm bg-orange-400 text-white font-semibold px-4 py-2 rounded-lg mt-4"
              >
                Start losing weight
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormTable;
