import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './App';
import DriveLogin from './DriveLogin';
import SendMessage from './components/SendMessage';
import SendMsgtoUser from './components/SendMsgtoUser';
import AddMessage from './components/AddMessage';
import TodoApp from './Todo';

ReactDOM.render(
  <>
  <BrowserRouter>
    {/* <App /> */}

    <Switch>
    <Redirect from="/Login" to="/" />
      <Route exact path="/" component={App} />
      <Route path="/DriveLogin" component={DriveLogin} />
      <Route path="/Todo" component={TodoApp} />
      <Route path="/Navbar/Logout" component={DriveLogin} />
      <Route path="/components/SendMsgtoUser" component={SendMsgtoUser} />
      <Route path="/components/SendMessage" component={SendMessage} />
      <Route path="/components/AddMessage" component={AddMessage} />
      <Route>
        <h1>404 - Not Found</h1>
      </Route>
    </Switch>
</BrowserRouter>
  </>,

  document.getElementById('root')
);
