import React from 'react';
import { Card, Form,Row, Col, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GetMenuDetails = (props) => {
    let content;
    // console.log(props.menuDetails)
    if(props.menuDetails && props.menuDetails.length ){   
        // console.log("from props",props.menuDetails[0]) 
        let menus = props.menuDetails;
        content = Object.keys(menus).map((key,i) =>(
            <div>
                <Card.Header>
                {i+1}.{(props.menuDetails && props.menuDetails.length) ? props.menuDetails[i].name : ''}
                </Card.Header>
                <Card.Text>
                Description: {(props.menuDetails && props.menuDetails.length) ? props.menuDetails[i].description : ''}
                </Card.Text>
                <Card.Text>
                Dish Ingredients: {(props.menuDetails && props.menuDetails.length) ? props.menuDetails[i].ingredients: ''}
                </Card.Text>
                <Card.Text>
                Category: {(props.menuDetails && props.menuDetails.length) ? props.menuDetails[i].category: ''}
                </Card.Text>
                <Card.Text>
                    Price in USD: {(props.menuDetails && props.menuDetails.length) ? props.menuDetails[i].price: ''}
                </Card.Text>
                <br/>
            </div>
        ))
    } else{
        content = (
        <div>
            <Card.Text>
                No Menu Added Yet.
                </Card.Text>
        </div>)

    }
    return (
        <Card border="danger" bg="light">
            <Card.Title align="center">  Menu List </Card.Title>
            <Card.Body>
            {content}            
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
    );  
}

