interface StarProps {
  rating: number; // 0 (vacía), 1 (llena), valor decimal (media estrella)
  count?: number; // Cantidad de estrellas, por defecto 0
}

const RatingStar = ({ rating = 5 }: StarProps) => {

  // Número entero de estrellas llenas
  const fullStars = Math.floor(rating);
  const partialStar = (rating - fullStars);


  return (
    <div className="flex items-center space-x-1">
      {[0, 1, 2, 3, 4].map((idx) => {
        let fillValue = 0;
        if (idx < fullStars) fillValue = 1;
        else if (idx === fullStars) fillValue = partialStar;
        else fillValue = 0;
        return (
          <svg
            key={idx}
            className="inline-block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <defs>
              <linearGradient id={`half-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${fillValue * 100}%`} stopColor="#fbbf24" />
                <stop offset={`${fillValue * 100}%`} stopColor="transparent" />
              </linearGradient>
            </defs>
            <polygon
              fill={fillValue === 1 ? "#fbbf24" : fillValue > 0 ? "url(#half)" : "none"}
              stroke="#fbbf24"
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
        );
      })}
      <span className="text-gray-600 text-sm ml-2">{rating}/5</span>
    </div>
  );
};

export default RatingStar;
