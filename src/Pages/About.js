import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    return (
        <>
        <h1>About Me</h1>
        <button onClick={() =>navigate(-1)}>Back to Home Page</button>
        </>
    )
  };
  
  export default About;