import { useState } from "react";

const FormTable: React.FC = () => {
  const [selectedBloodType, setSelectedBloodType] = useState("");

  return (
    <div className="overflow-x-auto mt-40" bg-transparent>
      <h2 className="mb-5 text-xl font-semibold text-gray-800">
            Calculate your daily calorie intake right now
          </h2>
      <table className="w-full text-xs">
        <tbody>
          {/* Linie 1 */}
          <tr>
            <td className="p-3">
              <input
                placeholder="Height *"
                type="text"
                id="height"
                className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="p-3">
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
          <tr>
            <td className="p-3">
              <input
                type="text"
                id="age"
                placeholder="Age *"
                className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="pl-3">
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
            <td className="p-3">
              <input
                placeholder="Current weight *"
                type="text"
                id="current-weight"
                className="border-b-[1px] border-gray-300 p-2 w-full outline-none focus:border-black"
                required
              />
            </td>
            <td className="pl-3">
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
    </div>
  );
};

export default FormTable;
