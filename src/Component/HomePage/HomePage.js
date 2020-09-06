import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Grid from "@material-ui/core/Grid";

const HomePage = () => {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, []);

//   const userId = user.map((u) => u.id);

//   async function fetchElement(api) {
//     const response = await fetch(api);
//     const data = await response.json();
//     const newData = data.slice(0, 1);
//     return newData;
//   }
//   let allPost = [];

//   for (let i = 0; i < userId.length; i++) {
//     const api = `https://jsonplaceholder.typicode.com/posts?userId=${userId[i]}`;
//     fetchElement(api).then((data) => allPost.push(...data));
//   }
//   console.log("array Length", allPost[0].length);
//   console.log(allPost);

  useEffect(() => {
      const api = 'https://jsonplaceholder.typicode.com/posts' ;
      fetch(api)
          .then(res => res.json())
          .then(data => setPost(data.slice(0,40)));
  },[])

  // const perPagePost = posts.slice(0,20);

  // console.log(allPost.map(p => p.id))

  const style = {
    marginTop: "100px",
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <div style={style}>
      {post.map(post=> <Cards showMore={true} post={post}></Cards>)} 
    </div>
  );
};

export default HomePage;
