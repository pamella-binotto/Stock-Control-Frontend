function SuccessMessage({ message }) {
    if (!message) return null;

    return (
        <div className="success-container">
            <p className="success-text">{message}</p>
        </div>
    )
}

export default SuccessMessage