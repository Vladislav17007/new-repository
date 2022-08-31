import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    
    /*1-Й способ получения данных у пользователя через управляемый Input*/
    const [post, setPost] = useState({title: '', body: ''})/*Двусторонее связывание*/


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
      };
      

    return (
        <form>
          {/*Управляемый компонент*/}
        <MyInput  
                  value={post.title}
                  //добавление функции OnChange для отслежки добавления информации пользователем
                  onChange={e => setPost({...post, title: e.target.value})}
                  type="text" 
                  placeholder="Название поста."/>

                  {/*Неуправляемый component*/}
        <MyInput
                  value={post.body}
                  onChange={e => setPost({...post, body: e.target.value})}
                  type="text"
                  placeholder="Описание поста."/>
        {/*добавление функции onClick для управления кнопкой пользователем*/}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;