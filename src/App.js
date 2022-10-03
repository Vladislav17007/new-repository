/*Не забываем импортировать все компоненты*/
import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

   useEffect(() => {
    fetchPosts()
   }, [])

  const createPost = (newPost) => {
      setPosts( [...posts, newPost])
      setModal(false)
  }

  async  function fetchPosts () {
    setIsPostsLoading(true);
    setTimeout( async() => {

      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 1000)
    }

  // Получаем post из дочернего элемента
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    /*В этой функции должен быть один род-oй элемент */
      <div className="App">
            <button onClick={fetchPosts}>GET POSTS</button>
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
        {isPostsLoading
            ?<div style={{display:'flex', justifyContent:'center', marginTop:50}}>
              <Loader/>
              </div>
            :<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />

        }

      </div>
  );
}

export default App;