import React from "react";
import Postitems from "./Postitems";



const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
            {title}
            </h1>
        {posts.map((post) =>
          <Postitems post={post} key={post.id}/>
          )}
          </div>
    );
};

export default PostList;