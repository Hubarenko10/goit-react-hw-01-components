import { Profile } from "./Profile/Profile";
import user from 'back/user.json';
import { GlobalStyle } from "./GlobalStyle"; 
import { Statistics } from "./Statistics/Statistics";
import data from 'back/data.json'
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
    <Statistics stats={data} />
    </>
  );
};
