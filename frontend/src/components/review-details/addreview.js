

import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddReview = (props) => {
    let content;
    console.log("props value",props.reviewmode)
    if(props.reviewmode){    
        content = (
            <Form onSubmit = {props.submitHandler}>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridName">
                    <Form.Label>Add Comments:</Form.Label>
                    <Form.Control placeholder="Enter Review Comments" required/>
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridDesc">
                    <Form.Label>Rating(1-5):</Form.Label>
                    <Form.Control type="text" placeholder="Enter Rating on 1-5 scale" required/>
                    </Form.Group>
                </Form.Row>
                <Row className="mt-2">
                <Button variant="primary" type="submit">Submit</Button>
                <Button type="button" className="ml-2" variant="danger" onClick={ () => props.changeReviewMode(false) }>Cancel</Button>
                </Row>
            </Form>
        )
    }

    return (
        <Card bg="light">
            <Card.Header>
            <Button variant="link" onClick = { () => props.changeReviewMode(true) }>Write a Review</Button>
            </Card.Header>
            <Card.Body>
            {content}            
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
    );  
}

