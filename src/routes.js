import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import RoutesPrivate from './Components/Routes/Privates/Private';
import StoreProvider from './Components/Store/Provider';
import Login from './Components/Login'
import ListTarefa from './Components/ListTarefa'

const Routes = () => (
    <BrowserRouter>
        <StoreProvider>
            <Switch>
                <Route exatc path="/login" component={() => <Login />} />
                <RoutesPrivate exatc path="/" component={() => <ListTarefa />} />
            </Switch>
        </StoreProvider>
    </BrowserRouter>
);

export default Routes;