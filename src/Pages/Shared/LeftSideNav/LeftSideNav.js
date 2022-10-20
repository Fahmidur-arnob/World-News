import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/news-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div className='leftSideNavContainer'>
            <h4 className='categoryCounter'>All Category: {categories.length}</h4>
            <div className='categoryName'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;