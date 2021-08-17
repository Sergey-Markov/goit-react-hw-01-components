import PropTypes from 'prop-types';
import s from '../Statistic/statistic.module.css';

let color = 'red';
function randomColor(color){
    color ='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    return color;
};
export default function Statistic({title, stats}) {
    
    return(
        
        <section className={s.statistics}>
            {title && <h2 className="title">{title}</h2>}

            <ul className={s.statList}>
                {stats.map(stat =>(
                    
                    <li key={stat.id} className={s.item} style={{backgroundColor:randomColor(color)}}>
                        <span className={s.label}>{stat.label}</span>
                        <span className="percentage"> {stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );  
};





Statistic.propTypes = {
    title:PropTypes.string,
    stats:PropTypes.array,
};