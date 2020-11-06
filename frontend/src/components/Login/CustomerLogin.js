import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { addEmail, addPassword, authSuccess, authFail} from './store/action';
import { PATH } from '../../config';
import { Link } from 'react-router-dom';

class CustomerLogin extends Component {
    submitHandler = async (event) => {
        event.preventDefault();
        const data = {
            email: this.props.email,
            password: this.props.password
        }
        axios.defaults.withCredentials = true;

        axios.post(PATH + "/customer/login", data)
        .then(res => {
            if(res.status === 200){
                this.props.authSuccess(res.data.customer.responseMessage.token);
                localStorage.setItem("user", res.data.customer.responseMessage.user);
                this.props.history.push('/dashboard');
            }
        })
        .catch(err=>{
            this.props.authFail(err.data.msg);
        })
    }

    emailHandler = (event) => {
        this.props.addEmail(event.target.value);
    }

    passwordHandler = (event) => {
        this.props.addPassword(event.target.value);
    }
    render() {
        return (
            <Container className="m-5 d-flex justify-content-center">                
                <Form onSubmit={this.submitHandler}>
                <h1 className="lead text-center">Customer Login</h1>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={this.emailHandler}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={this.passwordHandler} />
                    </Form.Group>
                    {this.props.error && <Alert variant="danger">{this.props.error}</Alert>}
                    <Button type="submit">Sign in</Button>
                    <p>  </p>
                    <p className="text-muted">Want to login your restaurant?</p>
                    <Link to="/restaurantlogin">Login here</Link>
                </Form>
                
            </Container>            
        )
    };
};

const mapStateToProps = (state) => {
    return {
        email: state.login.email,
        password: state.login.password,
        error: state.login.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEmail: (email) => dispatch(addEmail(email)),
        addPassword: (password) => dispatch(addPassword(password)),
        authSuccess: (token) => dispatch(authSuccess(token)),
        authFail: (error) => dispatch(authFail(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerLogin);