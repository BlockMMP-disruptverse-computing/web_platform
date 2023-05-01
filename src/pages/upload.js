import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const Button = styled.button`
  background: ${props => props.primary ? "red" : "transparent"};
  color: ${props => props.primary ? "white" : "mediumseagreen"};
  opacity: ${props => props.primary ? "white" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid mediumseagreen;
  border-radius: 3px;
  &:hover {
	//transform: scale(1.1);
	background: mediumseagreen;
	opacity: 0.5;
  }
`
const UploadButton = () => {
	const [selectedFile, setSelectedFile] = useState(null);
  
	const handleFileChange = (event) => {
	  setSelectedFile(event.target.files[0]);
	};
  
	const handleUpload = async () => {
	  try {
		const formData = new FormData();
		formData.append('file', selectedFile);
  
		const response = await axios.post('/upload', formData, {
		  headers: {
			'Content-Type': 'multipart/form-data'
		  }
		});
  
		console.log(response.data);
	  } catch (error) {
		console.error(error);
	  }
	};
  
	return (
	  <div>
		<input type="file" onChange={handleFileChange} />
		<Button onClick={handleUpload}>Upload</Button>
	  </div>
	);
  };
  
  export default UploadButton;
