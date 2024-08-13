import { BiRightArrow, BiRightArrowAlt } from 'react-icons/bi';
import './UserInterests.css';
import {useState} from 'react';
const UserInterests = () => {
    const [selected,setSelected] = useState(0) 
    return(
        <div className="user-interests">
            <div className="info-user-interests pd10">
                <h2>Interests</h2>
            </div>
            <div className='info-slides-user-interests'>
                <div className='slide-togle'>
                    <span onClick={() => setSelected(0)} className={selected=== 0 ? 'selected' : ''}>Companies</span>
                    <span onClick={() => setSelected(1)} className={selected === 1 ? 'selected' : ''}>Newsletters</span>
                </div>
                <hr className='light-hr'></hr>
            </div>
            <div className="short-user-interests flex flex-wrap flex-row ph2 flex-gp20">

                <div className="user-interest mini-flex-box ">
                    <img className='short-image' src='https://media.licdn.com/dms/image/D560BAQGiz5ecgpCtkA/company-logo_100_100/0/1688684715866/ibm_logo?e=1731542400&v=beta&t=I6ndFr6lqzrwazDuEKxEXoJ6KlRh-KzZbs7vEziyaQA' alt="IBM"/>
                    <div className='mini-column-box user-interest'>
                        <span className="name blue-highlight">IBM</span>
                        <span className="s-text-fade">17,013,335 followers</span>
                        <span className='following circle-button'><BiRightArrow/>Following</span>
                    </div>
                </div>
                <hr className='light-hr'></hr>
                <div className="user-interest mini-flex-box">
                    <img className='short-image' src='https://media.licdn.com/dms/image/D4E0BAQG-XygI4z934A/company-logo_100_100/0/1723130650427/accenture_logo?e=1731542400&v=beta&t=eHJvL8ifcznNF0G2504kDA2zQT3R5BopIIr3TZmTv5Q' alt="IBM"/>
                    <div className='mini-column-box'>
                        <span className="name blue-highlight">Accenture</span>
                        <span className="s-text-fade">12,304,660 followers</span>
                        <span className='following circle-button'><BiRightArrow/>Following</span>
                    </div>
                </div>
                <hr className='light-hr'></hr>

            </div>
            <div className='hover-action-button'>
                <span><span>Show all posts</span><BiRightArrowAlt/></span>
            </div>

        </div>
    );
}

export default UserInterests;