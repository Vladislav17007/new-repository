import React from "react";
import MyButton from "./UI/button/MyButton";

const Postitems = (props) => {

    return (
                <div className="post">
      <div className="post_content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>
          Удалить пост.
          </MyButton>
      </div>
    </div>
    );
};

export default Postitems;