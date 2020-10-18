import React from 'react';
import { Card, Form, Button, Row, Col, Container, InputGroup } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const OrderSearch = (props) => {
    return ( 
        <Form onSubmit={props.submitHandler}>
            <Form.Row className='w-50'>
                <Form.Group as={Col} md="5" controlId="pickupFilter">
                    <button type="button" onClick = {props.recordFilters} value="New Order" className="btn btn-outline-primary">New Order</button>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="pickupFilter">
                    <button type="button" onClick = {props.recordFilters} value="Preparing" className="btn btn-outline-primary">Preparing</button>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="dineFilter">
                    <button type="button" onClick = {props.recordFilters} value="Delivered Order" className="btn btn-outline-primary">Delivered Order</button>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="delFilter">
                    <button type="button" key= "order_status" value="Cancelled Order" onClick = {props.recordFilters} className="btn btn-outline-primary">Cancelled Order</button>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="validationCustom04">
                    <Button type="submit" style={{ marginTop: '32px' }}>Filter</Button>
                </Form.Group>
            </Form.Row>
            <Form.Row>
            </Form.Row>
        </Form>
    );
}