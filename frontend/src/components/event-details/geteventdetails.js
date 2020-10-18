import React from 'react';
import { Card, Form,Row, Col,Modal,Alert, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import party from '../../assets/party.jpg';
import '../../App.css';
export const GetEventDetails = (props) => {
    let content;
    if(props.eventDetails && props.eventDetails.length ){   
        console.log("from props",props.eventDetails) 
        let events = props.eventDetails;
         events= events.sort((a, b) => (a.date > b.date) ? 1 : -1)
        console.log("event value",events)
        content = Object.keys(events).map((key,i) =>(
            <div>
                <Card.Header>
                    Event Info:
                </Card.Header>
                <Button type="button" variant="link" className="p-0" href='/attendeelist'>{ props.eventDetails[i].name}</Button>
                <Card.Text>
                Description: {(props.eventDetails && props.eventDetails.length) ? props.eventDetails[i].description : ''}
                </Card.Text>
                <Card.Text>
                Date: {(props.eventDetails && props.eventDetails.length) ? props.eventDetails[i].date: ''}
                </Card.Text>
                <Card.Text>
                Time: {(props.eventDetails && props.eventDetails.length) ? props.eventDetails[i].time: ''}
                </Card.Text>
                <Card.Text>
                    Location: {(props.eventDetails && props.eventDetails.length) ? props.eventDetails[i].location: ''}
                </Card.Text>
            </div>
        ))
    } else{
        content = (
        <div>
            <Card.Text>
                No Event added yet
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
        </Card>
    );  
}



// events.sort(function(a, b) {
//     var keyA = new Date(a.updated_at),
//       keyB = new Date(b.updated_at);
//     // Compare the 2 dates
//     if (keyA < keyB) return -1;
//     if (keyA > keyB) return 1;
//     return 0;
//   });

//events.sort((a, b) => (a.date > b.date) ? 1 : -1)