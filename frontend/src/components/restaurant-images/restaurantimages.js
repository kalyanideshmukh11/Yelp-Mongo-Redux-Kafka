import React from 'react';
import { Card, Image, Button, Row, Col, Form } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PATH } from '../../config';
export const RestaurantImages = (props) => {
    let content,content2;
    if(!props.imagemode){
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
        content2=(
            <Form method="post" onSubmit={props.submitHandler} className="pl-5 pt-2">
            <div>
             <Form.Control type="file" id="file" name="file" multiple />
            </div>
            <div>
            <FontAwesomeIcon icon={faCamera} style={{marginBottom:'5px'}}/><Button type="submit" variant="link" >
                <p className="text-muted font-weight-bold">Add Photo</p>
            </Button>
            <Button type="button" className="ml-2" variant="danger" onClick={() => props.changeImageMode(false)}>Cancel</Button>
            </div>
        </Form>
        )
    }
        
    return (
        <Card border="danger" bg="light">
            <Card.Body>
            <Card.Title>Photo Gallery</Card.Title>
            <Row className="justify-content-center">
            {content} 
            </Row>
            {content2}
            </Card.Body>
            <Button variant="danger" onClick = { () => props.changeImageMode(true) }>Add More Photos</Button><br/>       
             </Card>
    );
}

//<Image src={props.restaurantImages} width="200" height="200" />