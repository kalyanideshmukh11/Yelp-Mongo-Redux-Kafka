
import React, { Component, useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { PATH } from '../../config';
import { OrdersList } from '../../components/orders-list/orderslist';
import { OrderSearch } from '../../components/order-search/ordersearch';
import { saveOrderDetails, changeMode,returnOrders, enableSave } from './store/action';

class RestaurantOrder extends Component {
    constructor(){
        super();
        this.updateOrderDetails= this.updateOrderDetails.bind(this);
    }
    filters = [];
    ordersearchResults = {};
    
    componentDidMount(){
        this.getOrderDetails();
    }
// ---------------------------------------------------------
getOrderDetails = () => {
    console.log("get of orders")
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
    axios.get(PATH  + "/orders/info")
    .then(res => {
        if(res.status === 200){ 
             console.log(res.data);
                this.props.saveOrderDetails(res.data); 
                console.log("props value",this.props.orderDetails) 


        }
    })
    .catch(err=>{
        //this.props.setError(err.response.data);
    })
}

updateOrderDetails = (value) => {
    let newDetails = {};
    Object.assign(newDetails, this.props.orderDetails);
    newDetails.push(value);
    this.props.saveOrderDetails(newDetails);
}

saveOrderDetails = (event) => {
    event.preventDefault();
    const data = {
        //"id": this.props.basicDetails.id,
        //"delivery_status": event.target.elements[0].value, 
        "order_id": "2" ,          
        "order_status": event.target.elements[0].value,          
    }

    console.log("props value",data)
    //Object.keys(data).forEach((key) => (data[key] == null) && delete data[key]);
    axios.patch(PATH + "/orders/status", data)
    .then(res => {
        if(res.status === 200){
            localStorage.setItem('order_id', res.data.order_id);           
        }
        //this.changeMode(false)
        console.log("props value",this.props.orderDetails)
        this.getOrderDetails(res.data);
        //this.changeMode(false)
        console.log("props value",this.props.orderDetails)
    })
    .catch(err=>{
        //this.props.authFail(err.response.data.msg);
    })
}

    changeMode = (mode) => {
        this.props.changeMode(mode);
        }
    enableSave = (event) => {
        if(!event){
            this.props.enableSave(false);
        } else {
            this.props.enableSave(true);
        }        
    }
//========================================
searchOrder = (event) => {
      event.preventDefault();
    let orderDetails = this.props.orderDetails
    console.log(orderDetails)
    if(this.filters.length) {
        
        this.filters.forEach(filter => {
            orderDetails = orderDetails.filter(restaurant => {
                console.log(restaurant['order_status'],filter.toString())
               return restaurant['order_status'] === filter.toString();
            })
        })
    }

  this.props.returnOrders(orderDetails);
}

recordFilters = (event) => {
    this.filters.push(event.target.innerText);
}

//=========================================
    render(){
        // if(this.props.basicDetails && this.props.education && this.props.education.length && this.props.experience && this.props.experience.length){
            return (
                <Container className="mt-5 mb-5">  
                <h2 className="display-4">Order Search</h2><br/>                                         
                    <Row>
                        <Col sm={8} md={8} lg={8}>
                            <OrderSearch submitHandler={this.searchOrder} recordFilters = { this.recordFilters }></OrderSearch>
                            <OrdersList orderDetails={this.props.orderDetails} submitHandler={this.saveOrderDetails} ordersearchResults= {this.props.ordersearchResults} changeMode={this.props.changeMode} mode = {this.props.mode}></OrdersList><br/>
                        </Col>
                    </Row>
                </Container>            
            )     
    }
}

const mapStateToProps = (state) => {
    return {
        orderDetails: state.orderSearch.orderDetails,
        mode: state.orderSearch.mode,
        save: state.orderSearch.save,
        ordersearchResults: state.orderSearch.ordersearchResults,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveOrderDetails: (data) => dispatch(saveOrderDetails(data)),
        returnOrders: (data) => dispatch(returnOrders(data)),
        changeMode: (data) => dispatch(changeMode(data)),
        enableSave: (data) => dispatch(enableSave(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantOrder);

//<OrdersList orderDetails={this.props.orderDetails} submitHandler={this.saveOrderDetails} modeHandler = {this.changeMode} mode = {this.props.mode}></OrdersList><br/>
                        