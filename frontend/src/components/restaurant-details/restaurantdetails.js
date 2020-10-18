import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
//import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export const RestaurantDetails = (props) => {
    let content;
    if( !props.mode && props.restaurantDetails && props.restaurantDetails.length){    
        content = (
            <div>
                 
                <Card.Text>
                Restaurant Name: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].restaurant_name : ''}
                </Card.Text>
                <Card.Text>
                Location Name: {(props.restaurantDetails && props.restaurantDetails.length) ? props.restaurantDetails[0].restaurant_location : ''}
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
        content = (
            <Form onSubmit = {props.submitHandler}>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridFirst">
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control placeholder="Enter Restaurant Name" required/>
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridLast">
                    <Form.Label>Restaurant Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Restaurant Location" required/>
                </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" required/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Contact Information</Form.Label>
                    <Form.Control type="tel" placeholder="Enter Contact Information" pattern='\d{3}[\-]\d{3}[\-]\d{4}'  title='Format: 123-456-7890'required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter City" required />
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter State" required/>
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter Country" required />
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" pattern='{5}' placeholder="Enter Zip" title='Invalid Zip code' required />
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridDesc">
                    <Form.Label>Restaurant Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Restaurant Description" required />
                </Form.Group>
                <Form.Group  as={Col} controlId="formGridZip">
                    <Form.Label>Timing</Form.Label>
                    <Form.Control type="time" placeholder="Enter Timing" required />
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group  as={Col} controlId="formGridCous">
                    <Form.Label>Choose Cuisine: </Form.Label>
                    <Form.Control as="select">
                    <option value="American cousine">American cousine</option>
                    <option value="Indian cousine">Indian cousine</option>
                    <option value="Italian cousine">Italian cousine</option>
                    <option value="Chinease cousine">Chinease cousine</option>
                    <option value="Mexican cousine">Mexican cousine</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Seafood">Seafood </option>
                </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMethod">
                <Form.Label>Choose Food Delivery Method: </Form.Label>
                <Form.Control as="select">
                    <option value="Curbside Pickup">Curbside Pickup</option>
                    <option value="Dine In">Dine In</option>
                    <option value="Yelp Delivery">Yelp Delivery</option>
                </Form.Control>
                </Form.Group>
                 </Form.Row>
                <Row className="mt-2">
                <Button variant="primary" type="submit">Submit</Button>
                <Button type="button" className="ml-2" variant="danger" onClick={props.modeHandler }>Cancel</Button>
                </Row>
            </Form>
        )
    }

    return (
        <Card border= "danger" bg="light" text="dark">
            <Card.Body>
            <Row><Button variant="link" style={{paddingLeft: '300px'}} onClick={  props.modeHandler}><FontAwesomeIcon icon={faPen} style={{ color: 'red' }}/></Button></Row>
            <Card.Title>Restaurant Details</Card.Title>
            {content}            
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
    );  
}
