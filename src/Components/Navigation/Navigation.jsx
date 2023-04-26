import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLinkStyled, NavigationWrapper } from './Navigation.styled';
import { changePage } from 'redux/slice';

export const Navigation = () => {
  const dispatch = useDispatch();

  const goTweets = () => {
    dispatch(changePage(1));
  };

  return (
    <NavigationWrapper>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/tweets" onClick={goTweets}>
        Tweets
      </NavLinkStyled>
    </NavigationWrapper>
  );
};
