import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import party from '../../assets/party.jpg';
import '../../App.css';
export const AddEventDetails = (props) => {
    let content;
    if(props.eventmode){    
        content = (
            <Form onSubmit = {props.submitHandler}>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridName">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control placeholder="Enter Event Name" required/>
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridDesc">
                    <Form.Label> Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter Date" min="2020-10-01" required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Time </Form.Label>
                    <Form.Control type="time" placeholder="Enter Phone Number" required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group  as={Col}   controlId="formGridCity">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" required/>
                </Form.Group>
                </Form.Row>
                <Row className="mt-2">
                <Button variant="primary" type="submit">Submit</Button>
                <Button type="button" className="ml-2" variant="danger" onClick={ () => props.changeEventMode(false) }>Cancel</Button>
                </Row>
            </Form>
        )
    }

    return (
        <Card bg="light">
            <img src={party} alt="party" height="140"/>
            <Card.Header>
            <Button variant="link" onClick = { () => props.changeEventMode(true) }>Add Event</Button>
            </Card.Header>
            <Card.Body>
            <Card.Title>Enter Event Details</Card.Title>
            {content}            
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
    );  
}

