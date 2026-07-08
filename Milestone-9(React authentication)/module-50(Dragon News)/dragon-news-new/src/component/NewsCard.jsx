import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaStarHalfAlt, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    // JSON থেকে প্রয়োজনীয় ডাটা ডি-স্ট্রাকচারিং করে নেওয়া হলো
    const { title, author, image_url, details, rating, total_view } = news;

    // রেটিং স্টার দেখানোর লজিক (সর্বোচ্চ ৫ স্টার)
    const renderStars = (num) => {
        const stars = [];
        const floor = Math.floor(num);
        for (let i = 1; i <= 5; i++) {
            if (i <= floor) {
                stars.push(<FaStar key={i} className="text-warning" />);
            } else if (i - 0.5 <= num) {
                stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
            } else {
                stars.push(<FaStar key={i} className="text-base-300" />);
            }
        }
        return stars;
    };

    return (
        <div className="card w-full bg-base-100 border border-base-200 rounded-lg shadow-sm mb-6 overflow-hidden">
            
            {/* ১. অথর সেকশন (Top Header) */}
            <div className="flex justify-between items-center bg-base-200/50 px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={author?.img} alt={author?.name} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-neutral">{author?.name}</h2>
                        <p className="text-xs text-neutral-400">
                            {author?.published_date ? new Date(author.published_date).toISOString().split('T')[0] : 'No Date'}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 text-neutral-500 text-lg">
                    <button className="hover:text-primary transition-colors">
                        <FaRegBookmark />
                    </button>
                    <button className="hover:text-primary transition-colors">
                        <FaShareAlt />
                    </button>
                </div>
            </div>

            {/* ২. মেইন কন্টেন্ট সেকশন */}
            <div className="p-5">
                {/* টাইটেল */}
                <h2 className="card-title text-xl font-bold text-neutral mb-4 leading-snug hover:text-primary cursor-pointer">
                    {title}
                </h2>

                {/* থাম্বনেইল ইমেজ */}
                <figure className="w-full h-64 rounded-md overflow-hidden mb-4">
                    <img 
                        src={image_url} 
                        alt="News Thumbnail" 
                        className="w-full h-full object-cover"
                    />
                </figure>

                {/* নিউজ ডিটেইলস (সীমিত টেক্সট এবং Read More বাটন) */}
                <p className="text-sm text-neutral-500 mb-2 line-clamp-3">
                    {details}
                </p>
                <button className="text-sm font-semibold text-orange-500 hover:underline mb-4 block">
                    Read More
                </button>

                <hr className="border-base-200 my-4" />

                {/* ৩. ফুটার সেকশন (রেটিং এবং ভিউজ) */}
                <div className="flex justify-between items-center text-neutral-500">
                    {/* রেটিং স্টার */}
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1 text-sm">
                            {renderStars(rating?.number || 0)}
                        </div>
                        <span className="text-sm font-medium pt-0.5">{rating?.number}</span>
                    </div>

                    {/* ভিউ কাউন্ট */}
                    <div className="flex items-center gap-2 text-sm">
                        <FaEye className="text-lg" />
                        <span className="font-medium">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;