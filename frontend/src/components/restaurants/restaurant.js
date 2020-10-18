import React from 'react';
import { Card, Button, Modal, Alert } from 'react-bootstrap';



export const Restaurant = (props) => {    
    let restaurants = props.restaurants;
    console.log(props.searchResults.length)
    if(props.searchResults.length){
         restaurants = props.searchResults;
     }
   
    const list = Object.keys(restaurants).map(key =>
        <Card bg="light" className = "mt-2">
            <Card.Body>
            <Button type="button" variant="link" className="p-0" href='/restaurantpage'>{restaurants[key].restaurant_name}</Button>
            <Card.Text id="location">
            Location:   {restaurants[key].restaurant_location}
            </Card.Text>
            <Card.Text id="city">
            City:  {restaurants[key].restaurant_city}
            </Card.Text>
            <Card.Text id="cousine">
            Cuisines:   {restaurants[key].cousine} 
            </Card.Text>
            <Card.Text id="deliverymode">   
            Deivery Method:  {restaurants[key].delivery_method}
            </Card.Text> 
            <Card.Text id="contact">
            Contact Details:  {restaurants[key].contact_info}
            </Card.Text> 
            <Card.Text id="timing">
            Timing:  {restaurants[key].timing}
            </Card.Text>         
            </Card.Body>
        </Card>
    );
    return (
        <div>
            {list}
            <Modal show={props.openModal} onHide={() => props.controlModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Restaurant Page{props.selectedRestaurant && props.selectedRestaurant.title}</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <div className="pb-2">
                        <li style={{listStyle: 'none'}}>
                            <p className="d-inline font-weight mr-2">Restaurant Name: {props.selectedRestaurant && props.selectedRestaurant.restaurant_name}</p><br/>
                            <ul className="d-inline font-weight mr-2">{props.selectedRestaurant && props.selectedRestaurant.restaurant_location}</ul><br/>
                            <ul className="d-inline font-weight mr-2">${props.selectedRestaurant && props.selectedRestaurant.cousine} </ul> <br/>
                            <ul className="d-inline font-weight mr-2">{props.selectedRestaurant && props.selectedRestaurant.delivery_method}</ul><br/>
                        </li>
                    </div>                
                    <p className="font-italic">Description</p>{props.selectedRestaurant && props.selectedRestaurant.restaurant_description}   
                </Modal.Body>
                <Modal.Footer>
                {props.success && <Alert variant='success'>
                        Successfully applied!
                    </Alert>}
                <Button variant="secondary" onClick={() => props.controlModal(false)}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={props.applyToJob}>
                    Order Now
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );  
}