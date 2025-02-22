import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { addSignupEmail, addFirstName, addLastName, addSignupPassword, setSignupError } from './store/action';

class CustomerSignup extends Component {
    submitHandler = async (event) => {
        event.preventDefault();
        let data = {
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            email: this.props.email,
            password: this.props.password,
            user: "customer"
        };
        axios.defaults.withCredentials = true;
        console.log((PATH + "/customer/signup", data))
        axios.post(PATH + "/customer/signup", data).then(res => {
            if(res.status === 200){
                localStorage.setItem('first_name', this.props.first_name);
                this.props.history.push('/login');
            }
        })
        .catch(err=>{
            this.props.setSignupError(err.response.data.msg);
        })
    }

    emailHandler = (event) => {
        this.props.addSignupEmail(event.target.value);
    }

    passwordHandler = (event) => {
        this.props.addSignupPassword(event.target.value);
    }

    firstNameHandler = (event) => {
        this.props.addFirstName(event.target.value);
    }

    lastNameHandler = (event) => {
        this.props.addLastName(event.target.value);
    }

    render() {
        return (
            <Container className="m-5 d-flex justify-content-center">                
                <Form onSubmit={this.submitHandler}>
                <h1 className="lead text-center">Welcome To Customer Sign Up!</h1>
                    <Form.Group controlId="formGroupFname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" required onChange={this.firstNameHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupLname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" required onChange={this.lastNameHandler} />
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
        first_name: state.signup.first_name,
        last_name: state.signup.last_name,
        email: state.signup.email,
        password: state.signup.password,
        error: state.signup.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSignupEmail: (email) => dispatch(addSignupEmail(email)),
        addSignupPassword: (password) => dispatch(addSignupPassword(password)),
        addFirstName: (first_name) => dispatch(addFirstName(first_name)),
        addLastName: (last_name) => dispatch(addLastName(last_name)),
        setSignupError: (error) => dispatch(setSignupError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSignup);