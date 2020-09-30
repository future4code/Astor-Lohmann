import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignupPage from '../screens/SignupPage/SignupPage'
import PostPage from '../screens/PostPage'
import FeedPage from '../screens/FeedPage'

const PageRouter = () => {

    return (
       <Router>
           <Switch>
               <Route exact path='/login'>
                    <LoginPage />
               </Route>
               <Route exact path='/signup'>
                    <SignupPage />
               </Route>
               <Route exact path='/post'>
                    <PostPage />    
               </Route>
               <Route exact path='/feed'>
                    <FeedPage />
               </Route>
           </Switch>
       </Router>
    )
}

export default PageRouter