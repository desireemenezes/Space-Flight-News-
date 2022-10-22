import React , {  useEffect } from 'react';
import Api from  '../service/api';

const Home = () => {
	
	// const [id, setId] = useState();
	// const [title, setTitle] = useState();
	// const [url, seUrl] = useState();
	// const [imageUrl, setIimageUrl] = useState();
	// const [newsSite, setNewSite]= useState();
	// const [sumary, setSumary]= useState();
	// const [publishedAt, setPublishedAt]= useState();
	// const [featured, setFeatured]= useState(false);


	useEffect(() => { 
		async function load(){
		await Api.get(``,{}).then(response => {
				console.log(response.data)
			})
		}
		load();
	},)
	
	return  (
	<>
		<header className="">
			fix
		</header>
	</>

	
	);
}



export default Home;