import { BiAlignRight, BiCaretDownCircle, BiCaretRight, BiLogoOkRu, BiPencil, BiRightArrowAlt, BiRightIndent, BiSolidRightArrow } from 'react-icons/bi';
import './UserPosts.css';
import { useState } from 'react';


const UserPosts = ({profile,posts}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    if(!posts || posts.length == 0){
        return <div>No posts were found</div>
    }
    console.log(posts.length,'posts')
    return(
        <div className="user-posts">
            <div className="info-user-posts">
                <span>
                    <h2>Activity</h2>
                    <p className='blue-highlight'>20 followers</p>
                </span>
                <div className='mini-action-up-button'><BiPencil/></div>
            </div>
            <div className='create-post-user-posts'>
                <span>Create a post</span>
            </div>
            <div className='type-activity-user-activity'>
                <button className='weight circle-button'>Posts</button>
                <button className='circle-button'>Comments</button>
                <button className='circle-button'>Images</button>
            </div>
            <div className="short-user-posts">
                {posts.map((post,index) => (                                    
                    <div key={index} className="user-post">
                        <div className='short-post flex-gp10'>
                            <span className="mini-horizontal-line"><b>{profile.name || 'Sagar'}</b>.posted this * 2w</span>
                            <div className='short-post-card'>
                                {post.mediaType==='video'?
                                    <video className='short-video-post' src={post.mediaUrl}>Video</video>
                                    :<img src={post.mediaUrl || 'http://localhost:3001/defaults/profile.jpg'} alt="Image"/>
                                }
                                <div className='short-content-post-card'>
                                    <p className={isExpanded ? 'expanded' : 'collapsed'}>{post.caption || 'Sample caption'}</p>
                                    <span onClick={handleExpand}><span>...</span><span>...show more</span></span>
                                </div>
                            </div>
                        </div>
                    </div>    
                ))}
                
                <div className="user-post">
                    <div className='short-post flex-gp10 '>

                        <span className="mini-horizontal-line s-text-faded"><b>Sagar</b>.posted this * 2w</span>
                        <div className='short-post-card'>
                            <img  src='https://media.licdn.com/dms/image/D5622AQHqXTvxq_gpCw/feedshare-shrink_160/0/1721410378283?e=1726099200&v=beta&t=AiXp1-1O1iJ7mBMob_Su12k76-FOaao8CoVIb_4Apdo' alt="Image"/>
                            <div className='short-content-post-card'>
                                <p className={isExpanded ? 'expanded' : 'collapsed'}>**Today's Progress on LinkedIn Clone Project:**

Today, I created a reusable `Post` component that includes a comments section. This component accepts an object as a prop, allowing for flexible data input. I utilized the `map` function to dynamically render the post data. Additionally, I enhanced the `ProfileCard` component, improving its design and functionality. Excited to continue refining the project!

hashtag#fullstack hashtag#projectprogress hashtag#newchallenge</p>
                                <span onClick={handleExpand}><span>...</span><span>...show more</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='light-hr'></hr>
            <div className="hover-action-button">
                <span><p>Show all posts</p><BiRightArrowAlt/></span>
            </div>
        </div>
    );
}

export default UserPosts;