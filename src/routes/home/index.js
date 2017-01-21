import React from 'react';
import HomeView from './HomeView';
import DefaultLayout from '../../components/layouts/DefaultLayout';

export default {

  path: '/',

  action() {
    return {
      image: 'http://...',
      component: <DefaultLayout view={HomeView} />,
    };
  },

};
