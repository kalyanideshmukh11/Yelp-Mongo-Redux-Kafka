//add event description  -- create event details -- create model, table, api get post, 
//view attendee list
//user profile public view

import React, { Component, useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { PATH } from '../../config';
import { AddEventDetails } from '../../components/event-details/addeventdetails';
import { GetEventDetails } from '../../components/event-details/geteventdetails';
import { saveEventDetails, changeEventMode, enableSave } from './store/action';



class RestaurantEvent extends Component {
    selectedEvent = {};
    constructor(){
        super();
        this.updateEventDetails= this.updateEventDetails.bind(this);
    }
    componentDidMount(){
       this.getEventDetails();
    }
// ---------------------------------------------------------
getEventDetails = () => {
    console.log("get of events")
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
    axios.get(PATH  + "/events/eventdetails")
    .then(res => {
        if(res.status === 200){  
            console.log("got the events")
                this.props.saveEventDetails(res.data);
                console.log(res.data)  
        }
    })
    .catch(err=>{
        //this.props.setError(err.response.data);
    })
}

updateEventDetails = (value) => {
    let newDetails = {};
    Object.assign(newDetails, this.props.eventDetails);
    newDetails.push(value);
    this.props.saveEventDetails(newDetails);
}

saveEventDetails = (event) => {
    event.preventDefault();
    const data = {
        //"id": this.props.basicDetails.id,
        "name": event.target.elements[0].value,            
        "description": event.target.elements[1].value,
        "date": event.target.elements[2].value,
        "time": event.target.elements[3].value,
        "location": event.target.elements[4].value,
           
    }
    //Object.keys(data).forEach((key) => (data[key] == null) && delete data[key]);
    console.log(data)
    axios.post(PATH + "/events/eventdetails", data)
    .then(res => {
        if(res.status === 200){
            localStorage.setItem('id', res.data.id);           
        }
        //this.changeMode(false)
        this.getEventDetails(res.data);
        this.changeEventMode(false)
    })
    .catch(err=>{
        //this.props.authFail(err.response.data.msg);
    })
}
changeEventMode = (mode) => {
    this.props.changeEventMode(mode);
    }

    enableSave = (event) => {
        if(!event){
            this.props.enableSave(false);
        } else {
            this.props.enableSave(true);
        }        
    }

    controlModal = (action, eventList) => {
        this.props.controlModal(action);
        this.selectedEvent = eventList;
    }
//========================================
    render(){
        // if(this.props.basicDetails && this.props.education && this.props.education.length && this.props.experience && this.props.experience.length){
            return (
                <Container className="mt-5 mb-5">                                           
                    <Row>
                        <Col sm={8} md={8} lg={8}>
                        <AddEventDetails eventDetails={this.props.eventDetails} submitHandler={this.saveEventDetails} changeEventMode = {this.changeEventMode} eventmode = {this.props.eventmode}></AddEventDetails><br/>
                        <GetEventDetails eventDetails={this.props.eventDetails} eventmode = {this.props.eventmode} selectedEvent={this.selectedEvent}controlModal = {this.controlModal} openModal = {this.props.openModal}></GetEventDetails><br/>
                        </Col>
                    </Row>
                </Container>            
            )     
    }
}

const mapStateToProps = (state) => {
    return {
        eventDetails: state.event.eventDetails,
        eventmode: state.event.eventmode,
        save: state.event.save,
        openModal: state.event.openModal,
        
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEventDetails: (data) => dispatch(saveEventDetails(data)),
        changeEventMode: (data) => dispatch(changeEventMode(data)),
        enableSave: (data) => dispatch(enableSave(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantEvent);