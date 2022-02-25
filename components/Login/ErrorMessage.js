const ErrorMessage = ({ children }) => {
  return (
    <div className="font-fvolkhov mt-3 rounded-sm text-red-600 text-center">
        {children}
    </div>
  )
}

export default ErrorMessage