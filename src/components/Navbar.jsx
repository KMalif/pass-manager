import React, { useEffect, useState } from 'react'
import style from '../style/style.module.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const [categories, setCategories] = useState()
    const navigation = useNavigate()

    async function fetchCategory() {
        try {
            const dataCategory = await axios.get("http://localhost:3000/category")
            setCategories(dataCategory.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    return (
        <nav className={style.navbar}>
            <div className={style.navContainer}>
                <a className={style.navbarBrand} href="#">Password Manager</a>
                <div className={style.navLinks}>
                    <a className={style.navLink}
                        onClick={() => navigation(`/`)}
                    >All</a>
                    {
                        categories?.map((el) => (
                            <a className={style.navLink}
                                onClick={() => navigation(`/category/${el.name}`)}
                            >{el.name}</a>
                        ))
                    }
                </div>
                <button className={style.navbarToggler} id={style.navbarToggler} aria-label="Toggle navigation">
                    <span className={style.navbarTogglerIcon}></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar