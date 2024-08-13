import { BsEye, BsEyeFill, BsGraphUp } from 'react-icons/bs';
import './UserAnalytics.css';
import { FaNetworkWired } from 'react-icons/fa';
import { BiRightArrow, BiRightArrowAlt, BiSearch } from 'react-icons/bi';
const UserAnalytics = () => {
    return(
        <div className="user-analytics">
            <div className="info-user-analytics">
                <h2>Analytics</h2>
                <span><BsEyeFill/> <p>Private to you</p></span>
            </div>
            <div className="short-user-analytics">

            <div className="analytic">
                    <FaNetworkWired/>
                    <div className='info-analytic'>
                        <span className="analytic-value">15 profile views</span>
                        <span>Discover who's viewed your profile</span>
                    </div>
                </div>
                <div className="analytic">
                    <BsGraphUp/>
                    <div className='info-analytic'>
                        <span className="analytic-value">56 post impressions</span>
                        <span>Check out who's engaging with your posts</span>
                        <span>Past 7 days</span>
                    </div>
                </div>
                <div className="analytic">
                    <BiSearch/>
                    <div className='info-analytic'>
                        <span className="analytic-value">2 search appearances</span>
                        <span>See how often you appear in search results.</span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="action-user-analytics">
                <span>Show all analytics <BiRightArrowAlt/></span>
            </div>
        </div>
    );

}

export default UserAnalytics;
