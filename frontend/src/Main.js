import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
 import Navigation from './components/Navbar/Navbar';
import Dashboard from './containers/Dashboard/dashboard';
import Signup from './components/Signup/Signup';
import CustomerSignup from './components/Signup/CustomerSignup';
import RestaurantSignup from './components/Signup/RestaurantSignup';
import CustomerLogin from './components/Login/CustomerLogin';
import RestaurantLogin from './components/Login/RestaurantLogin';
import Logout from './components/Logout/logout';
import { connect } from 'react-redux';
import Profile from './containers/Profile/CustomerProfile';
import RestaurantDashboard from './containers/RestaurantDashboard/RestaurantDashboard';
import RestaurantEvent from './containers/RestaurantEvent/RestaurantEvent';
import RestaurantOrder from './containers/RestaurantOrder/RestaurantOrder';
import Event from './containers/Event/event';
import Order from './containers/Orders/order';
import RestaurantPage from './containers/RestaurantPage/RestaurantPage';
import CustomerPage from './containers/CustomerPage/CustomerPage';
import AttendeeList from './components/event-attendee/attendeelist';
class Main extends Component {

    render() {
        let routes = (
            <Switch>                
                <Route path="/login" component={CustomerLogin} />
                <Route path="/signup" component={Signup} />
                <Route path="/customersignup" component={CustomerSignup} />
                <Route path="/restaurantsignup" component={RestaurantSignup} />
                <Route path="/restaurantlogin" component={RestaurantLogin} />
                <Redirect to='/' />
            </Switch>           
        );
    
        if(localStorage.getItem("token")){
            routes = (
                <Switch>                               
                    <Route path="/profile" component={Profile} />
                    <Route path="/restaurantdashboard" component={RestaurantDashboard} />
                    <Route path="/restaurantorder" component={RestaurantOrder} />
                    <Route path="/restaurantevent" component={RestaurantEvent} />
                    <Route path="/restaurantpage" component={RestaurantPage} />
                    <Route path="/customerpage" component={CustomerPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/event" component={Event} />
                    <Route path="/attendeelist" component={AttendeeList} />
                    <Route path="/orders" component={Order} />
                    <Route path="/logout" component={Logout} />
                    <Redirect to='/' />
                </Switch>
            );
        }
        return (
            <div>
                {routes}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.login.token !== null 
    }
}

export default connect(mapStateToProps)(Main);