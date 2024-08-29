import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";

import { Sidebar } from "./components/Sidebar/Sidebar";
import { PostProps } from "./components/types/Post/Post";

import "./global.css";

const posts: Array<PostProps> = [
  {
    id: "1",
    author: {
      avatarUrl: "https://github.com/rafael3007.png",
      name: "Rafael Brito",
      role: "Web Developer",
    },
    content: [
      {
        id: "11",
        type: "paragraph",
        content: "Fala galeraa",
      },
      {
        id: "12",
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evendo da Rocketseat",
      },
      {
        id: "13",
        type: "link",
        content: "#novoprojeto",
      },
      {
        id: "14",
        type: "link",
        content: "#novoprojeto",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: "2",
    author: {
      avatarUrl: "https://github.com/rodfrutuoso.png",
      name: "Rodrigo Frutuoso",
      role: "Web Developer",
    },
    content: [
      {
        id: "21",
        type: "paragraph",
        content: "Eu quero morrer!!",
      },
      {
        id: "22",
        type: "paragraph",
        content: "VIVA O COMUNISMO",
      },
      {
        id: "23",
        type: "link",
        content: "#URSS",
      },
      {
        id: "24",
        type: "link",
        content: "#socialismoVive",
      },
    ],
    publishedAt: new Date("2022-05-06 20:00:00"),
  },
  {
    id: "3",
    author: {
      avatarUrl: "https://github.com/JoaoVittorL.png",
      name: "João da Pilotinha",
      role: "Web Developer",
    },
    content: [
      {
        id: "31",
        type: "paragraph",
        content: "Ai mordidinhaaa",
      },
      {
        id: "32",
        type: "paragraph",
        content: "Aquele acordo que falei ainda está de pé!",
      },
      {
        id: "33",
        type: "link",
        content: "#laEle",
      },
      {
        id: "34",
        type: "link",
        content: "#sapequinha",
      },
    ],
    publishedAt: new Date("2022-05-04 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.length > 0 ? (
            posts.map((post, i) => (
              <Post
                id={i.toString()}
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          ) : (
            <p>Não há posts</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
