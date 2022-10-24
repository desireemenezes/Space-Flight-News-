import styled from 'styled-components';

export const ContainerCard = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 40px;
    .containercard {
        display: flex;
        flex-direction: row ;
        border: none;
        max-height: 300px;
    }
    .containercard-reverse {
        display: flex;
        flex-direction: row-reverse ;
        border: none;
        max-height: 300px;
    }
    .card-body {
        flex: 1; 
    }
    .card-img, .card-img-bottom, .card-img-top {
      width: 50% !important;
      object-fit: cover;
    }
    .card-title {
        font-weight: 600;
    }
`
export const flexCard = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   .btn {
    background: var(--dark-purple);
    height: 25px;
    padding: 5px;
    font-size: 13px;
    border: none;
    line-height: initial;
   }
     
`

export const flexButton = styled.div`
   text-align: center;
   align-items: center;

   .btn {
        background: var(--orange);
        border: none;
   }
`    