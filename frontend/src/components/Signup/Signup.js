import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Signup extends Component {
    submitHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/customersignup');
    }

    render() {
        return (
            <Container className="m-5 justify-content-center">
                <h1 className="display-4">You can always order in</h1><br/>
                <p className="lead"></p><br/>
                <p className="lead">Enter your email address</p>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" required/>
                    </Form.Group>
                    <Button type="submit">Next</Button>
                </Form>
                <p className="text-muted">Want to register your restaurant?</p>
                <Link to="/restaurantsignup">Sign up here</Link>
            </Container>
        )
    };
};    
            
export default Signup;