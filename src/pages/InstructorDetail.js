import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { Button } from 'react-bootstrap';

const InstructorDetail = () => {
    const { login } = useParams();
    const url = "https://api.github.com/users/" + login;
    const [person, setPerson] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
        .then(res => setPerson(res.data))
    }, [url])
    
    const {avatar_url, name, location, html_url, company} = person
  return (
    <div className='text-center'>
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h4>Company: {company}</h4>
        <h4>Location: {location}</h4>
        <span>{html_url}</span>
        <Button className='d-block mx-auto mt-3' variant="warning" onClick={() => navigate(-1)}>Go Back</Button>
        
    </div>
  )
}

export default InstructorDetail