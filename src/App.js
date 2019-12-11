import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SiignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfilrDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfilrDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }

      this.setState({ currentUser: userAuth });
      // createUserProfilrDocument(userAuth);
      //console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SiignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
