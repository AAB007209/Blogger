// import { blog_data } from '@/Assets/assets'
import React, { useEffect } from 'react'
import { useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {

    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        // console.log(response.data.blogs);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu("All")}
                    className={`py-1 px-4 rounded-sm transition-all duration-300 ease-in-out ${menu === "All" ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>All</button>
                <button onClick={() => setMenu("Technology")}
                    className={`py-1 px-4 rounded-sm transition-all duration-300 ease-in-out ${menu === "Technology" ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Technology</button>
                <button onClick={() => setMenu("Startup")}
                    className={`py-1 px-4 rounded-sm transition-all duration-300 ease-in-out ${menu === "Startup" ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Startup</button>
                <button onClick={() => setMenu("Lifestyle")}
                    className={`py-1 px-4 rounded-sm transition-all duration-300 ease-in-out ${menu === "Lifestyle" ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>Lifestyle</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blogs.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                    return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
                })}
            </div>
        </div>
    )
}

export default BlogList