import { useState } from "react";

const FormTable: React.FC = () => {
  const [selectedBloodType, setSelectedBloodType] = useState("");

  return (
    <div className="overflow-x-auto sm:mt-20 flex flex-col items-center bg-transparent">
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

          {/* Linie 2 */}
          <tr className="block sm:table-row">
            <td className="p-3 block md:table-cell">
              <input
                type="text"
                id="age"
                placeholder="Age *"
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

          {/* Linie 3 */}
          <tr>
            <td className="p-3 block sm:table-row">
              <input
                placeholder="Current weight *"
                type="text"
                id="current-weight"
                className="border-b-[1px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="pl-3 block sm:table-cell text-gray-500">
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
      <button className="text-sm sm:text-lg md:text-xl lg:text-2xl bg-orange-400 text-white font-semibold px-5 py-4 rounded-lg mt-5">
        Start losing weight
      </button>
    </div>
  );
};

export default FormTable;
