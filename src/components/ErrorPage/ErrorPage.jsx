import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center space-y-5 p-60">
            <h1 className="text-5xl">Oops! Error</h1>
            <button className="btn"><Link to="/ ">Go Home</Link></button>
        </div>
    );
};

export default ErrorPage;