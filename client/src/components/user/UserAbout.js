import './UserAbout.css';
import { BiDiamond, BiPencil, BiRightArrowAlt } from "react-icons/bi";

const UserAbout = ({profile}) => {
    return(
        <div className="user-about">
            <div className="info-user-about">
                <h2>About</h2>
                <span className='mini-action-up-button'><BiPencil/></span>
            </div>
            <div className="content-user-about">
                <textarea>
                    {profile?.about}
                </textarea>
            </div>
            <div className="bottom-user-about">
                <div className="bottom-skills-user-about">
                    <div className="info-button-user-about">
                        <BiDiamond/>
                        <div className="skills-button-user-about">
                            <b>Top skills</b>
                            <span>React.js * Front-End Development * RESTful architecture</span>
                        </div>
                    </div>
                </div>
                <BiRightArrowAlt/>
            </div>
        </div>
    );
}

export default UserAbout;