import styled from 'styled-components';

export const ContainerCard = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 60px;

    .containercard {
        display: flex;
        flex-direction: row ;
        border: none;
        height: 300px;
        @media(max-width: 1024px) {
            flex-direction: column;
            height: auto;
        }
    }
    .containercard-reverse {
        display: flex;
        flex-direction: row-reverse ;
        border: none;
        height: 300px;
        @media(max-width: 1024px) {
            flex-direction: column;
            height: auto;
        }
    }
    .card-body {
        flex: 1; 
    }
    .card-img, .card-img-bottom, .card-img-top {
      width: 50% ;
      object-fit: cover;
        @media(max-width: 1024px) {
            width: 100% !important;
        }
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