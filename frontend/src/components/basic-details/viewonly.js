import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';


export const BasicDetails = (props) => {
    let content;
    if(props.basicDetails ){    
        content = (
            <div>
                <Card.Header>
                {(props.basicDetails && props.basicDetails.length) ? props.basicDetails[0].first_name +" " + props.basicDetails[0].last_name : ''}
                </Card.Header>
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
        content = ([])
    }

    return (
        <Card bg="light">
            <Card.Body>
            {content}            
            </Card.Body>
        </Card>
    );  
}

