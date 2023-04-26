import React from 'react';

import logo from 'Images/Logo1x.png';
import logo2x from 'Images/Logo2x@2x.png';
import picture from 'Images/picture1x.png';
import picture2x from 'Images/picture2x@2x.png';

import {
  Wrapper,
  LogoPicture,
  TweetsPicture,
  Line,
  AvatarWrapper,
  Avatar,
  Text,
  Btn,
} from './CardItem.styled';
import { editTweet } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const CardItem = ({
  user: { id, followers, avatar, isFollowed, tweets },
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      editTweet(
        isFollowed
          ? { id, followers: followers - 1, isFollowed: false }
          : { id, followers: followers + 1, isFollowed: true }
      )
    );
  };

  return (
    <Wrapper>
      <LogoPicture>
        <source srcSet={`${logo} 1x, ${logo2x} 2x`} />
        <img src={logo} alt="logo" />
      </LogoPicture>

      <TweetsPicture>
        <source srcSet={`${picture} 1x, ${picture2x} 2x`} />
        <img src={picture} alt="background" />
      </TweetsPicture>

      <Line />
      <AvatarWrapper />
      <Avatar alt="user avatar" src={`${avatar}`} width="62px" height="62px" />

      <Text>{tweets} Tweets</Text>
      <Text>{new Intl.NumberFormat('en').format(followers)} followers</Text>
      <Btn type="button" isFollow={isFollowed} onClick={handleClick}>
        {isFollowed ? 'Following' : 'Follow'}
      </Btn>
    </Wrapper>
  );
};

// ContactsItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// }
