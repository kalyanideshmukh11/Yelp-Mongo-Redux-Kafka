import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutMe = (props) => {
    let content;
    if(!props.ammode && (props.aboutme && props.aboutme.length)){

        content = (
            <div>
                <Card.Text>
                Yelping since: {(props.aboutme && props.aboutme.length) ? props.aboutme[0].yelping_since : ''}
                </Card.Text>
                <Card.Text>
                Things I love: {(props.aboutme && props.aboutme.length) ? props.aboutme[0].things_love : ''}
                </Card.Text>
                <Card.Text>
                <Card.Text>
                My Blog or Website: {(props.aboutme && props.aboutme.length) ? props.aboutme[0].links: ''}
                </Card.Text>
                <Card.Text>
                    Headline: {(props.aboutme && props.aboutme.length) ? props.aboutme[0].headline: ''}
                </Card.Text>
                Find Me In: {(props.aboutme && props.aboutme.length) ? props.aboutme[0].findme_in: ''}
                </Card.Text>
            </div>
        );
    } else {
        content = (
            <Form onSubmit = {props.submitHandler}>

                <Form.Group controlId="formGridYelping">
                    <Form.Label>Yelping since</Form.Label>
                    <Form.Control placeholder="Enter Yelping since" required />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridThings">
                    <Form.Label>Things I love</Form.Label>
                    <Form.Control type="text" placeholder="Enter Things I love" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFindme">
                    <Form.Label>Find Me In</Form.Label>
                    <Form.Control type="text" placeholder="Enter Find Me In" required/>
                    </Form.Group>

                </Form.Row>
                <Form.Group as={Col} controlId="formGridBlog">
                    <Form.Label>My Blog or Website</Form.Label>
                    <Form.Control type="text" placeholder="Enter Blog or Website Link" required/>
                    </Form.Group>

                <Form.Group as= {Col} controlId="formGridHead">
                    <Form.Label>Headline</Form.Label>
                    <Form.Control type="text" placeholder="Enter Headline" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button type="button" className="ml-2" variant="danger" onClick={() => props.changeAboutMeMode(false)}>Cancel</Button>
            </Form>
        )
    }

    return (
        <Card bg="light">
            <Card.Body>
            <Row><Button variant="link" style={{paddingLeft: '300px'}} onClick={ () => props.changeAboutMeMode(true)}><FontAwesomeIcon icon={faEdit} /></Button></Row>
            <Card.Title>About me</Card.Title>
            {content}            
            </Card.Body>

        </Card>
    );  
}