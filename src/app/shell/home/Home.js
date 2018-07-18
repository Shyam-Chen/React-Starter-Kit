// @flow

import React from 'react';
import { compose } from 'recompose';

import SortFilterList from './SortFilterList';

export const Home = (): React$Element<*> => (
  <div id="home">
    <h1>Oh My React</h1>

    <SortFilterList />
  </div>
);

export default compose()(Home);