import React from 'react';
import  { Component, useReducer } from 'react';
import { Card, Form,Row, Col,Modal,Alert, Button } from 'react-bootstrap';

class AttendeeList extends Component{

        render() { return(
        <Card bg="light">
            <Card.Body>
            <div>
                <Card.Header>
                    Event Attendees:
                </Card.Header>
                <Button type="button" variant="link" className="p-0" href='/customerpage'>Michael Scott</Button>
            </div> 
            </Card.Body>
        </Card>
        )
    } 
}

export default (AttendeeList);
