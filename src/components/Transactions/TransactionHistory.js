import PropTypes from 'prop-types';
import s from './transactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      {items.map(item => (
        <tbody key={item.id}>
          <tr>
            <td className={s.td}>{item.type}</td>
            <td className={s.td}>{item.amount}</td>
            <td className={s.td}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
