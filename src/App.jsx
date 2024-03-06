import {Header} from "./components/Header.jsx";
import {Post} from "./components/Post.jsx";

import './global.css';
import styles from './App.module.css';
import {Sidebar} from "./components/Sidebar.jsx";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIi7ThyraXaOryx8wM6KbudlEeuVUHLuElT5dyzFIxgfePM=s576-c-no',
            name: 'Matheus Moura',
            role: 'Web Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala galera, 🤙🏻' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-05-11 08:00:44'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala galera, 🤙🏻' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-05-11 08:00:44'),
    }
]
export function App() {
    return (
        <div>
            <Header></Header>

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}