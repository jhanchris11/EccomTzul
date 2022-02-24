export const IMinus = ({ fill = 'none', size, stroke = 'currentColor' }) => {
  return (
    <svg
      className="w-6 h-6"
      fill={fill}
      stroke={stroke}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  )
}
