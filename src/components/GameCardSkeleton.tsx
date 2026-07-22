const GameCardSkeleton = () => {
    const skeletons = [1,2,3,4,5,6,7,8,9];

  return (
    <>
        {skeletons.map((skeleton) => (
            <div key={skeleton} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 flex">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col w-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <img className="w-full h-56 object-cover bg-gray-50" src='test' />
                    
                    <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-800 bg-teal-50 rounded-full mb-3">Loading</span>
                    </div>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default GameCardSkeleton