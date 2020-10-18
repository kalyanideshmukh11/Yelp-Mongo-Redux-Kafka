import React from 'react';
import { Card, Form, Button, Row, Col, Container, InputGroup } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RestaurantSearch = (props) => {
    return ( 
        <Form onSubmit={props.submitHandler}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="title">
                    <Form.Label>Search by dish name</Form.Label>
                    <Form.Control type="text" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid input.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="city">
                    <Form.Label>Search by location</Form.Label>
                    <Form.Control type="text" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Button type="submit" variant="outline-danger" style={{ marginTop: '32px' }}>Search</Button>
                </Form.Group>
            </Form.Row>
            <Form.Row className='w-75'>
                <Form.Group as={Col} md="3" controlId="pickupFilter">
                    <button type="button" variant="outline-danger" onClick = {props.recordFilters} className="btn btn-outline-primary">Curbside Pickup</button>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="dineFilter">
                    <button type="button" variant="outline-danger" onClick = {props.recordFilters} className="btn btn-outline-primary">Dine In</button>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="delFilter">
                    <button type="button" variant="outline-danger" key= "delivery_method" value="Yelp Delivery" onClick = {props.recordFilters} className="btn btn-outline-primary">Yelp Delivery</button>
                </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group  as={Col} md="5" controlId="formGridCous">
                    <Form.Label>Choose Cuisine: </Form.Label>
                    <Form.Control as="select">
                    <option value="" >Select value</option>
                    <option value="American cousine" >American cousine</option>
                    <option value="Indian cousine">Indian cousine</option>
                    <option value="Italian cousine">Italian cousine</option>
                    <option value="Chinease cousine">Chinease cousine</option>
                    <option value="Mexican cousine">Mexican cousine</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Seafood">Seafood </option>
                </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}