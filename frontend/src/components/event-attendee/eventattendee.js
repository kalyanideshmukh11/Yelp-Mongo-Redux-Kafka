import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EventAttendee = (props) => {
    let content;
    console.log(props.eventattendee)
    if(props.eventattendee && props.eventattendee.length ){   
        console.log("from props",props.eventattendee[0]) 
        let menus = props.eventattendee;
        content = Object.keys(menus).map((key,i) =>(
            <div>
                <Card.Header>
                {i+1}. Registered Events
                </Card.Header>
                <Card.Text>
                Event Name: {(props.eventattendee && props.eventattendee.length) ? props.eventattendee[i].name : ''}
                </Card.Text>
                <Card.Text>
                Date: {(props.eventattendee && props.eventattendee.length) ? props.eventattendee[i].date : ''}
                </Card.Text>
                <br/>
            </div>
        ))
    } else{
        content = (
        <div>
            <Card.Text>
                No Event Registered Yet.
                </Card.Text>
        </div>)

    }
    return (
        <Card bg="light">
            <Card.Header>
            </Card.Header>
            <Card.Body>
            {content}            
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
    );  
}

