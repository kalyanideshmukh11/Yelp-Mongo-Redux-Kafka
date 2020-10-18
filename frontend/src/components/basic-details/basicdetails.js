import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const BasicDetails = (props) => {
    let content;
    if(!props.bdmode && props.basicDetails ){    
        content = (
            <div>
                <Card.Text>
                First Name: {(props.basicDetails && props.basicDetails.length) ? props.basicDetails[0].first_name : ''}
                </Card.Text>
                <Card.Text>
                Last Name: {(props.basicDetails && props.basicDetails.length) ? props.basicDetails[0].last_name : ''}
                </Card.Text>
                <Card.Text>
                Email: {(props.basicDetails && props.basicDetails.length) ? props.basicDetails[0].email_id: ''}
                </Card.Text>
                <Card.Text>
                Phone Number: {(props.basicDetails && props.basicDetails.length) ? props.basicDetails[0].phone_number: ''}
                </Card.Text>
                <Card.Text>
                    City: {(props.basicDetails && props.basicDetails.length) ? props.basicDetails[0].city: ''}
                </Card.Text>
                <Card.Text>
                    state: {(props.basicDetails && props.basicDetails.length) ? props.basicDetails[0].state: ''}
                </Card.Text>
                <Card.Text>
                    country: {(props.basicDetails && props.basicDetails.length) ? props.basicDetails[0].country: ''}
                </Card.Text>
                <Card.Text>
                    dob: {(props.basicDetails && props.basicDetails.length) ? props.basicDetails[0].dob: ''}
                </Card.Text>
            </div>
        );
    } else {
        content = (
            <Form onSubmit = {props.submitHandler}>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="Enter First Name" required/>
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone Number" required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter City" required/>
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter State" required/>
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter Country" required/>
                </Form.Group>
                <Form.Group  as={Col} controlId="formGriddob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Enter Date of Birth" min="1900-01-01" max="2020-09-01"required/>
                </Form.Group>
                </Form.Row>
                <Row className="mt-2">
                <Button variant="primary" type="submit">Submit</Button>
                <Button type="button" className="ml-2" variant="danger" onClick={() => props.changeBasicDetailMode(false) }>Cancel</Button>
                </Row>
            </Form>
        )
    }

    return (
        <Card bg="light">
            <Card.Body>
            <Row><Button variant="link" style={{paddingLeft: '300px'}} onClick={() => props.changeBasicDetailMode(true)}><FontAwesomeIcon icon={faEdit} /></Button></Row>
            <Card.Title>Basic Details</Card.Title>
            {content}            
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
    );  
}

