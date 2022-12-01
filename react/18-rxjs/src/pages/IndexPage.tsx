import React, { Suspense, useEffect, useState } from 'react';
import AllUserTodoList from '../components/List/AllUserTodoList';
import styles from './page.module.scss';
import { ImSpinner } from 'react-icons/im';

const IndexPage = () => {
  return (
    <section className={styles.page}>
      <div className={styles['page__inner']}>
        <Suspense
          fallback={
            <h1>
              Loading... <ImSpinner />
            </h1>
          }
        >
          <AllUserTodoList />
        </Suspense>
      </div>
    </section>
  );
};

export default IndexPage;
