import React from "react";
import Postitems from "./Postitems";



const PostList = ({posts, title, remove}) => {
    
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
            Посты не найдены!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
            {title}
            </h1>
             {/*создание упорядоченной нумераци с помощью передачи номера в элементе в массиве*/}
        {posts.map((post, index) =>
          <Postitems remove={remove} number={index + 1} post={post} key={post.id}/>
          )}
          </div>
    );
};

export default PostList;