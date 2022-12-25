import PropTypes from 'prop-types';
import {
  ProfileStyled,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  UserList,
  UserItem,
  Label,
  Quantity,
} from './ProfileStyled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileStyled>
      <Avatar src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
      <UserList>
        <UserItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </UserItem>
        <UserItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </UserItem>
        <UserItem>
          <Label>Likes</Label>
          <Quantity> {likes}</Quantity>
        </UserItem>
      </UserList>
    </ProfileStyled>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
