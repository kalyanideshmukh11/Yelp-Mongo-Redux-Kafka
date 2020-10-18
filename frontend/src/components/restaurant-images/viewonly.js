import React from 'react';
import { Card, Image, Button, Row, Col, Form } from 'react-bootstrap';
import { PATH } from '../../config';

export const RestaurantImages = (props) => {
    let content,content2;
    if(!props.imagemode){
        if(props.restaurantImages){
        let menus=[]
        menus = props.restaurantImages;
        console.log(menus)
        content = Object.keys(menus).map((key,i) =>(
            <div>
                <Form className="pl-5 pt-2">
                    <div>
                    <Row className="justify-content-center">
                     <Image src={PATH +"/"+ props.restaurantImages[i].image} width="200" height="200" /> </Row>
                      </div>
                </Form>
            </div>            
        ))}
    } else {
        let menus=[]
        menus = props.restaurantImages;
        console.log(menus)
        content = Object.keys(menus).map((key,i) =>(
            <div>
                <Form className="pl-5 pt-2">
                    <div>
                    <Row className="justify-content-center">
                     <Image src={PATH +"/"+ props.restaurantImages[i].image} width="200" height="200" /> </Row>
                      </div>
                </Form>
            </div>            
        ))
    }
        
    return (
        <Card border="danger" bg="light">
            <Card.Body>
            <Card.Title>Photo Gallery</Card.Title>
            <Row className="justify-content-center">
            {content} 
            </Row>
            </Card.Body>
             </Card>
    );
}

//<Image src={props.restaurantImages} width="200" height="200" />