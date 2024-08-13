import { BiQuestionMark, BiRightArrow, BiRightArrowAlt, BiShield, BiSolidEvStation } from 'react-icons/bi';
import './UserFooter.css';
import {GenIcon} from 'react-icons'
const UserFooter = () => {
    return(
        <div className="user-footer m-auto">
            <div className="flex ">

                <nav className=" w-50 flex flex-gp10 flex-space-evenly">
                    <ul className='list-none list-li-gap'>
                        <li>About</li>
                        <li>Professional Community Policies</li>
                        <li>Privacy & Terms</li>
                        <li>Sales Solutions</li>
                        <li>Safety Center</li>
                    
                    </ul>
                    <ul className='list-none list-li-gap'>
                        <li>Accessibility</li>
                        <li>Careers</li>
                        <li>Ad Choices</li>
                        <li>Mobile</li>
                    </ul>
                    <ul className='list-none list-li-gap'>
                        <li>Talent Solutions</li>
                        <li>Marketing Solutions</li>
                        <li>Advertising</li>
                        <li>Small Business</li>
                    </ul>
                </nav>
                <div className="flex flex-column flex-gp20">
                    <div className='flex flex-gp10'>
                        <BiQuestionMark className='svg-30'></BiQuestionMark>
                        <div className='flex flex-column flex-gp5'>
                            <b>Questions ?</b>
                            <span className='s-text-fade '>Visit our Help Center</span>
                        </div>
                    </div><div className='flex flex-gp10'>
                        <BiSolidEvStation className='svg-30'></BiSolidEvStation>
                        <div className='flex flex-column flex-gp5'>
                            <b>Manage your account and privacy ?</b>
                            <span className='s-text-fade '>Go to your Settings.</span>
                        </div>
                    </div><div className='flex flex-gp10'>
                        <BiShield className='svg-30'></BiShield>
                        <div className='flex flex-column flex-gp5'>
                            <b>Recommendation transparency</b>
                            <span className='s-text-fade '>Learn more about Recommendation Content</span>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex flex-column'>
                        <span className='s-text-fade'>Select Language</span>
                        <select className='select' name='lang'>
                            <option value={'English'}>English  English</option>
                            <option value={'Telugu'}>Telugu</option>
                            <option value={'Hindi'}>Hindi</option>
                        </select>
                        
                    </div>
                </div>

            </div>
            <div className='mh-1'>
                <span className='text-align-left black-medium'>LinkedIn Corporation @ 2024</span>
            </div>
        </div>
    );
}

export default UserFooter;