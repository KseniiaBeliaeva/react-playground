import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input
} from 'reactstrap';

const person = (props) => {
    return (
        <Card width="50%">
            <CardBody>
                <CardTitle onClick={props.click}>I'm {props.name} and I am {props.age} years old!</CardTitle>
                <CardSubtitle>{props.hobbie}</CardSubtitle>
                    <Input type="text" onChange={props.changed} placeholder={props.name} />
            </CardBody>
        </Card>
    )
};

export default person
 