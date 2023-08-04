import { useNavigate } from "react-router-dom";

const News = () => {
    const navigate = useNavigate()
    return (
        <>
        <h1>Latest News</h1>
        <button onClick={() =>navigate(-1)}>Back to Home Page</button>
        </>
    )
  };
  
  export default News;