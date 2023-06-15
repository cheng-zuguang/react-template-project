import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound404 = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>页面丢失了</i>
      </p>
    </div>
  );
}

export default NotFound404;
