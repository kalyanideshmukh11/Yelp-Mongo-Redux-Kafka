//basic details
//about me
//photo


import React, { Component, useReducer } from 'react';
import { AboutMe } from '../../components/about-me/viewonly';
import { BasicDetails } from '../../components/basic-details/viewonly';
import { ProfilePic } from '../../components/profile-pic/viewonly';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { PATH } from '../../config';
import { saveBasicDetails, saveAboutMeInfo, changeMode, enableSave,saveProfilePic,
changeAboutMeMode,changeBasicDetailMode } from './store/action';


class Profile extends Component {

    constructor(){
        super();
        this.updateAboutMeInfo = this.updateAboutMeInfo.bind(this);
        this.updateBasicDetails= this.updateBasicDetails.bind(this);
        //this.updateProfilePic= this.updateProfilePic.bind(this);
    }

    componentDidMount(){
        this.getBasicDetails();
        this.getaboutmeInfo();
        this.getProfilePic();
    }
// Basic Details Methods---------------------------------------------------------
getBasicDetails = () => {
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
    axios.get(PATH  + "/customerprofile/basicdetails")
    .then(res => {
        if(res.status === 200){ 
                this.props.saveBasicDetails(res.data);    
        }
    })
    .catch(err=>{
        //this.props.setError(err.response.data);
    })
}

updateBasicDetails = (value) => {
    let newDetails = {};
    Object.assign(newDetails, this.props.basicDetails);
    newDetails.push(value);
    this.props.saveBasicDetails(newDetails);
}

saveBasicDetails = (event) => {
    event.preventDefault();
    const data = {
        //"id": this.props.basicDetails.id,
        "first_name": event.target.elements[0].value,            
        "last_name": event.target.elements[1].value,
        "email": event.target.elements[2].value,
        "phone_number": event.target.elements[3].value,
        "city": event.target.elements[4].value,
        "state": event.target.elements[5].value, 
        "country":  event.target.elements[6].value,  
        "dob":  event.target.elements[7].value,                 
    }

    axios.post(PATH + "/customerprofile/basicdetails", data)
    .then(res => {
        if(res.status === 200){
            localStorage.setItem('id', res.data.id);       
        }
        this.changeBasicDetailMode(false)
        this.getBasicDetails(res.data);
    })
    .catch(err=>{
        //this.props.authFail(err.response.data.msg);
    })
}
// About me Related Methods-------------------------------------------------------
    getaboutmeInfo = () => {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        axios.get(PATH + "/customerprofile/aboutme")
        .then(res => {
            if(res.status == 200){
                    saveAboutMeInfo(res.data)
                    this.props.saveAboutMeInfo(res.data);  
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    updateAboutMeInfo = (value) => {
        let newInfo = [];
        Object.assign(newInfo, this.props.aboutme);
        newInfo.push(value);       
        this.props.saveAboutMeInfo(newInfo);
    }

    saveAboutMeInfo = (event) => {
        event.preventDefault();
        const data = {
            "yelping_since": event.target.elements[0].value,            
            "things_love": event.target.elements[1].value,
            "findme_in": event.target.elements[2].value,
            "links": event.target.elements[3].value,
            "headline": event.target.elements[4].value,                     
        }

        axios.post(PATH + "/customerprofile/aboutme", data)
        .then(res => {
            if(res.status === 200){
                localStorage.setItem('yelping_since', data.yelping_since);
                this.changeAboutMeMode(false);
                this.getAboutMeInfo(data);      
            }
        })
        .catch(err=>{
            this.props.authFail(err.response.data.msg);
        })
    }


    changeMode = (event) => {
        if(event.target.innerText === 'Cancel' || event.target.innerText === 'Save'){
            this.props.changeMode(false);
        } else {
            this.props.changeMode(true);
        }
    }
    changeBasicDetailMode = (mode) => {
        this.props.changeBasicDetailMode(mode);
        }
    changeAboutMeMode = (mode) => {
            this.props.changeAboutMeMode(mode);
            }
    enableSave = (event) => {
        if(!event){
            this.props.enableSave(false);
        } else {
            this.props.enableSave(true);
        }        
    }
//========================================

getProfilePic = () => {
    //var token= 'Bearer '.concat(localStorage.getItem('token'))
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');

    axios.get(PATH + "/customerphoto/profilepic")
    .then(res => {
        if(res.status == 200){
            if(res.data){
                console.log("data received",res.data[0].photo)

                this.props.saveProfilePic(PATH +"/"+ res.data[0].photo);
                console.log(res.data.profile_pic)
            }
            //this.props.saveBasicDetails({...res.data, editMode:false});
        }
    })
    .catch(err=>{
        //this.props.setError(err.response.data);
    })
}
    addProfilePic = (event) => {
        event.preventDefault();
        const formData = new FormData();
        const file = event.target.elements[0].files[0];
        formData.append('profile_pic', event.target.elements[0].files[0]);
        formData.append('id', this.props.id);
        console.log("1")
        axios.post(PATH + "/customerphoto/profilepic", formData, { 
            headers: {
                'content-type':'multipart/form-data'
            }   
        })
        .then(res => {
            if(res.status === 200){
                console.log("posted")
                this.props.saveProfilePic(PATH + "/" + file.name);
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    render(){
        // if(this.props.basicDetails && this.props.education && this.props.education.length && this.props.experience && this.props.experience.length){
            return (
                <Container className="mt-5 mb-5">                                           
                    <Row>
                    <Col sm={4} md={4} lg={4}>
                        <ProfilePic profilePic={this.props.profile_pic} submitHandler={this.addProfilePic} mode = {this.props.mode} modeHandler = {this.changeMode}></ProfilePic><br/>
                    </Col>
                        <Col sm={8} md={8} lg={8}>
                        <BasicDetails basicDetails={this.props.basicDetails} submitHandler={this.saveBasicDetails} changeBasicDetailMode = {this.changeBasicDetailMode} bdmode = {this.props.bdmode}></BasicDetails><br/>
                        <AboutMe aboutme = {this.props.aboutme} submitHandler = {this.saveAboutMeInfo} changeAboutMeMode = {this.changeAboutMeMode} ammode = {this.props.ammode}></AboutMe><br/>
                        </Col>
                    </Row>
                </Container>            
            )     
    }
}

const mapStateToProps = (state) => {
    return {
        basicDetails: state.custPage.basicDetails,
        aboutme: state.custPage.aboutme,
        mode: state.custPage.mode,
        save: state.custPage.save,
        profile_pic: state.custPage.profile_pic,
        bdmode: state.custPage.bdmode,
        ammode: state.custPage.ammode,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveBasicDetails: (data) => dispatch(saveBasicDetails(data)),
        saveAboutMeInfo: (data) => dispatch(saveAboutMeInfo(data)),
        changeMode: (data) => dispatch(changeMode(data)),
        enableSave: (data) => dispatch(enableSave(data)),
        saveProfilePic: (data) => dispatch(saveProfilePic(data)),
        changeBasicDetailMode: (data) => dispatch(changeBasicDetailMode(data)),
        changeAboutMeMode: (data) => dispatch(changeAboutMeMode(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);