import { useNavigate } from "react-router";
import Modal from "./wrapper/Modal"

const NewChore = () => {

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const handleClose = () => {
        navigate("/chores");
    }

    return(
        <Modal onHandleClose={handleClose}>
            <div onClick={(e)=> e.stopPropagation()} className="w-full h-[60vh] bg-indigo-700 opacity-100 border-2 flex justify-center">
                <form onSubmit={handleSubmit} className="flex gap-3 justify-center flex-col">
                    <input type="text" placeholder="Enter new chore" className="w-full h-14 bg-neutral-500 text-sky-500 border-2 border-indigo-700" />
                    <button className="bg-black text-white p-2 font-bold text-xl">Add Chore</button>
                </form>
            </div>
        </Modal>
    )
}

export default NewChore;