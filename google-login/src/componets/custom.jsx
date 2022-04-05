import React, { useEffect,useState } from 'react'
import { BASE_URL } from '../config';

const Custom = () => {
  const [profile, setProfile] = useState([]);
  useEffect(()=>{
    fetch(`${BASE_URL}/auth/google/callback?code=4%2F0AX4XfWjvp0vdSi3MapvxDRG5U_eSWe0cO5d8TSazFVzADj_cTaWujgkl_jy1Udz-WUcMlQ&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fmail.google.com%2F+openid&authuser=0&prompt=consent#`).then((a)=>{
      return a.json();
    })
    .then((data)=>{
      setProfile(data)
    })
  },[])
  console.log(profile,"ffffffffff")
  return (


    <div>
      custom</div>
  )
}

export default Custom