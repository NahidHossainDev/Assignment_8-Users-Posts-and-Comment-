import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../Cards/Cards'
import Comments from '../Comments/Comments'

const PostsDetail = (props) => {
    const i = useParams()
    const {id} = i
    
    const [postDetail, setPost] = useState([]);
    useEffect(() => {
        const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(api)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])

    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((res) => res.json())
            .then((data) => setComment(data));
    }, []);

    const style = {
        marginTop: "100px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: 'center',
        width: '100 %',
    };
    const style2 = {
        margin: '20px',
        height:'300px',
    }
    return (
        <div style={style}>
            <Cards showMore={false} post={postDetail}></Cards>
            <div className="comments" style={style2}>
                <h3>Comments</h3>
                {comment.map((cmn) => (
                    <Comments data={cmn}></Comments>
                ))}
            </div>
        </div>
    );
};

export default PostsDetail;