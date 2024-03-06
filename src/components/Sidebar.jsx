import styles from './Sidebar.module.css';
import {PencilLine} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1615457938971-3ab61c1c0d57?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar
                    src="https://lh3.googleusercontent.com/a/ACg8ocIi7ThyraXaOryx8wM6KbudlEeuVUHLuElT5dyzFIxgfePM=s576-c-no"
                />
                <strong>Matheus Moura</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edite seu perfil
                </a>
            </footer>
        </aside>
    );
}