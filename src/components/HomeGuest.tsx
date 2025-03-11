import FormTable from "./FormTable";
import "../index.css";

const HomeUser = () => {
  return (
    <div className="relative max-h-screen overflow-hidden flex items-center">
      {/* 🔹 Fundalul  */}
      <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1] bg-default"></div>

      <div className="relative w-full md:flex-row items-center">
        {/* 🔹 Stânga - Conținutul */}
        <div className="w-full md:w-1/2 relative z-10 pl-3">
          <FormTable />
        </div>
      </div>
    </div>
  );
};

export default HomeUser;
