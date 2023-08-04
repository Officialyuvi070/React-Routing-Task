import {Link} from "react-router-dom"

const Home = () => {
    return <div className="My-Router">
    <h1>This is My Home Page</h1>
    <div >
    
    <button><Link to="/about">About</Link></button>
    <button><Link to="/contact">Contact</Link></button>
    <button><Link to="/news">News</Link></button>
    </div>
    </div>;
  };
  
  export default Home;