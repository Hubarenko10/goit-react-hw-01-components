import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListStyled } from './FriendListStyled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(({id,avatar,name,isOnline}) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
