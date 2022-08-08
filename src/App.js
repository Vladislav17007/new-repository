/*Не забываем импортировать все компоненты*/
import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css';
import Postitems from "./components/Postitems";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'аа', body: 'бб',},
    {id: 2, title: 'гг 2', body: 'аа',},
    {id: 3, title: 'вв 3', body: 'яя',},
  ])

const [selectedSort, setSelectedSort] = useState('');

const [searchQuery, setSearchQuery] = useState('');

function getSortedPosts() {
  console.log('ОТРАБОТАЛА ФУНКЦИЯ sortedPosts');
  if(selectedSort) {
    return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
  }
  return posts;
}

const sortedPosts = getSortedPosts();

const createPost = (newPost) => {
    setPosts([...posts, newPost])
}

const removePost = (post) =>{
  setPosts(posts.filter(p => p.id !== post.id))
}

const sortPosts = (sort) => {
  setSelectedSort(sort);
}

/*2-й способ получения данных у пользователя через неуправляемый Input*/
/*Новый хук UseRef. Получение доступа к DOM элементу
const bodyInputRef = useRef ();
*/


  return (
    /*В этой функции должен быть один род-ий элемент */
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}></hr>
        <div>
          <MyInput 
          value={setSearchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
          />
          <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                  {value: 'title', name: 'По названию'},
                  {value: 'body', name: 'По описанию'},
                ]}
          />
        </div>

        {/*Отрисовка по условию с помощью тернарного оператора*/}
        {posts.length 
            ?
              <PostList remove={removePost} posts={sortedPosts} title="Посты про JS"/>
            :
              <h1 style={{textAlign: 'center'}}>Постов не существует.</h1>
        }
    </div>
  );
}

export default App;