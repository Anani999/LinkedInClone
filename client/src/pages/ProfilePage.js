import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import UserAbout from '../components/user/UserAbout';
import UserAnalytics from '../components/user/UserAnalytics';
import UserConnections from '../components/user/UserConnections';
import UserFooter from '../components/user/UserFooter';
import UserInterests from '../components/user/UserInterests';
import UserMessages from '../components/user/UserMessages';
import UserPosts from '../components/user/UserPosts';
import UserResources from '../components/user/UserResources';
import './ProfilePage.css';
import { useEffect, useState } from 'react';


const ProfilePage = () => {
    const [user,setUser] = useState({});
    const [profile,setProfile] = useState({});
    const [myPosts, setMyPosts] = useState([]);
    const {id} = useParams();

    const fetchPosts = async() => {
        const res = await axiosInstance.get('/posts');
        setMyPosts(res.data.posts);
    };

    const fetchUser = async() => {
        try{
            const res = await axiosInstance.get('/auth/user');
            setUser(res.data);  
        }catch(error){
            console.error(error);
        }
    };
    
    const fetchProfile = async() => {
        try{
            const res = await axiosInstance.get(`/profile/${id}`);
            setProfile(res.data);  
        }catch(error){
            console.error(error);
        }
    };
    
    useEffect(() => {
        fetchUser();
        fetchProfile();
        fetchPosts();
            
    },[]);

    if(!profile){
        return(<div>Loading ... !</div>)
    }
    return(
        <div className="profilepage-container">
            <Navbar/>
            {/* PROFILE TWO CONTAINERS */}
            <div className="profilepage-container-dual">
                {/* container1 */}
                <div className="profilepage-container-left">
                    <ProfileCard main={true} />
                    {/* <UserConnections/> */}
                    <UserAnalytics/>
                    <UserResources/>
                    <UserAbout profile={profile} />
                    <UserPosts posts={myPosts} profile={profile} />
                    <UserInterests/>
                </div>
                {/* container2 */}
                <div className="profilepage-container-right">
                    
                </div>
            </div>
            {/* FOOTER */}
            <div className="profile-page-footer">
                <UserFooter/> 
            </div>
            <UserMessages/>
        </div>
    );
}

export default ProfilePage;