import styled from 'styled-components';

export const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;

    .input-search {
        position: relative;
    }
    .form-control {
        padding: 6px;
        border: 2px solid var(--dark);
    }
    .search {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        background: var(--orange);
        border: 2px solid var(--dark);
        position: absolute;   
        top: 0; 
        right: 0;
    }
    #dropdown-basic-button {
        border: 2px solid var(--dark);
        background-color: transparent;
        color: var(--dark);
        margin-left: 15px;
        width: 170px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dropdown-menu.show {
        margin-left: 15px;
        border: 2px solid var(--dark);
        width: 170px;
    }
    
`

export const RowNav = styled.div`
    border-bottom: 2px solid var(--dark);
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;

    .logo {
        width: 200px;
        height: 200px;
        transform: rotate(45deg);
    }
    .title {
        font-size: 45px;
        font-weight: 500;
        color: var(--dark-purple);
        padding: 10px;
        padding-bottom: 40px;
    }  
`