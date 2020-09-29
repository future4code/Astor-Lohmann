import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignupPage from '../screens/SignupPage'
import PostPage from '../screens/PostPage'
import FeedPage from '../screens/FeedPage'

const Router = () => {

    return (
        
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>
                <Route exact path={'/signup'}>
                    <SignupPage />
                </Route>
                <Route exact path={'/post'}>
                    <PostPage />
                </Route>
                <Route exact path={'/feed'}>
                    <FeedPage />
                </Route>

            </Switch>


    )
}

export default Router