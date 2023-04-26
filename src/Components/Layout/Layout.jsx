import React from 'react';
import { Header, Container } from './Layout.styled';
import { Loader } from 'Components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Navigation } from '../Navigation/Navigation';
export const Layout = () => {
  return (
    <div>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
