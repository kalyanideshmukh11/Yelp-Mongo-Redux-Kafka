import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutMe = (props) => {
    let content;
    if(props.aboutme && props.aboutme.length){

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
        content = ([])
    }

    return (
        <Card bg="light">
            <Card.Body>
            <Card.Title>Other Details</Card.Title>
            {content}            
            </Card.Body>

        </Card>
    );  
}