const Card = () => {

    return (

        <div className="bg-white cursor-pointer w-64 h-64 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 m-2 px-3 py-0.5 bg-slate-100 rounded-lg text-black text-xs">Type</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Name"/>
                <div className="absolute top-0 right-0 flex  justify-center 
                items-center bg-slate-100 w-6 h-6 m-2 p-4 text-xl font-bold rounded-full">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light p-1" >Name</span>
                <span className="text-m font-bold p-1">$800</span>
            </p>
        </div>

    )

}

export default Card;