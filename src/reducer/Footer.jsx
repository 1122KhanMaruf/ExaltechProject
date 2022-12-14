import React from "react";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
const Footer = () => {
    const selector = useSelector((state) => state.FooterReducer)
    return (
        <div>
            <h1>Footer Component</h1>
            {selector.map((elem, index) => {
                return (
                    <Card style={{ width:"100%" }}>
                        <Card.Img variant="top" src={elem.footImage} width="16rem" height="600rem" />
                        <Card.Body>
                            <Card.Title>{elem.footTitle}</Card.Title>
                            <Card.Text>{elem.footDesc}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    );
};

export default Footer;