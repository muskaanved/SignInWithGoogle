import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { VERIFY_TOKEN, BASE_URL, REFRESH_TOKEN } from '../config';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const GoogleLogin = () => {
	const [verify, setVerifyToken] = useState([]);
	const [refreshToken, setRefreshToken] = useState([]);

	let query = useQuery();
	let tokenn = query.get("token")
	let email = query.get("user")
	localStorage.setItem('token', tokenn);
	localStorage.setItem('userEmail', email);

	useEffect(() => {
		fetch(`${BASE_URL}${VERIFY_TOKEN}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'token': localStorage.getItem('token'),
			},
		}).then(results => results.json())
			.then(data => {
				setVerifyToken(data)
			})
	}, [])

	if (verify.status === true) {
		window.location.replace('/email')
	}
	else {

		fetch(`${BASE_URL}${REFRESH_TOKEN}`).then(results => results.json())
			.then(results => results.json())
			.then(data => {
				localStorage.setItem('token', data.refreshToken);
			})

		window.location.replace('/email')

	}



	return (
		<div>GoogleLogin</div>
	)
}

export default GoogleLogin