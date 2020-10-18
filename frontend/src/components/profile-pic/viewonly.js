import React from 'react';
import { Card, Image, Button, Row, Col, Form } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProfilePic = (props) => {
    let content;
    if(!props.mode){
        content = (
            <div>
                <Row className="justify-content-center">
                    <Card.Title>{props.profile_pic ? (props.profile_pic.first_name + ' ' + props.profile_pic.last_name) : ''}</Card.Title>
                </Row>

            </div>
        );
    } else {
        content = (
            <div>
                <Form method="post" onSubmit={props.submitHandler} className="pl-5 pt-2">
                    <div>
                        <Form.Control type="file" id="file" name="file" multiple />
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faCamera} style={{marginBottom:'5px'}}/><Button type="submit" variant="link" >
                        <p className="text-muted font-weight-bold">Add Photo</p>
                    </Button>
                    <Button type="button" className="ml-2" variant="danger" onClick={props.modeHandler}>Cancel</Button>
                    </div>
                </Form>
            </div>            
        )
    }
        
    return (
        <Card bg="light">
            <Card.Body>
            <Row className="justify-content-center">
                <Image src={props.profilePic} width="200" height="200" />
            </Row>
            {content}
            </Card.Body>
        </Card>
    );

}