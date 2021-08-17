import PropTypes from 'prop-types';
import s from '../FriedsList/friendList.module.css'


export default function FriendListItem({avatar, isOnline, name}){
    return(               
                <li className={s.item}>
                    <span className={isOnline ? s.statusOnline : s.statusNotOnline}></span>
                    <img className={s.avatar} src={avatar} alt={name} width="48" />
                    <p className={s.name}>{name}</p>
                </li>
    );
};

FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired, 
    isOnline:PropTypes.bool.isRequired, 
    name:PropTypes.string.isRequired,
};