import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";
import {useState} from "react";

export function Comment({ content, onDeleteComment }) {

    const [ likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://lh3.googleusercontent.com/a/ACg8ocIi7ThyraXaOryx8wM6KbudlEeuVUHLuElT5dyzFIxgfePM=s576-c-no"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Moura</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:00:44">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário" onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}