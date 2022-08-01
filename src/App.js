/*Не забываем импортировать все компоненты*/
import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css';
import Postitems from "./components/Postitems";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description',},
    {id: 2, title: 'Javascript', body: 'Description',},
    {id: 3, title: 'Javascript', body: 'Description',},
  ])


/*1-Й способ получения данных у пользователя через управляемый Input*/
const [post, setPost] = useState({title: '', body:'',}) /*Двусторонее связывание*/
/*Стрелочная функция*/
const [body, setBody] = useState('') /*Двусторонее связывание*/


/*2-й способ получения данных у пользователя через неуправляемый Input*/
/*Новый хук UseRef. Получение доступа к DOM элементу
const bodyInputRef = useRef ();
*/

const addNewPost = (e) => {
  e.preventDefault();
};

  return (
    /*В этой функции должен быть один род-ий элемент */
    <div className="App">
        <form>
          {/*Управляемый компонент*/}
        <MyInput  
                  value={post}
                  //добавление функции OnChange для отслежки добавления чего-то пользователем
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
        <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
