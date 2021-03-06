import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFatching() {
    const [posts, setPosts] = useState([]);
    const [postID, setPostID] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function getPostHandler() {
        setLoading(true);
        setError('');
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`).then(e => {
            setPosts([e.data]);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setPosts([]);
            setError(err.message);
            setLoading(false);
        });
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(e => {
            setPosts(e.data);
        })
    }, [])

    return (
        <div>
            <div>
                <label>Post ID</label> 
                {loading ? 'Loading...' : ''}
                {error ? error : ''}
                <input type="text" value={postID} onChange={event => setPostID(event.target.value)}></input>
                <button onClick={getPostHandler}>Get Post</button>
            </div>

            {posts.map(e => <div key={e.id}>{e.title}</div>)}
            
            
        </div>
    )
}

export default DataFatching
