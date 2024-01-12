import { useNavigate } from "react-router";
import Modal from "../wrapper/Modal";
import { v4 as uuidv4 } from "uuid";
import { Form } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/config";
import { useSession } from "../../SessionContext";
import { useEffect, useRef, useState } from "react";

const NewChore = () => {
  const navigate = useNavigate();
  const { user } = useSession();
  const [data, setData] = useState({
    name: "",
    day: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if (nameRef.current) {
      nameRef.current.value = data.name || "";
    }
    if (dateRef.current) {
      dateRef.current.value = data.day || "";
    }
  }, [data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addPost = async () => {
    try {

      if (user && user.uid) {
        const docRef = await addDoc(collection(db, "chores"), {
          id: uuidv4(),
          user_id: user.uid,
          name: data.name,
          day: data.day.toLowerCase(),
          created_at: Date.now(),
        });
  
        console.log("Document written with id: ", docRef.id);
      } else {
        console.error("User is not authenticated");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost()
    navigate("..");
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
        <Form
          onSubmit={handleSubmit}
          className="flex gap-5 justify-center flex-col"
          method="post"
        >
          <h3 className="text-3xl text-white font-bold">Add New Chore</h3>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter new chore"
            className="p-5 text-xl rounded-xl focus:outline-none w-full h-14 bg-white text-sky-500 border-2 border-indigo-700"
          />
          <input
            onChange={handleChange}
            type="text"
            name="day"
            placeholder="Enter day"
            className="p-5 text-xl rounded-xl focus:outline-none w-full h-14 bg-white text-sky-500 border-2 border-indigo-700"
          />
          <button className="bg-sky-500 text-white p-2 rounded-xl font-bold text-xl">
            Add
          </button>
        </Form>
      </div>
    </Modal>
  );
};

export default NewChore;
