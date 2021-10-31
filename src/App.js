import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-uppage.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
       currentUser: null
    }
  }
  
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        });
        console.log(this.state);
      }
      this.setState({ currentUser: userAuth });

      /* this.setState({ currentUser: user}); */
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() { 
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

