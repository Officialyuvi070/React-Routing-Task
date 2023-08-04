import { useNavigate } from "react-router-dom";

const Contact = () =>{
    const navigate = useNavigate()
    return (
        <>
        <h1>Contact Me</h1>
        <button onClick={() =>navigate(-1)}>Back to Home Page</button>
        </>
    )
}

export default Contact