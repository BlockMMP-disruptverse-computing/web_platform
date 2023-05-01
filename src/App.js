import React from 'react';
//import { useState } from 'react'
//import axios from "axios";
import './App.css';
import './index.css';
//import Brain from './brain.png';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Home from './pages/home';
import Instructions from './pages/instructions';
import Upload from './pages/upload';

function App() {
	return (
		<div class="full-screen">
		<Router>
			<Navbar />
			<Routes>
				<Route path='/home' element={<Home /> } />
				<Route path='/instructions' element={<Instructions /> } />
				<Route path='/upload' element={<Upload />} />
			</Routes>
		</Router>
		</div>
	);
	// 	return (
	// 		<div>
	// 			<nav class="navbar background">
	// 				<ul class="nav-list">
	// 					<div class="logo">
	// 						<img src=
	// {Brain} />
	// 					</div>
	//           <li><a href="#title">DisruptVerse Computing</a></li>
	// 					<li><a href="#home">Home</a></li>
	// 					<li><a href="#uploadfasta">Upload FASTA</a></li>
	// 					<li><a href="#database">Database</a></li>
	//           <li><a href="#instructions">Instructions</a></li>
	//           <li><a href="#signin">Sign In</a></li>
	// 				</ul>

	// 				<div class="rightNav">
	// 					<input type="text" name="search" id="search" />
	// 					<button class="btn btn-sm">Search</button>
	// 				</div>
	// 			</nav>

	// 			<section class="section">
	// 				<div class="box-main">
	// 					<div class="firstHalf">
	// 						<h1 class="text-big">
	// 							Home Page
	// 						</h1>
	// 						<p class="text-small">
	//             Glioblastoma Stem Cells
	// 						</p>
	// 					</div>
	// 				</div>
	// 			</section>
	// 			<footer className="footer">
	// 				<p className="text-footer">
	// 					Copyright ©-All rights are reserved
	// 				</p>
	// 			</footer>
	// 		</div>
	// 	)
}

export default App