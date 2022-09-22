/*Не забываем импортировать все компоненты*/
import React, { useMemo, useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css';
import Postitems from "./components/Postitems";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/UI/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'аа', body: 'бб'},
    {id: 2, title: 'гг 2', body: 'аа'},
    {id: 3, title: 'вв 3', body: 'яя'},
  ])

  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {

    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() =>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
      setPosts( [...posts, newPost])
      setModal(false)
  }

  // Получаем post из дочернего элемента
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    /*В этой функции должен быть один род-oй элемент */
      <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
              Создать Пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
       
        

        <hr style={{ margin: '15px 0' }} />
        <PostFilter
            filter={filter}
            setFilter={setFilter} 
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />

      </div>
  );
}

export default App;