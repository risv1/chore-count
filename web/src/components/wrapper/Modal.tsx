import { ReactNode } from "react"

const Modal = (props: {children: ReactNode, onHandleClose: ()=>void}) => {

    return(
        <div  style={{ background: "rgba(0, 0, 0, 0.6)", zIndex: 1 }} onClick={props.onHandleClose} className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center">
            <div className="w-[80vh] h-[60vh] rounded-xl shadow-md shadow-sky-500 p-0 overflow-hidden z-1">
                {props.children}
            </div>
        </div>
    )
}
export default Modal;