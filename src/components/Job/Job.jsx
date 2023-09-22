import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Job = ({ job }) => {
    // eslint-disable-next-line react/prop-types
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-4 text-[#7e90fe]">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe]">{job_type}</button>
                </div>
                    <div className="mt-4 flex gap-2">
                        <h2 className="flex gap-2"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
                    <h2 className="flex gap-2"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>{salary}</h2>
                    </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;