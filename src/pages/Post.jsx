import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Post() {
  const params = useParams();
  console.log(params);
  const [post, setPost] = useState({});
  const { id } = params;
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
            `https://json-server-vercel-5mr9.onrender.com/posts/${id}`
          );
          setPost(res.data);
      } catch (error) {
        console.log(error);
        
      }
    })();
  }, [id]);

  return (
    <>
      <h2>{post.title}</h2>
      <img className="w-25"src={post.imagesUrl} alt="" />
    </>
  );
}

export default Post;
