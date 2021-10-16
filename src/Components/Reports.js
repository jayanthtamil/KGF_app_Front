import React, { useState, useEffect } from "react";

const Reports = () => {

const [posts, setposts] = useState( [] );



useEffect(() =>{
  const fetchPosts = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const postsData = await response.json();
    setposts(postsData);
  };
  fetchPosts();
}, []);

const usePosts = posts.map((post) =>{
  return<div>
    <p>{post.id}</p>
    <p>{post.title}</p>
    <p>{post.body}</p>
  </div>
})

  return (
    <>

<h1> reports new</h1>
<div>
  {posts && usePosts}
</div>
    </>
  );
};

export default Reports;
