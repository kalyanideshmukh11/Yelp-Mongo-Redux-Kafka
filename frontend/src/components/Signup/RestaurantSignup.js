import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { addSignupEmail, addLocationName, addRestaurantName, addSignupPassword, setSignupError } from './store/action';

class RestaurantSignup extends Component {
    submitHandler = async (event) => {
        event.preventDefault();
        let data = {
            restaurant_name: this.props.restaurant_name,
            restaurant_location: this.props.restaurant_location,
            email_id: this.props.email_id,
            password: this.props.password,
            entity: "restaurant"
        };
        axios.defaults.withCredentials = true;
        console.log((PATH + "/restaurant/signup", data))
        axios.post(PATH + "/restaurant/signup", data).then(res => {
            if(res.status === 200){
                localStorage.setItem('restaurant_name', this.props.restaurant_name);
                this.props.history.push('/login');
            }
        })
        .catch(err=>{
            this.props.setSignupError(err.res.data);
        })
    }

    emailHandler = (event) => {
        this.props.addSignupEmail(event.target.value);
        this.props.setSignupError(null);
    }

    passwordHandler = (event) => {
        this.props.addSignupPassword(event.target.value);
        this.props.setSignupError(null);
    }

    restaurantNameHandler = (event) => {
        this.props.addRestaurantName(event.target.value);
        this.props.setSignupError(null);
    }

    restaurantLocationHandler = (event) => {
        this.props.addLocationName(event.target.value);
        this.props.setSignupError(null);
    }

    render() {
        return (
            <Container className="m-5 d-flex justify-content-center">                
                <Form onSubmit={this.submitHandler}>
                <h1 className="lead text-center">Welcome to Restaurant Sign Up!</h1>
                    <Form.Group controlId="formGroupRname">
                        <Form.Label>Restaurant Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter restaurant name" required onChange={this.restaurantNameHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupLname">
                        <Form.Label>Location Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter location name" required onChange={this.restaurantLocationHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">                   
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={this.emailHandler}/>
                    </Form.Group>                    
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required onChange={this.passwordHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" required onChange={this.passwordHandler} />
                    </Form.Group>
                    {this.props.error && <Alert variant="danger">{this.props.error}</Alert>}
                    <Button type="submit">Confirm</Button>
                </Form>
            </Container>            
        )
    };
};

const mapStateToProps = (state) => {
    return {
        restaurant_name: state.signup.restaurant_name,
        restaurant_location: state.signup.restaurant_location,
        email_id: state.signup.email_id,
        password: state.signup.password,
        error: state.signup.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSignupEmail: (email_id) => dispatch(addSignupEmail(email_id)),
        addSignupPassword: (password) => dispatch(addSignupPassword(password)),
        addRestaurantName: (restaurant_name) => dispatch(addRestaurantName(restaurant_name)),
        addLocationName: (restaurant_location) => dispatch(addLocationName(restaurant_location)),
        setSignupError: (error) => dispatch(setSignupError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSignup);