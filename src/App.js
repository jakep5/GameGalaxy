import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import SignInPage from './routes/SignInPage/SignInPage';
import SignUpPage from './routes/SignUpPage/SignUpPage';
import SearchPage from './routes/SearchPage/SearchPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';


function App() {
  return (
    <>
        <Switch>
        <Route
            exact
            path={"/"}
            component={LandingPage}
        />
        <Route
            exact
            path={"/signIn"}
            component={SignInPage}
        />
        <Route
            exact
            path={"/signUp"}
            component={SignUpPage}
        />
        <Route
            exact
            path={"/search"}
            component={SearchPage}
        />
        <Route
            exact
            path={"/profile"}
            component={ProfilePage}
        />
        </Switch>
    </>
    
  );
}

export default App;