import { Profile } from "./Profile/Profile";
import user from 'back/user.json';
import { GlobalStyle } from "./GlobalStyle"; 
import { Statistics } from "./Statistics/Statistics";
import data from 'back/data.json'
import { FriendList } from "./FriendList/FriendList";
import friends from 'back/friends.json'
import transactions from 'back/transactions.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
export const App = () => {
  return  (
    <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
    <GlobalStyle />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
    </>
  );
};
