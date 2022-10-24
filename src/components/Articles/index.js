import React, {useMemo, useState} from 'react';
import { format } from 'date-fns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'


import * as S from './style'


function Articles ({url, imageUrl, title, summary, publishedAt, newsSite, id, event }) {

    const date = useMemo(() => format(new Date(publishedAt), 'dd/MM/yyyy'));
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <S.ContainerCard key={id}>
            <Card className={event === true ? 'containercard' : 'containercard-reverse'}>
                <S.imagemContent>
                    <Card.Img src={imageUrl} alt="imagem url" />
                </S.imagemContent>
                <Card.Body>
                    <Card.Title className='card-title'>{title}</Card.Title>
                    <S.flexCard>
                        <Card.Subtitle>{date}</Card.Subtitle> <Button>{newsSite}</Button>
                    </S.flexCard>
                    <Card.Text>
                        {summary.substring(0, 100)}
                        {summary.length > 100 ? '...' : ' '}
                    </Card.Text>
                    <S.flexButton>
                        <Button variant="primary" alt="button" onClick={handleShow}>Ver mais</Button>
                    </S.flexButton>
                </Card.Body>
            </Card>
        </S.ContainerCard>
    
     
        <Modal size="lg"show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="show-grid">
                <Image  className="img-modal" src={imageUrl} alt="imagem url" />
                <Container>
                    <Row>
                        <Col className="modal-title"xs={12}> {title}</Col>
                    </Row>
                    <Row>
                        <Col className="modal-date" xs={12}>{date} </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>{summary} </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-modal-footer" target="blank" href={url} variant="secondary" >
                    Ir para o site
                </Button>
            </Modal.Footer>
        </Modal>
        </>
      
    );
  };

export default Articles;