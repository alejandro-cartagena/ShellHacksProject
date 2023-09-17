import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import "./JobPost.css"

function JobPost(props) {
    
    const colors = [
        { background: '#FFCF9D' },
        { background: '#8DDFCB' },
        { background: '#D8B4F8' },
        { background: '#CAEDFF' },
        { background: '#FFC7EA' },
        { background: '#B4B4B3' }
      ];
    let backgroundColor = colors[props.index % colors.length];

  return (
    <div className="job-item">
        <div style={ backgroundColor } className="job-info data-item-border">
            <div className="date-posted">
                <div className="date-left-item data-item-border"><p className="date-text">{props.date}</p></div>
                <div className="data-item-border date-right-item"><FontAwesomeIcon className="date-text date-bookmark-icon" icon={faBookmark} /></div>
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
            <div >
                <p className="pay-detail-text"><strong>{props.pay}</strong></p>
                <p className="pay-detail-text">{props.location}</p>
            </div>
            <button className="btn-detail"> Detail</button>
        </div>
    </div>
  );
}

export default JobPost;