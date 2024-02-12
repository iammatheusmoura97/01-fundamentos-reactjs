import {Header} from "./components/Header.jsx";
import {Post} from "./Post.jsx";

import './global.css';
import styles from './App.module.css';
import {Sidebar} from "./components/Sidebar.jsx";
export function App() {
    return (
        <div>
            <Header></Header>

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    <Post title="Hello, React!" body="This is a simple React app."></Post>
                </main>
            </div>
        </div>
    )
}