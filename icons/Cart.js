export const IShopping = ({ fill = 'none', size, stroke = 'currentColor' }) => {
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
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      ></path>
    </svg>
  )
}
