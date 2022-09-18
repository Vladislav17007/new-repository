/*Не забываем импортировать все компоненты*/
import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css';
import Postitems from "./components/Postitems";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
//import PostForm from "./components/UI/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
  ])

  const [selectedSort, setSelectedSort] = useState('')


  const createPost = (newPost) => {
      setPosts( [...posts, newPost])
  }

  // Получаем post из дочернего элемента
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
      setSelectedSort(sort);
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    /*В этой функции должен быть один род-oй элемент */
    <div className="App">
        <PostForm create={createPost}/>

        <hr style={{margin: '15px 0'}}/>
        <div>
          <MySelect 
              value={selectedSort}
              onChange={sortPosts}
              defaultValue="Сортировка"
              options={[
                {value: 'title', name:'По названию'},
                {value: 'body', name:'По описанию'},
              ]}
          />
        </div>
        
        {/*Дальше идёт условная отрисовка*/}
        
        {posts.length !== 0
        ? 
        <PostList remove={removePost} posts={posts} title="Посты про JS"/>
        : 
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
          </h1>
      }
    </div>
  );
}

export default App;