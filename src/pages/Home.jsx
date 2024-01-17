import React, { useEffect, useState } from 'react'
import style from '../style/style.module.scss'
import Table from '../components/Table'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'


function Home() {
    const [persons, setPersons] = useState()
    const navigation = useNavigate()

     const handleOptionChange = (e) => {
        const selectedOption = e.target.value;
        if (selectedOption === 'Work') {
            navigate('/work');
        }
    };

    async function fetchPerson() {
        try {
            const response = await axios.get(`http://localhost:3000/password`)
            setPersons(response.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPerson()
    }, [])

    return (
        <div className={style.container}>
            <Navbar />
                <div className={style.formContainer}>
                    <Link to='/add'>
                        <button class={style.addButton}>Add</button>
                    </Link>
                    <select id="Category" disabled>
                        <option value="" disabled selected>Category</option>
                        <option value="work">work</option>
                        <option value="family">family</option>
                        <option value="personal">personal</option>
                    </select>
                </div>
            <Table persons={persons} setPersons={setPersons}/>
        </div>
    )
}

export default Home