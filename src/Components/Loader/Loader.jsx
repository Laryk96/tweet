import { Comment } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';
import React from 'react';
export const Loader = () => {
  return (
    <Overlay>
      <Comment
        visible={true}
        height="100"
        width="100"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#471CA9"
      />
    </Overlay>
  );
};
