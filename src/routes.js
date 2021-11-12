import React from "react";
import auth from './Auth';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Tarefas from './Tarefas'
import Tarefa from './Tarefa'
import FormCad from './TarefaFormCad'
import Login from './Login'
import CadUser from './CadUsuario'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => auth.isAuthenticated() ? (
        <Component {...props} />
    ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    )
    }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/usuario" component={CadUser} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Tarefas} />
            <PrivateRoute exact path="/cadastrar" component={FormCad} />
            <PrivateRoute exact path="/tarefas/:id" component={Tarefa} />
        </Switch>
    </BrowserRouter>
);

export default Routes;