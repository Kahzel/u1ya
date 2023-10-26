import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

import nicePortrait from './assets/nice portrait.png';
import sp from './assets/sp.png';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './CardDisplay.css';
import {Image} from "react-bootstrap";

function CardDisplay() {
    const [show, setShow] = useState(false);
    const [imageToShow, setImage] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setImage(image);
        setShow(true);
    }

    return (
        <Container>
            <Row>
                <Col>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={nicePortrait} className="Display-Thumb" />
                        <Card.Body>
                            <Card.Title>Example for a fanart card 1</Card.Title>
                            <Card.Text>
                                by whoever did it
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShow(nicePortrait)}>Open full image</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sp} className="Display-Thumb"  />
                        <Card.Body>
                            <Card.Title>Example for a fanart card 2</Card.Title>
                            <Card.Text>
                                by whoever did it, again
                            </Card.Text>
                            <Button variant="primary" onClick={() =>handleShow(sp)}>Open full image</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="Modal-Thing"
            >

                <Modal.Body>
                    <Image src={imageToShow} />
                </Modal.Body>

            </Modal>
        </Container>
    );
}

export default CardDisplay;