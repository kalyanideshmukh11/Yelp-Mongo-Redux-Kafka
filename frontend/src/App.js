import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import loginReducer from './components/Login/store/reducer';
import signupReducer from './components/Signup/store/reducer';
import logoutReducer from './components/Logout/store/reducer';
import profileReducer from './containers/Profile/store/reducer';
import eventReducer from './containers/RestaurantEvent/store/reducer';
import restuarantReducer from './containers/RestaurantDashboard/store/reducer';
import seachReducer from './containers/Dashboard/store/reducer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../src/components/Navbar/Navbar';
import eventseachReducer from '../src/containers/Event/store/reducer';
import orderReducer from './containers/RestaurantOrder/store/reducer';
import restPageReducer from './containers/RestaurantPage/store/reducer';
import placeOrderReducer from './containers/Orders/store/reducer';
import custPageReducer from './containers/CustomerPage/store/reducer';
import orderDataReducer from './containers/Orders/store/reducer';
library.add(fab, faEdit, faUser);

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  logout: logoutReducer,
  profile: profileReducer,
  restaurant: restuarantReducer,
  event: eventReducer,
  orderData: orderDataReducer,
  restSearch: seachReducer,
  eventSearch: eventseachReducer,
  orderSearch: orderReducer,
  restPage: restPageReducer,
  order: placeOrderReducer,
  custPage: custPageReducer,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }  
}

export default App;
