const Chore = (props: { id: number; name: string; date: string }) => {
  return (
    <div className="w-56 h-32 rounded-xl bg-indigo-700 border-2 border-sky-500">
      <div className="mt-3 flex flex-col justify-center items-center">
        <h3 className="text-white font-bold text-xl mr-auto pl-4">{props.id}</h3>
        <h3 className="text-white font-bold text-xl">{props.name}</h3>
        <h3 className="text-white font-bold text-xl">{props.date}</h3>
      </div>
    </div>
  );
};

export default Chore;
