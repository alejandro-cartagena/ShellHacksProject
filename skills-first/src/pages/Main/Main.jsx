import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from "../../component/Navbar";
import "./Main.css"
import JobPost from "../../component/JobPost";

function Main() {

    const jobPosting = [
        {date: "20 May,2023", company: "Amazon", description: "Senior UI/UX Designer", position:["Part time", "Full time", "Internship"], pay: "$250/hr", location: "San Francisco, CA"},
        {date: "4 Feb,2023", company: "Google", description: "Junior UI/UX Designer", position:["Part time", "Full time", "Internship"], pay: "$150/hr", location: "California, CA"},
        {date: "29 Jan,2023", company: "Dribble", description: "Senior Engineer", position:["Part time", "Full time", "Internship"], pay: "$170/hr", location: "San Francisco, CA"},
        {date: "11 Apr,2023", company: "Twitter", description: "Software Engineer", position:["Part time", "Full time", "Internship"], pay: "$120/hr", location: "New York, NY"},
        {date: "18 Jan,2023", company: "Apple", description: "Software Architect", position:["Part time", "Full time", "Internship"], pay: "$250/hr", location: "Miami, Fl"},
        {date: "6 Nov,2023", company: "Apple", description: "Java Developer", position:["Part time", "Full time", "Internship"], pay: "$165/hr", location: "Seattle, WA"}
    ]

    const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('resume', selectedFile);
        console.log("Working");
      
    //   fetch('https://example.com/upload', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
    }
  };

  return (
    <div className="main-page">
        <Navbar />
        <div className="resume-input">
            <input 
                type="file" 
                accept=".pdf, .doc, .docx" 
                onChange={handleFileChange} 
            />
            <button className="btn-upload" onClick={handleUpload}> Upload</button>
        </div>
        <div className="container-main">
            <div className="filter-search">
                <div className="filter-search-text">
                    <h4>Filter</h4>
                    <ul className="filter-list">
                        <li className="filter-item"><input className="checkbox" type="checkbox"/> Full time</li>
                        <li className="filter-item"><input className="checkbox" type="checkbox"/> Part time</li>
                        <li className="filter-item"><input className="checkbox" type="checkbox"/> Internship</li>
                        <li className="filter-item"><input className="checkbox" type="checkbox"/> Project Work</li>
                        <li className="filter-item"><input className="checkbox" type="checkbox"/> Volunteering</li>
                    </ul>
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="job-container">
                <div className="recommended-container">
                    <h2>Recommended Jobs</h2>
                    <div className="job-result" >384</div>
                </div>
                <div className="job-container">
                    {jobPosting.map((post, index) => (
                        <JobPost
                            index={index}
                            date={post.date}
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