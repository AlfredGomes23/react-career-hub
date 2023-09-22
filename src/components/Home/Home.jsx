import BAnner from "../Banner/BAnner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <BAnner></BAnner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            <h2>This is Home.</h2>
        </div>
    );
};

export default Home;