import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GetReview = (props) => {
    let content;
    console.log(props.reviewDetails)
    if(props.reviewDetails && props.reviewDetails.length ){   
        console.log("from props",props.reviewDetails[0]) 
        let menus = props.reviewDetails;
        content = Object.keys(menus).map((key,i) =>(
            <div>
                <Card.Header>
                {i+1}. Review Info
                </Card.Header>
                <Card.Text>
                Customer Name: {(props.reviewDetails && props.reviewDetails.length) ? props.reviewDetails[i].customer_name : ''}
                </Card.Text>
                <Card.Text>
                Comment: {(props.reviewDetails && props.reviewDetails.length) ? props.reviewDetails[i].comment : ''}
                </Card.Text>
                <Card.Text>
                Rating: {(props.reviewDetails && props.reviewDetails.length) ? props.reviewDetails[i].rating: ''}
                </Card.Text>
                <Card.Text>
                Date: {(props.reviewDetails && props.reviewDetails.length) ? props.reviewDetails[i].date: ''}
                </Card.Text>
                <br/>
            </div>
        ))
    } else{
        content = (
        <div>
            <Card.Text>
                No Review Added Yet.
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

