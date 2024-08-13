import { useState } from 'react';
import './UserMessages.css';

const UserMessages = () => {
    const [visible,setVisible] = useState(false);
    const togleVisible = () => {
        setVisible(!visible);
    }
    return(
        <div className='user-messages' style={visible ? {display:'block'} : {display:'none'}}>
            <div className='top-info-user-messages'>
                <div className='info-user-messages'>
                    <span>Messages</span>
                    <span onClick={togleVisible}>{visible ? 'Close' : 'Down'}</span>
                </div>
            </div>
            
            <div className='full-user-messages'>
                <div className='chats-user-messages'>

                    <div className='chat-user-messages'>
                        <img alt='image'/>
                        <div className='chat-info-user-messages'>
                            <span className='chat-info-name'>Unknown User</span>
                            <span>You:Hi how are you ?</span>
                        </div>
                    </div>
                    <div className='chat-user-messages'>
                        <img alt='image'/>
                        <div className='chat-info-user-messages'>
                            <span className='chat-info-name'>Unknown User</span>
                            <span>You:Hi how are you ?</span>
                        </div>
                    </div>
                    <div className='chat-user-messages'>
                        <img alt='image'/>
                        <div className='chat-info-user-messages'>
                            <span className='chat-info-name'>Unknown User</span>
                            <span>You:Hi how are you ?</span>
                        </div>
                    </div>
                    <div className='chat-user-messages'>
                        <img alt='image'/>
                        <div className='chat-info-user-messages'>
                            <span className='chat-info-name'>Unknown User</span>
                            <span>You:Hi how are you ?</span>
                        </div>
                    </div>

                </div>
                <div className='specific-user-messages'>
                    <div className='info-specific-user-messages'>
                        <span>Unknown User</span>
                    </div>
                    <div className='chat-history-specific-user-messages'>
                        <span className='chat-history-sender'>Hi , how was at Amazon ?</span>
                        <span className='chat-history-receiver'>Yah! it was new milestone </span>
                        <span className='chat-history-sender'>In what department are you working ?</span>
                        <span className='chat-history-sender'>Am in the AWS cloud </span>
                        <span className='chat-history-sender'>That was cool !</span>
                    </div>
                    <div className='chat-input-user-messages'>
                        <input placeholder='Type here ...'/>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserMessages;