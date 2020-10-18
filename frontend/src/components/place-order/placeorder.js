import React from 'react';
import { Card, Form,Row, Col, Dropdown, Button, DropdownButton, Badge } from 'react-bootstrap';

export const PlaceOrder = (props) => {
    let content;
    //console.log("props value",props.reviewmode)  
        content = (
            <Form onSubmit = {props.submitHandler}>
                <Form.Group as={Col} controlId="formGridMethod">
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
                <Form.Label>Enter Menu to order</Form.Label>
                <Form.Control type="text" placeholder="Enter Dish Name" />
                <Form.Text className="text-muted"> Enter comma separated list of menu.</Form.Text><br/> 
                <Form.Label>Choose Food Delivery Method: </Form.Label>
                <Form.Control as="select">
                    <option value="Curbside Pickup">Curbside Pickup</option>
                    <option value="Yelp Delivery">Yelp Delivery</option>
                </Form.Control>
                </Form.Group>
                <Row className="mt-2">
                <Button variant="outline-success" align="center" type="submit">Place Order Now</Button>  
                 </Row>
            </Form>
        )

    return (
        <Card bg="light">
            <Card.Body>
            {content}            
            </Card.Body>
        </Card>
    );  
}

                    