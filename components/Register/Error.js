const Error = ({ children }) => {
    return (
        <div>
            <span className="text-sm text-red-600">{children}</span>
        </div>
    )
}

export default Error