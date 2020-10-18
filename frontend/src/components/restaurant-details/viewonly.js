import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const RestaurantDetails = (props) => {
    let content;
    console.log(props.restaurantDetails)
    if( !props.mode && props.restaurantDetails && props.restaurantDetails.length){    
        content = (
            <div>
               
                <Card.Title>
                {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].restaurant_name : ''}
                </Card.Title>
                <Card.Text>
                 Location: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].restaurant_location : ''}
                </Card.Text>
                <Card.Text>
                Email: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].email_id: ''}
                </Card.Text>
                <Card.Text>
                Phone Number: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].contact_info: ''}
                </Card.Text>
           
                <Card.Text>
                    City: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].restaurant_city: ''}
                </Card.Text>
               
                <Card.Text>
                    State: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].restaurant_state: ''}
                </Card.Text>
                <Card.Text>
                    Country: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].restaurant_country: ''}
                </Card.Text>
                <Card.Text>
                    Zip: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].restaurant_zip: ''}
                </Card.Text>
                <Card.Text>
                    Timing: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].timing: ''}
                </Card.Text>
                <Card.Text>
                Cuisines: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].cousine: ''}
                </Card.Text>
                <Card.Text>
                    Food Delivery Method: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].delivery_method: ''}
                </Card.Text>
           
                
            </div>
        );
    } else 
    {
        content = ([] )
    }

    return (
        <Card bg="light">
            <Card.Body>
            {content}            
            </Card.Body>
        </Card>
    );  
}
