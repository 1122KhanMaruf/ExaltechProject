import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
const Courses = () => {
    const selector = useSelector((state) => state.CourseReducer);
    return (
        <div>
            <h1>Courses Component</h1>
            {selector.map((item) => {
                return (
                    <Card style={{ with: "18rem",display:"inline-block"}}>
                        <Card.Img variant="top" src={item.cardImage} width="16rem" height="300rem" />
                        <Card.Title>{item.cardTitle}</Card.Title>
                        <Card.Text>{item.cardDesc}</Card.Text>
                    </Card>
                );
            })}
        </div>
    );
};

export default Courses;