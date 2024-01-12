const MenuItem = (props: {
  route: string;
  name: string;
  onHandleRoute: () => void;
}) => {
  return (
    <div className="w-32 h-12 bg-sky-400 flex justify-center cursor-pointer items-center rounded-xl shadow-md shadow-white">
      <div
        onClick={props.onHandleRoute}
        className="flex justify-center items-centertext-white text-xl text-white font-bold"
      >
        {props.name}
      </div>
    </div>
  );
};

export default MenuItem;
