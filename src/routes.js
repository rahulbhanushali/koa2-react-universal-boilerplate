// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './client/components/Layout/Layout';
import Index from './client//Containers/Index';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Index} />
    </Route>
);

export default routes;