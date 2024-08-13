import { BiNetworkChart, BiRightArrowAlt, BiSave } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import './UserResources.css';

const UserResources = () => {
    return(
        <div className="user-resources">
            <div className="up-content-user-resources">
                <div className="flex flex-column gp5">
                    <h2>Resources</h2>
                    <span className="flex flex-gp5 flex-center"><BsEye/> <p>Private to you</p></span>
                </div>
                <div className="flex flex-row flex-gp10 pd10">
                    <span><BiNetworkChart/></span>
                    <span className="info-item-user-resources">
                        <b>My network</b>
                        <p>See and manage your connections and interests</p>
                    </span>
                </div>
                <div className="flex flex-row flex-gp10 pd10">
                    <span><BiSave/></span>
                    <span className="info-item-user-resources">
                        <b>Saved items</b>
                        <p>Keep track of your jobs, courses, and articles</p>
                    </span>
                </div>
            </div>
            <hr className="light-hr"/>
            <div className="hover-action-button">
                <span><span>Show all 4 resources</span><BiRightArrowAlt/></span>
            </div>
        </div>
    );
}

export default UserResources;