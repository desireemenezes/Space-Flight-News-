import React, {useMemo} from 'react';
import { format } from 'date-fns';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import * as S from './style'

function Articles ({imageUrl, title, summary, publishedAt, newsSite, id, event }) {

    const date = useMemo(() => format(new Date(publishedAt), 'dd/MM/yyyy'));

    return (
        <S.ContainerCard key={id}>
            <Card className={event === true ?  'containercard' : 'containercard-reverse'}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title className='card-title'>{title}</Card.Title>
                <S.flexCard>
                        <Card.Subtitle >{date}</Card.Subtitle> <Button>{newsSite}</Button>
                    </S.flexCard>
                    <Card.Text>
                    {summary.substring(0, 100)}
                    {summary.length > 100 ? '...' : ' '}
                    </Card.Text>
                    <S.flexButton>
                        <Button variant="primary">Ver mais</Button>
                    </S.flexButton>
                </Card.Body>
         </Card>
      </S.ContainerCard>
      
    );
  };

export default Articles;