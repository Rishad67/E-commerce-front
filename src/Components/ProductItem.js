import React from 'react'
import { Card } from 'react-bootstrap';

export default function ProductItem(props) {
    return (
        <div className="card-holder col-4 col-sm-3 col-md-2">
            <Card>
                <Card.Img className="mb-2 p-2" src={props.item.image} />
                <Card.Title className="text-center">Good job</Card.Title>
                <p className="text-center">{props.item.label}</p>
            </Card>
        </div>
    )
}
