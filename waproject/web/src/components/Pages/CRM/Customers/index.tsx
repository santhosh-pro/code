import React, { memo } from 'react'
import { Route, Switch } from 'react-router-dom';

import CustomerListPage from './List';

const CustomerIndexPage = memo(() => {
  return (
    <Switch>
      <Route path='/' component={CustomerListPage} />
    </Switch>
  );
});

export default CustomerIndexPage;
