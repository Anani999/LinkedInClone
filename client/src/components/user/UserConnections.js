import './UserConnections.css';

const UserConnections = () => {
    return(
        <div className="user-connections">
            <div className="user-connections-numbers">
                <span>14</span>
                <span className='connections'>Connections</span>
            </div>
            <div className="suggestions-user-connections">
                <span>Suggestions @</span>
            </div>
        </div>
    );
}

export default UserConnections;