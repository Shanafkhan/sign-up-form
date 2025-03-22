export default function Login() {
  return (
    <>
      <div className="wrapper max-w-100 min-h-[350px] p-10 border-2 border-blue-500 rounded-2xl text-left shadow-md bg-white relative flex flex-col items-center justify-center ">
        <button className="absolute top-3 right-3 text-stone-500 hover:text-black">
          ✕
        </button>

        <div>
          <h2 className="text-black text-2xl">
            Let's Get <span className="text-blue-400">Started</span>
          </h2>
          <p className="text-stone-500 text-[12px] pb-3">
            Enter Your Mobile number to login
          </p>
          <form action="" className="pb-4">
            <div className="flex border border-stone-300 rounded-md p-2 my-3 focus-within:bg-green-50">
              <select className="bg-transparent outline-none">
                <option value="+1">🇺🇸 +1</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
              </select>
              <input
                type="tel"
                name="phone"
                className="outline-none flex-1 bg-transparent pl-2"
                required
              />
            </div>
            <button className="bg-sky-300 rounded-3xl px-7 py-3 mt-3 w-full text-white hover:bg-sky-400 transition">
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
