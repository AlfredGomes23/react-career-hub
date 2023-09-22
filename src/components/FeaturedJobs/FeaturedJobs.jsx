import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(resp => resp.json())
        .then(datas => setJobs(datas))
    }, []);




    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit deserunt ab minus! Explicabo dolor at sit autem ipsa nisi.</p>
            </div>
            <div className="grid grid-cols-2">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;