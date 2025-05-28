import RatingStar from "./RatingStar";

interface CardProps {
    title: string;
    description?: string;
    price: number;
    image: string;
    onClick?: () => void;
    rating?: {
        rate?: number
        count?: number;
    }
}

function Cards({ title, price, image, rating, onClick }: CardProps) {


    return <div onClick={onClick} className='rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition duration-300 w-[290px] sm:w-[180px] md:w-[220px] lg:w-[245px]'>
        <div className=" bg-gray-100 flex justify-center w-full">
            <img className="h-48 object-contain pt-5 w-[298px]" src={image} alt={title} />
        </div>
        <div className='px-6 py-4'>
            <p className="font-semibold line-clamp-2 h-[27px] sm:text-[16px] lg:text-[15px]">{title}</p>
            {/* Sección de estrellas */}
            <div className="flex items-center space-x-1">
                {rating?.rate !== undefined && (
                    <RatingStar rating={rating?.rate} />
                )}
                {/* <span className="text-gray-600 text-sm ml-2">({rating?.count ?? 0})</span> */}
            </div>
            <p className="sm:text-[20px] lg:text-[24px] text-gray-600 font-bold line-clamp-3 mb-4 text-left">${price}</p>
        </div>
    </div>
}


export default Cards;