import PropTypes from 'prop-types';
import s from '../FriedsList/friendList.module.css'


export default function FriendList({friends}){
    return(
        <ul className={s.friendList}>
            {friends.map(friend =>(                
                <li key={friend.id} className={s.item}>
                    {friend.isOnline ? <span className={s.statusOnline}></span> : <span className={s.statusNotOnline}></span>}
                    <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
                    <p className={s.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends:PropTypes.array,
};