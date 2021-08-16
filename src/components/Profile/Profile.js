import PropTypes from 'prop-types';
import s from './profile.module.css';
import defaultImage from '../Profile/defaultImage.jpg';

export default function Profile({name, tag, location,followers, views, likes, 
    url=defaultImage}){
    return(
     <div className={s.profile}>
       <div className="description">
           <img
               src={url}
               alt="Аватар пользователя"
               className={s.avatar}
               
           />
           <p className={s.name}>{name}</p>
           <p className={s.tag}>{tag}</p>
           <p className={s.location}>{location}</p>
       </div>
   
       <ul className={s.stats}>
           <li>
               <span className={s.label}>Followers</span>
               <span className={s.quantity}>{followers}</span>
           </li>
           <li>
               <span className={s.label}>Views</span>
               <span className={s.quantity}>{views}</span>
           </li>
           <li>
               <span className={s.label}>Likes</span>
               <span className={s.quantity}>{likes}</span>
           </li>
       </ul>
   </div>
    );
   };

   Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
    
    url: PropTypes.string
   };






