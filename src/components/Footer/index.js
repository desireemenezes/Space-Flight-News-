import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as S from './style'

function Footer () {
    return (
        <>
        <S.Footer>
           <Row>
            <Col xs={12}>
                © Space Flight News 2022
            </Col>
           </Row>
        </S.Footer>
        </>
      
    );
  };

export default Footer;