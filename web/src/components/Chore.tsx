const Chore = (props: {id: number, name: string, date: string}) => {
    return(
        <div className="w-56 h-32 bg-indigo-700 flex justify-center flex-col border-2 border-sky-500">
            <h3 className="text-white font-bold text-xl">{props.id}</h3>
            <h3 className="text-white font-bold text-xl">{props.name}</h3>
            <h3 className="text-white font-bold text-xl">{props.date}</h3>
        </div>  
    )
}

export default Chore;