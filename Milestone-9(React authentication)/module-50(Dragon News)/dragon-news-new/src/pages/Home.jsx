import React from 'react';
import CategoryNews from './CategoryNews';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
            <Navigate to="/category/1"></Navigate>
            <CategoryNews></CategoryNews>
        </div>
    );
};

export default Home;