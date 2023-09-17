import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import "./JobPost.css"

function JobPost(props) {
  return (
    <div>
        <div className="job-info">
            <div className="date-posted">
                <div><p>{props.date}</p></div>
                <div><FontAwesomeIcon icon={faBookmark} /></div>
            </div>
            <div>
                <p>{props.company}</p>
                <div>
                    <p>{props.description}</p>
                    <img src="" alt="" />
                </div>
            </div>
            <div>
                {props.position.map(element =>{
                    <div className="position-available"> {element} </div>
                })}
            </div>
        </div>
        <div className="pay-detail">
            <div>
                <p>{props.pay}</p>
                <p>{props.location}</p>
            </div>
            <button>Detail</button>
        </div>
    </div>
  );
}

export default JobPost;