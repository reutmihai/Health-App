import FormCalorie from "./FormCalorie"

const HomeUser = () => {
  return (
    <div className="relative max-h-screen overflow-hidden flex items-center">

      {/* 🔹 Fundalul - Se extinde pe toată pagina, inclusiv sub navbar */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: "url('./backgroundDesc.png')",
        }}
      ></div>

      <div className="relative w-full max-w-[1280px] md:flex-row items-center">
        {/* 🔹 Stânga - Conținutul */}
        <div className="w-full md:w-1/2 relative z-10 p-5 rounded-lg">
          <FormCalorie />
        </div>
      </div>
    </div>
  );
};

export default HomeUser;
