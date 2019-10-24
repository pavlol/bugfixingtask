import axios from "axios";

async function getCardDetails (){
	let newPromise = new Promise((resolve, reject)=>{
		axios.get('http://localhost:3001/example').then((result)=>{
			const {title, body, imgSrc} = result.data;
			
			// Passed a object into resolve instead of three parameters
			resolve({title, body, imgSrc})
		})
	})
	return newPromise
}

export { getCardDetails }