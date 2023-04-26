import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectPage, selectUsers } from 'redux/selectors';
import { CardItem } from 'Components/CardItem/CardItem';
import { Btn, ListTweets, BtnGoBack, Container } from './CardList.styled';
import { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { fetchTweets } from 'redux/operations';
import { changePage } from 'redux/slice';
import { Loader } from 'Components/Loader/Loader';
import { useLocation } from 'react-router-dom';

export const CardList = () => {
  const users = useSelector(selectUsers);
  const pages = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLoadMore = () => {
    dispatch(changePage(pages + 1));
  };

  useEffect(() => {
    dispatch(fetchTweets(pages));
  }, [dispatch, pages]);

  return (
    <Container>
      <BtnGoBack to={location.state?.from ?? '/'}>
        <FiArrowLeft
          style={{
            cursor: 'pointer',
            padding: '2px',
            width: '30px',
            height: '25px',
          }}
        />
        <span>Go Back</span>
      </BtnGoBack>
      {isLoading && <Loader />}
      <ListTweets>
        {users.map(user => (
          <CardItem key={user.id} user={user} />
        ))}
      </ListTweets>
      {!isLoading && (
        <Btn type="button" onClick={handleLoadMore} disabled={pages === 4}>
          Load more
        </Btn>
      )}
    </Container>
  );
};
