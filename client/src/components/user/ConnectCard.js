import { BiX } from "react-icons/bi";
import './ConnectCard.css';
const ConnectCard = () => {
    return(
        <div className=" click hover-shadow flex flex-column flex-gp10 flex-center bg-white br-rad br-rad-light overflow-h connect-card">
            <div className="bg w-100 relative">
                <img className="w-100" src="https://media.licdn.com/dms/image/v2/D5616AQH9iXpqh1rbFQ/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1690552017165?e=1729123200&v=beta&t=tnQeuGnCZjsuUG7pf0R6gvmHySehC32P8Yuz4p8T3hM" alt="bg"/>
                <div className="absolute top-right mini-action-up-button into">
                    <BiX className="svg-30"></BiX>
                </div>
                <img className="center-h rounded-image absolute top-50 short-image" src="https://media.licdn.com/dms/image/D5603AQGS042UoXQPSQ/profile-displayphoto-shrink_200_200/0/1712853326761?e=1729123200&v=beta&t=muB8UUiWLrgTxY0HVMWvQ2TiRGnnVTyraVMZfKCsYAQ" alt="profile" />
            </div>
            <span className="white-space-2"></span>
            <div classrName="flex flex-start">
                <b>Sagar</b>
                <p>Full stack developer </p>
            </div>
            <div className="flex-start flex pd10 rounded-hover-button flex ">
                <span className="circle-button">Connect +</span>
            </div>
        </div>
    );
}

export default ConnectCard;