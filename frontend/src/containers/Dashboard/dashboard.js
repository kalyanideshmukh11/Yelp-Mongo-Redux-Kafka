import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { saveRestaurants, returnRestaurants, controlModal, saveResume, applyToJob } from './store/action';
import { RestaurantSearch } from '../../components/restaurant-search/restaurantsearch';
import { Restaurant } from '../../components/restaurants/restaurant';

class Dashboard extends Component {

    filters = [];
    selectedRestaurant = {};
    jobIdApplied = null;

    componentDidMount() {
        this.getRestaurants();
    }

    getRestaurants = () => {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        axios.get(PATH  + "/orders/list")
        .then(res => {
            if(res.status === 200){
                if(res.data){
                    this.props.saveRestaurants(res.data);
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    search = (event) => {
          event.preventDefault();
        let restaurants = this.props.restaurants.filter(restaurant => {
            console.log(restaurant.restaurant_city,event.target.elements[1].value)
            return restaurant.restaurant_city.includes(event.target.elements[1].value)
        });
        if(this.filters.length) {
            
            this.filters.forEach(filter => {
                restaurants = restaurants.filter(restaurant => {
                   return restaurant['delivery_method'] === filter.toString();
                })
            })
        }

      this.props.returnRestaurants(restaurants);
    }

    recordFilters = (event) => {
        this.filters.push(event.target.innerText);
    }

    controlModal = (action, restaurant) => {
        this.props.controlModal(action);
        this.selectedRestaurant = restaurant;
    }

    applyToJob = () => {
        this.props.applyToJob(true);
    }

    render() {
        return (            
            <Container className="mt-5 mb-5">
                <h2 className="display-4">Restaurant Search</h2><br/>
                <div className="w-100 bg-light text-dark p-5 shadow rounded">
                <RestaurantSearch submitHandler={this.search} recordFilters = { this.recordFilters }></RestaurantSearch>
                </div>
                <div className="w-100 bg-light text-dark mt-5 p-5 shadow rounded">
                <Restaurant restaurants = { this.props.restaurants } searchResults = { this.props.searchResults } selectedRestaurant = {this.selectedRestaurant} controlModal = {this.controlModal} openModal = {this.props.openModal} ></Restaurant>   
                </div>
            </Container>  
        )
    };              
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restSearch.restaurants,
        searchResults: state.restSearch.searchResults,
        openModal: state.restSearch.openModal,
        success: state.restSearch.success
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveRestaurants: (data) => dispatch(saveRestaurants(data)),
        returnRestaurants: (data) => dispatch(returnRestaurants(data)),
        controlModal: (data) => dispatch(controlModal(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



