import React, { useState, useEffect } from 'react';

// ## React Doc on AJAX Calls ##
function APITest() {
   const PRIVATE_API_KEY = `${process.env.REACT_APP_PRIVATE_MARVEL_API_KEY}`;
   console.log(PRIVATE_API_KEY);
   const PUBLIC_API_KEY = `${process.env.REACT_APP_PUBLIC_MARVEL_API_KEY}`;
   console.log(PUBLIC_API_KEY);
   const apiKey = "580bf0352e483a8c8faa7eee5d108612d029ff81"
   const queryURL = "https://gateway.marvel.com/v1/public/characters?name=Spider-Man&orderBy=name&apikey=" + apiKey;
   
   const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
 
	// Note: the empty deps array [] means
	// this useEffect will run once
	// similar to componentDidMount()
	useEffect(() => {
	  fetch(queryURL)
		 .then(res => res.json())
		 .then(
			(result) => {
			  setIsLoaded(true);
			  setItems(result.items);
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  setIsLoaded(true);
			  setError(error);
			}
		 )
	}, [])
 
	if (error) {
	  return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
	  return <div>Loading...</div>;
	} else {
	  return (
		 <ul>
			{items.map(item => (
			  <li key={item.name}>
				 {item.name} {item.price}
			  </li>
			))}
		 </ul>
	  );
	}
};

export default APITest;