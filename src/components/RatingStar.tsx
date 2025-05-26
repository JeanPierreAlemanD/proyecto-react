interface StarProps {
  filled: number; // 0 (vacía), 1 (llena), valor decimal (media estrella)
}

const RatingStar = ({ filled }: StarProps) => {
  return (
    <svg
      className="inline-block"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fbbf24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="half">
          <stop offset={`${filled * 100}%`} stopColor="#fbbf24" />
          <stop offset={`${filled * 100}%`} stopColor="transparent" />
        </linearGradient>
      </defs>
      <polygon
        fill={filled === 1 ? "#fbbf24" : filled > 0 ? "url(#half)" : "none"}
        stroke="#fbbf24"
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  );
};

export default RatingStar;
