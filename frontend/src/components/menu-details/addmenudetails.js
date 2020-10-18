//add update view menu

import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import party from '../../assets/party.jpg';
import '../../App.css';
export const AddMenuDetails = (props) => {
    let content;
    if(props.menumode){    
        content = (
            <Form onSubmit = {props.submitHandler}>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridName">
                    <Form.Label>Dish Name</Form.Label>
                    <Form.Control placeholder="Enter Dish Name" required/>
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridDesc">
                    <Form.Label> Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Dish Description" required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control type="text" placeholder="Enter Ingredients" required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Choose Dish Category </Form.Label>
                    <Form.Control as="select">
                    <option value="Appetizer">Appetizer</option>
                    <option value="Salads">Salads</option>
                    <option value="Main Course">Main Course</option> 
                    <option value="Desserts">Desserts</option>
                    <option value="Beverages">Beverages</option>
                </Form.Control>
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group  as={Col}   controlId="formGridCity">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter Price in USD" required/>
                </Form.Group>
                </Form.Row>
                <Row className="mt-2">
                <Button variant="primary" type="submit">Submit</Button>
                <Button type="button" className="ml-2" variant="danger" onClick={ () => props.changeMenuMode(false) }>Cancel</Button>
                </Row>
            </Form>
        )
    }

    return (
        <Card border="danger" bg="light">
            <Button variant="danger" onClick = { () => props.changeMenuMode(true) }>Add Menu</Button>           
            <Card.Body>
            {content}            
            </Card.Body>
        </Card>
    );  
}

