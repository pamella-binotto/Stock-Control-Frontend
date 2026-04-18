function ErrorMessage ({message}){
    if (!message) return null

    return(
        <div className="error-container">
            <p className="error-text">{message}</p>
        </div>
    );
    
}

export default ErrorMessage; 