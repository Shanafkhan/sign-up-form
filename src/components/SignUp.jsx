import GenderSelector from "./GenderSelector";
export default function SignUp() {
  return (
    <div className="wrapper max-w-100 min-h-[350px] p-10 border-2 border-blue-500 rounded-2xl text-left shadow-md bg-white relative flex flex-col items-center justify-center">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-stone-500 hover:text-black"
        aria-label="Close"
      >
        ✕
      </button>

      <div className="w-full">
        <h2 className="text-black text-2xl">
          Looks like you are<span className="text-blue-400"> new </span> <br />
          here :)
        </h2>
        <p className="text-stone-500 text-[12px] pb-3">
          Enter the details to create your account
        </p>

        <form className="pb-4">
          {/* Full Name Input */}
          <input
            type="text"
            name="full-name"
            aria-label="Full Name"
            className="w-full border border-stone-300 rounded-md p-2 my-3 text-sm outline-none focus:bg-green-50"
            placeholder="Full Name"
            required
          />

          {/* Mobile Number Fieldset */}
          <fieldset className="border border-gray-300 rounded-lg px-4 pt-3 pb-2 focus-within:bg-green-50">
            <legend className="px-2 text-gray-400 text-xs">
              Mobile Number
            </legend>
            <input
              type="tel"
              name="phone"
              aria-label="Mobile Number"
              className="w-full bg-transparent outline-none text-gray-700"
              placeholder="Enter your mobile number"
              required
            />
          </fieldset>
          <input
            type="email"
            name="email"
            aria-label="Email"
            className="w-full border border-stone-300 rounded-md p-2 my-3 text-sm outline-none focus:border-blue-500"
            placeholder="Email"
            required
          />

          {/* Dropdowns */}
          <div className="flex space-x-3">
            {/* Purpose of Registration */}
            <div className="relative w-48">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 truncate">
                <option className="truncate">Purpose of Registration</option>
                <option>Personal</option>
                <option>Business</option>
              </select>
              <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                ▼
              </div>
            </div>

            <div className="relative w-48">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500">
                <option>Height (Ft/Cm)</option>
                <option>150 cm</option>
                <option>160 cm</option>
                <option>170 cm</option>
              </select>
              <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                ▼
              </div>
            </div>
          </div>
          <GenderSelector />
          {/* Submit Button */}
          <button className="bg-sky-300 rounded-3xl px-7 py-3 mt-3 w-full text-white hover:bg-sky-400 transition">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
