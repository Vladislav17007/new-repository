import React from "react";

const Postitem = (props) => {

    return (
                <div className="post">
      <div className="post_content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div >
          {props.post.body}
        </div>
      </div>
      <div className="psot__btns">
        <button>Удалить пост.</button>
      </div>
    </div>
    );
};

export default Postitem;