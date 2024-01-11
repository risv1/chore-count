const Chore = (props: { name: string; date: string }) => {
  return (
    <div className="w-full h-28 rounded-xl bg-indigo-700 border-2 shadow-md shadow-sky-400 border-sky-500 flex justify-center items-center">
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-white font-bold text-xl">Task: <span className="ml-2 text-green-500">{props.name}</span></h3>
        <h3 className="text-white font-bold text-xl">Due: <span className="ml-2 text-sky-400">{props.date}</span></h3>
      </div>
    </div>
  );
};

export default Chore;
