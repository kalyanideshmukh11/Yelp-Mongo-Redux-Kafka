import React from 'react';
import { Card, Button, Modal, Form, Alert, Badge } from 'react-bootstrap';

export const EventList = (props) => {    
    let eventList = props.eventList;
    if(props.searchResults.length){
        eventList = props.searchResults;
     }
    const list = Object.keys(eventList).map(key =>
        <Card bg="light" className = "mt-2">
            <Card.Body>
            <Button type="button" variant="link" className="p-0" onClick={() => props.controlModal(true, eventList[key])}>{eventList[key].name}</Button>
            <Card.Text id="description">
            Description:   {eventList[key].description}
            </Card.Text>
            <Card.Text id="location">
            Location:  {eventList[key].location}
            </Card.Text>
            <Card.Text id="date">
            Date:   {eventList[key].date} 
            </Card.Text>
            <Card.Text id="deliverymode">   
            Time :  {eventList[key].time}
            </Card.Text>        
            </Card.Body>
            {props.eventsRegistered === eventList[key].event_id && props.success && <Badge variant="success">Registered</Badge>}
        </Card>
    );
    return (
        <div>
            {list}
            <Modal show={props.openModal} onHide={() => props.controlModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Event Page{props.selectedEvent && props.selectedEvent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="pb-2">
                        <li style={{listStyle: 'none'}}>
                            <p className="d-inline font-weight mr-2">Event Name: {props.selectedEvent && props.selectedEvent.name}</p><br/>
                            <ul className="d-inline font-weight mr-2">Location: {props.selectedEvent && props.selectedEvent.location}</ul><br/>
                            <ul className="d-inline font-weight mr-2">Date: {props.selectedEvent && props.selectedEvent.date} </ul> <br/>
                            <ul className="d-inline font-weight mr-2">Time: {props.selectedEvent && props.selectedEvent.time}</ul><br/>
                        </li>
                    </div>                
                    <p className="font-italic">Description</p>{props.selectedEvent && props.selectedEvent.description}   
                </Modal.Body>
                <Modal.Footer>
                {props.success && <Alert variant='success'>
                        Successfully Registered!
                    </Alert>}
                <Button variant="secondary" onClick={() => props.controlModal(false)}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={(e) => { props.saveregisterEvent(e, props.selectedEvent)}}>
                     Register
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );  
}

//props.registerEvent}