import React, {useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';

const Homepage = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        // for local, 'http://localhost:8000/api/blog'
        axios.get('api/blog')
            .then(res => {
                console.log(res.data);
                setBlogData(res.data);
            })
            .catch(err => console.log(err.response.data));
    }, []);

    return(
        <div>
            <img style={{
                height: 200,
                width: 250,
                }} 
                src="/aurora-1197753_1280.jpg" 
                alt="aurora borealis"/>
            {blogData.map(
                ( {title, post_text} , index) =>
                <div>
                    <h2>
                        Title: {title}
                    </h2>
                    <h5>
                        Post: {post_text}
                    </h5>
                </div>
            )}
        </div>
    )

}

export default Homepage;