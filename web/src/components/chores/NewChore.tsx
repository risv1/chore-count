import { useNavigate } from "react-router";
import Modal from "../wrapper/Modal";

const NewChore = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("..")
  };

  const handleClose = () => {
    navigate("..");
  };

  return (
    <Modal onHandleClose={handleClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-[60vh] rounded-xl bg-indigo-700 opacity-100 border-2 flex justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="flex gap-5 justify-center flex-col"
        >
          <h3 className="text-3xl text-white font-bold">Add New Chore</h3>
          <input
            type="text"
            placeholder="Enter new chore"
            className="p-5 text-xl rounded-xl focus:outline-none w-full h-14 bg-white text-sky-500 border-2 border-indigo-700"
          />
          <button className="bg-sky-500 text-white p-2 rounded-xl font-bold text-xl">
            Add
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default NewChore;
