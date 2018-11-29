import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input
} from 'reactstrap';
import "./person.css"

const person = (props) => {
    return (
    <div className="person-card">
        <Card>
            <CardBody>
                <CardTitle onClick={props.click}>I'm {props.name} and I am {props.age} years old!</CardTitle>
                <CardSubtitle>{props.hobbie}</CardSubtitle>
                    <Input type="text" onChange={props.changed} placeholder={props.name} />
            </CardBody>
            </Card>
    </div>
    )
};

export default person
 