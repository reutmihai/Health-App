const Dashboard = () => {
  return (
    <div className="fixed bottom-0 right-0 lg:top-0 lg:right-0 bg-gray-100 px-5 py-20 lg:px-30 w-full lg:w-auto lg:h-full z-[-1]">
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col sm:flex-row lg:flex-col space-x-25 lg:space-x-0">
          <div>
            <h2 className="text-md font-bold mb-5">Summary for 13.08.2023</h2>
            <p>Left: 000 kcal</p>
            <p>Consumed: 000 kcal</p>
            <p>Daily rate: 000 kcal</p>
          </div>

          <div className="my-5">
            <h2 className="text-md font-bold mb-5">Food not recommended:</h2>
            <p className="text-gray-300">Your diet will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
