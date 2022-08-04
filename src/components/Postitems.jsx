import React from "react";

const Postitems = (props) => {

    return (
                <div className="post">
      <div className="post_content">
        <strong>{props.number}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="psot__btns">
        <button>Удалить пост.</button>
      </div>
    </div>
    );
};

export default Postitems;
