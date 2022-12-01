import React, { Suspense, useEffect, useState } from 'react';
import AllUserTodoList from '../components/List/AllUserTodoList';

const IndexPage = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <AllUserTodoList />
    </Suspense>
  );
};

export default IndexPage;
