import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
             {/*создание упорядоченной нумераци с помощью передачи номера в элементе в массиве*/}
            <Postitems remove={remove} number={index + 1} post={post} />
            
            </CSSTransition>
            )}

            </TransitionGroup>
          </div>
    );
};

export default PostList;