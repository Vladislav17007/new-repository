/*Не забываем импортировать все компоненты*/
import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css';
import Postitem from "./components/Postitems";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"

function App() {
  const [posts, /*setPosts*/] = useState([
    {id: 1, title: 'Javascript', body: 'Description',},
    {id: 2, title: 'Javascript', body: 'Description',},
    {id: 3, title: 'Javascript', body: 'Description',},
  ])

const [title, setTitle] = useState('') /*Двусторонее связывание*/
{/*Стрелочная функция*/}


const addNewPost = (e) => {
      e.preventDefault();
      console.log(title);
};

  return (
        /*В этой функции должен быть один род-ий элемент */
    <div className="App">
        <form>
          {/*Управляемый компонент*/}
        <MyInput  
                  value={title}
                  //добавление функции OnChange для отслежки добавления чего-то пользователем
                  onChange={e => setTitle(e.target.value)}
                  type="text" 
                  placeholder="Название поста."/>
        <MyInput type="text" placeholder="Описание поста."/>
        {/*добавление функции onClick для управления кнопкой пользователем*/}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
