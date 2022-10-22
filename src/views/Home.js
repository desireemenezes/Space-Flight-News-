import React , { useState, useEffect } from 'react';
import Api from  '../service/api';

const Home = () => {
	

	useEffect(() => { 
		async function load(){
		await Api.get(``,{}).then(response => {
				console.log(response.data)
			})
		}
		load();
	}, [])
	
	return  (
		
		<div>Teste</div>
	);
}

//

export default Home;