import { Link } from 'react-router-dom';

const GenresListSkeleton = () => {
    const skeletons = [1,2,3,4,5,6,7,8,9];

    return (
        <>
            {skeletons.map((skeleton) => (
                <Link to={`/`}  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 text-indigo-900 font-medium transition-colors group" key={skeleton}>
                    <img className="w-10 h-10 rounded-lg object-cover ring-2 ring-indigo-200" src='test' />

                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">Loading Item</p>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default GenresListSkeleton