import React from 'react';
import { Card,Row,Dropdown, Button, Modal,Col, Form, Alert, Badge } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const OrdersList = (props) => {    
    let orderDetails = props.orderDetails;
    let list
    console.log(props.ordersearchResults)
    if(props.ordersearchResults){
         orderDetails = props.ordersearchResults;
     }
    console.log(orderDetails)
    if(orderDetails){
     list = Object.keys(orderDetails).map((key,i) =>
     <Form onSubmit = {props.submitHandler} >
            <Card.Body>
             <Button type="button" variant="link" className="p-0" href="/customerpage">{orderDetails[i].customer_name}</Button>
             <Card.Text id="orderID">
                 Order ID: {orderDetails[key].order_id}
             </Card.Text>
             <Card.Text id="dish">
                 Dish: {orderDetails[key].dish_name}
             </Card.Text>
             <Card.Text id="cousine">
             Date:   {orderDetails[key].date} 
            </Card.Text> 
            <Card.Text id="location">
            Order Status:   {orderDetails[key].order_status}
            </Card.Text>
            <Card.Text id="city">
            Delivery Method:  {orderDetails[key].delivery_status}
            </Card.Text> 
            <Form.Label>Update Order Status: </Form.Label>
                <Form.Control as="select">
                    <option value="Preparing">Preparing</option>
                    <option value="Delivered">Delivered</option>
                </Form.Control>     
            </Card.Body>
                        <Row className="mt-2">
                        <Button variant="outline-success" align="center" type="submit">Update Order</Button>  
                         </Row>
        </Form>
    )
    }else {
        list = (<Card.Body>
            <Card.Text>
                Loding Orders List...
            </Card.Text>
        </Card.Body>)
    }
    return (
            <Card bg="light">
            <Card.Body>
            <Card.Title>Order Details</Card.Title>
            {list}            
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
    );  
}

//<Button variant="link" style={{paddingLeft: '300px'}} onClick={() => props.changeMode(true)}><FontAwesomeIcon icon={faEdit} /></Button>
           