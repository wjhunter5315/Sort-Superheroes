import React, { useState } from "react";
import './TestPage.css';

function TestPage() {
	
	const [searchObject, setSearchObject] = useState([]);

	function handleInputChange(event) {
		const { name, value } = event.target;
		setSearchObject({...searchObject, [name]: value});
		console.log(searchObject);
	};

	return (
		<div>
		<div className="input-group mb-3">
  		<input type="text" className="form-control" placeholder="Enter a Super Hero" aria-label="Recipient's username" aria-describedby="button-addon2" />
  			<div className="input-group-append">
					<button 
						className="btn btn-outline-secondary" 
						type="button" 
						id="button-addon2"
						onClick={handleInputChange}>
						Button
					</button>
  			</div>
		</div>
			<ul className="ul">Bullet Points
				<li className="li">One</li>
				<li className="li">Two</li>
				<li className="li">Three</li>
				<li className="li">Four</li>
			</ul>
		</div>
	)
};

export default TestPage;

