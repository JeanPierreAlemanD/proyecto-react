import RatingStar  from "./RatingStar";

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

    const rate = rating?.rate ?? 0;
    const fullStars = Math.floor(rate);
    const partialStar = rate - fullStars;

    return <div onClick={onClick} className='rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition duration-300 w-[290px] sm:w-[180px] md:w-[220px] lg:w-[245px]'>
        <div className=" bg-gray-100 flex justify-center w-full">
            <img className="h-48 object-contain pt-5 w-[298px]" src={image} alt={title} />
        </div>
        <div className='px-6 py-4'>
            <p className="font-semibold line-clamp-2 mb-2 h-[27px] sm:text-[16px] lg:text-[15px]">{title}</p>
            <p className="sm:text-[20px] lg:text-[24px] text-gray-600 font-bold line-clamp-3 mb-4">${price}</p>

            {/* Sección de estrellas */}
            <div className="flex items-center space-x-1">
                {[0, 1, 2, 3, 4].map((idx) => {
                    let fillValue = 0;
                    if (idx < fullStars) fillValue = 1;
                    else if (idx === fullStars) fillValue = partialStar;
                    else fillValue = 0;
                    return <RatingStar key={idx} filled={fillValue} />;
                })}
                <span className="text-gray-600 text-sm ml-2">({rating?.count ?? 0})</span>
            </div>
        </div>
    </div>
}


export default Cards;