import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import "./Main.css"
import JobPost from "../../component/JobPost";

function Main() {

    const jobPosting = [
        {date: "20 May,2023", company: "Amazon", description: "Senior UI/UX Designer", position:["Part time", "Full time", "Internship"], pay: "$250/hr", location: "San Francisco, CA"},
        {date: "4 Feb,2023", company: "Google", description: "Junior UI/UX Designer", position:["Part time", "Full time", "Internship"], pay: "$150/hr", location: "California, CA"},
        {date: "29 Jan,2023", company: "Dribble", description: "Senior Engineer", position:["Part time", "Full time", "Internship"], pay: "$170/hr", location: "San Francisco, CA"},
        {date: "11 Apr,2023", company: "Twitter", description: "Software Engineer", position:["Part time", "Full time", "Internship"], pay: "$120/hr", location: "New York, NY"},
        {date: "18 Jan,2023", company: "Apple", description: "Software Architect", position:["Part time", "Full time", "Internship"], pay: "$250/hr", location: "Miami, Fl"}
    ]

  return (
    <div>
        <Navbar />
        <div>
            <button className="btn-upload"> Upload Resume</button>
        </div>
        <div className="container">
            <div className="filter-search">
                <h4>Filter</h4>
                <ul className="filter-list">
                    <li className="filter-item" ><input type="checkbox"/> Full time</li>
                    <li className="filter-item"><input type="checkbox"/> Part time</li>
                    <li className="filter-item"><input type="checkbox"/> Internship</li>
                    <li className="filter-item"><input type="checkbox"/> Project Work</li>
                    <li className="filter-item"><input type="checkbox"/> Volunteering</li>
                </ul>
            </div>
            <div class="vertical-line"></div>
            <div className="job-container">
                <div className="recommended-container">
                    <h2>Recommended Jobs</h2>
                    <div className="job-result" >384</div>
                </div>
                <div>
                    {jobPosting.map((post, index) => (
                        <JobPost
                            key={index}
                            data={post.data}
                            company={post.company}
                            description={post.description}
                            position={post.position}
                            pay={post.pay}
                            location={post.location}/>
                        ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main;