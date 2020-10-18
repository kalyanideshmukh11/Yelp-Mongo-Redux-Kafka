import React from 'react';
import { Card,Row,Dropdown, Button, Modal,Col, Form, Alert, Badge } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CustomerOrdersList = (props) => {    
    let orderDetails = props.orderDetails;
    let list
    if(props.ordersearchResults){
         orderDetails = props.ordersearchResults;
     }
    console.log(orderDetails)
    if(orderDetails){
     list = Object.keys(orderDetails).map((key,i) =>
     <Card>
            <Card.Body>
             <Button type="button" variant="link" className="p-0" href="/customerpage">{orderDetails[i].customer_name}</Button>
             <Card.Text id="dishName">
                 Dish: {orderDetails[i].dish_name}
             </Card.Text>
             <Card.Text id="orderDate">
             Date:   {orderDetails[i].date} 
            </Card.Text> 
            <Card.Text id="orderStatus">
            Order Status:   {orderDetails[i].order_status}
            </Card.Text>
            <Card.Text id="deliveryMethod">
            Delivery Method:  {orderDetails[i].delivery_status}
            </Card.Text>      
            </Card.Body>
            </Card>
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
           