import { Header } from './components/Header';
import { Post } from '../src/components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author:  {avatar_url: "", name: "", role: ""}
// publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/80555245?v=4',
      name: 'Ruth Dantas',
      role: 'CTO @DevsEmTransicao',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-07 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/emersondevelops',
      name: 'Emerson Bezerra',
      role: 'CTO @DevsEmTransicao',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto do programa de treinamento em JAVA e SpringBoot. É um projeto que fiz no Alura. O nome do projeto é BackendHard 🚀🚀🚀🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-08 21:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
