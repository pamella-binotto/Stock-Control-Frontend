function ErrorMessage ({message}){
    if (!message) return null

   const text = 
    typeof message === "object"
    ? message.general || Object.values(message).join(", ")
    :message; 
   
    return(
        <div className="error-container">
            <p className="error-text">{text}</p>
        </div>  
    );
    
}

export default ErrorMessage; 