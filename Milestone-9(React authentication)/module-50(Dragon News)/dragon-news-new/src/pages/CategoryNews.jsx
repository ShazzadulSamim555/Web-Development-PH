import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../component/NewsCard';

const CategoryNews = () => {
    const {id}= useParams();
    const data= useLoaderData();
    const [category, setCategory]=useState([]);
    
    useEffect(()=>{
        if(!data) return;
        if(id=="0"){
            setCategory(data);
            return;
        }
        else if(id=="1"){
            const filterNews=data.filter(news=> news.others?.is_today_pick==true);
            setCategory(filterNews);
        }
        else{
            const filterNews=data.filter(news=> news.category_id == id);
        // console.log(filterNews);
        setCategory(filterNews);
        }
    },[data,id])
    return (
        <div>
            <p className=" text-xl font-bold">Dragon News Home</p>
            <div className='grid grid-cols-1 my-2'>
                {
                    category.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews