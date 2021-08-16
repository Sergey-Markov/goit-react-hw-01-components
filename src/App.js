import user from './components/Profile/user.json'
import statisticalData from './components/Statistic/statistical-data.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistic/Statistic';
import FriendList from './components/FriedsList/FriendList';
import friends from './components/FriedsList/friends.json';
import transactions from './components/Transactions/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';
import './App.module.css';

function App() {
  return (
    <div>
      <Profile 
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      
      <Statistics 
        title="Upload stats" 
        stats={statisticalData} 
      />

      <FriendList 
        friends={friends} 
      />

      <TransactionHistory 
        items={transactions} 
      />


    </div>
    
  );
};

export default App;
