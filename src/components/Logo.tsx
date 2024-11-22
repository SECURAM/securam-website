export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 100 100"
        className="h-8 w-8"
        fill="currentColor"
      >
        <path
          d="M50 10L85 35L75 80H25L15 35L50 10Z"
          className="text-securam-yellow"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M50 20L50 10"
          className="text-securam-yellow"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
      </svg>
      <span className="text-xl font-bold text-securam-navy tracking-wider">SECURAM</span>
    </div>
  );
}