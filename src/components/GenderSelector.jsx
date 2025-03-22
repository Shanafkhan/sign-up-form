import { useState } from "react";

export default function GenderSelector() {
  const [selectedGender, setSelectedGender] = useState("Male");

  return (
    <div className="flex items-center space-x-3 justify-between pt-4">
      <label className="text-gray-700 text-sm">Gender</label>
      <div className="flex border border-gray-300 rounded-2xl overflow-hidden">
        <button
          type="button"
          className={`px-4 py-2 text-sm ${
            selectedGender === "Male"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600"
          }`}
          onClick={() => setSelectedGender("Male")}
        >
          Male
        </button>
        <div className="w-[1px] bg-gray-300"></div>
        <button
          type="button"
          className={`px-4 py-2 text-sm ${
            selectedGender === "Female"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600"
          }`}
          onClick={() => setSelectedGender("Female")}
        >
          Female
        </button>
      </div>
    </div>
  );
}
