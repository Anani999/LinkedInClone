import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

const Comment = ({postId}) => {
    const [comments , setComments] = useState([]);

    const fetchComments = async() => {
        const res = await axiosInstance.get(`/comment/${postId}`);
        setComments(res.data);
    };

    useEffect(() => {
        fetchComments();
    });

    if(!comments){
        return(<p>Loading</p>);
    }
    return(
        <>
            {comments.map((comment,index) => (
                
            <div className='posted-comments' key={index}>
                <div className='flex flex-column flex-gp15 '>
                    <div className='flex comment-header'>
                        <div className='comment-user-info'>
                            <img src={comment.profile.profileImageUrl} alt="comment user profile" />
                            <div className='user-text'>
                                <b>{comment.profile?.name}</b>
                                <p className='sx-text'>{comment.profile?.about}</p>
                            </div>
                        </div>
                        <div className='flex flex-gp10 comment-actions-up'>
                            <span>2d</span>
                            <BsThreeDots />
                        </div>
                    </div>
                    {/* comment content */}
                    <div className='main-comment'>
                        <div className=' text-align-left mt-1 comment-content'>
                            {comment.content}
                        </div>
                        <div className='comment-actions-down'>
                            <div className='comment-action'>
                                <span>Like</span>
                                <div className='comment-action-svg'>
                                    <BiLike /><span>{comment.likes}</span>
                                </div>
                            </div>
                            <div className='comment-action'>
                                <span>Reply</span>
                                <div className='comment-action-svg'>
                                    <span>{comment.comment?.replies}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
    );
}

export default Comment;