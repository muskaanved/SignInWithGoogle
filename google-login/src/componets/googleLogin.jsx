import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { VERIFY_TOKEN, BASE_URL } from '../config';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const GoogleLogin = () => {

	let query = useQuery();
	let tokenn = query.get("token")
	let email = query.get("user")
	localStorage.setItem('token', tokenn);
	localStorage.setItem('userEmail', email);


	fetch(`${BASE_URL}${VERIFY_TOKEN}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'token': tokenn,
		},
	}).then(results => results.json())
		.then(data => {
			localStorage.setItem('status', data.status);
		})

	window.location.replace('/email')

	return (
		<div>GoogleLogin</div>
	)
}

export default GoogleLogin