import FormTable from "./FormTable";

const HomeUser = () => {
    return (
      <div className="grid grid-cols-3 min-h-screen">
        <div className="col-span-2 flex flex-col items-center">
          <FormTable />
        </div>
        <div className="bg-gray-100 p-6">
          <div>
          <h2 className="text-sm font-bold mb-5">Summary for 13.08.2023</h2>
          <p>Left: 000 kcal</p>
          <p>Consumed: 000 kcal</p>
          <p>Daily rate: 000 kcal</p>
          </div>
          <div>
          <h2 className="text-sm my-5 font-bold">Food not recommended:</h2>
          <p className="text-gray-500">Your diet will be displayed here</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeUser;
  