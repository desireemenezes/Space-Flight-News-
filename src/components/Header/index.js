import React from 'react';
import { BsSearch } from "react-icons/bs";
import logo from '../../assets/rocket.png';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import * as S from './style'

function Header () {

	return (
		<>
		<S.Navigation >
			<Navbar>
				<Form className="input-search">
					<Form.Control type="search" placeholder="Search" aria-label="Search"/>
					<Button className='search'><BsSearch size={18} color='#fff'/></Button>
				</Form>
				<DropdownButton id="dropdown-basic-button" title="Sort">
					<Dropdown.Item href="#/action-1">Older</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Newest</Dropdown.Item>
				</DropdownButton>
			</Navbar>
		</S.Navigation>
		<S.RowNav>
        	<img src={logo} alt="Logo" className='logo pulse' />
			<Row className='title'>
				Space Flight News
			</Row>
		</S.RowNav>
		</>
	  );
	}


export default Header;