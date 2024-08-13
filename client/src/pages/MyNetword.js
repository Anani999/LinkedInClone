import { useState } from "react";
import ConnectCard from "../components/user/ConnectCard";
import Navbar from "../components/Navbar";

const MyNetwork = () => {
    const people = [0,2,4,3,3,3,3,3,3,3,3]
    return(
        <div className="fullpage">
            <Navbar/>
            <div className=" bg-gray user-network content-card bg-white br-rad">
                <div className="w-100 content-main-card flex flex-column">
                    <div className="text-align-left pd10 tb">
                        People in linkedin
                    </div>
                    <hr className="light-hr"></hr>
                    <div className="pd10 flex flex-wrap flex-row flex-gp10 w-100">
                        {people.map(() => (
                            <ConnectCard/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyNetwork;