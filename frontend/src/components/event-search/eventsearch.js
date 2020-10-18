import React from 'react';
import {  Form, Button,  Col } from 'react-bootstrap';


export const EventSearch = (props) => {
    return ( 
        <Form onSubmit={props.submitHandler}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="title">
                    <Form.Label>Search by event name</Form.Label>
                    <Form.Control type="text" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid input.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Button type="submit" style={{ marginTop: '32px' }}>Search</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}