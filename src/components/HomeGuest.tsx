const HomeUser = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="relative w-[1280px] min-h-screen flex items-center">
        
        {/* 🔹 Stânga - Conținutul */}
        <div className="relative z-10 w-1/2 bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">
            Calculate your daily calorie intake right now
          </h1>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Height" className="border p-3 rounded-lg" />
            <input type="text" placeholder="Age" className="border p-3 rounded-lg" />
            <input type="text" placeholder="Current weight" className="border p-3 rounded-lg" />
            <button className="bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition">
              Start losing weight
            </button>
          </form>
        </div>

        {/* 🔹 Dreapta - Background Image */}
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('background.webp')",
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HomeUser;
