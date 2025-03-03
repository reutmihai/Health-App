const HomeUser = () => {
    return (
      <div className="grid grid-cols-3 min-h-screen">
        <div className="col-span-2 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Calculate your daily calorie intake right now</h1>
          <form className="mt-6 flex flex-col gap-4">
            <input type="text" placeholder="Height" className="border p-2 rounded-lg" />
            <input type="text" placeholder="Age" className="border p-2 rounded-lg" />
            <input type="text" placeholder="Current weight" className="border p-2 rounded-lg" />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Start losing weight</button>
          </form>
        </div>
        <div className="bg-gray-100 p-6">
          <h2 className="text-xl font-bold">Summary for 13.08.2023</h2>
          <p>Left: 000 kcal</p>
          <p>Consumed: 000 kcal</p>
          <p>Daily rate: 000 kcal</p>
          <p>Food not recommended:</p>
          <p className="text-gray-500">Your diet will be displayed here</p>
        </div>
      </div>
    );
  };
  
  export default HomeUser;
  