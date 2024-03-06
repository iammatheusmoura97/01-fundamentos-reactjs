import styles from './Post.module.css';
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";
import {format, formatDistanceToNow} from "date-fns";
import {ptBR} from "date-fns/locale/pt-BR";
import {useState} from "react";

export function Post({ author, content, publishedAt }) {
    const [ comments, setComments ] = useState(['Toppen']);
    const [ newCommentText, setNewCommentText ] = useState('');
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCrateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeleteOne = comments.filter(itemComment => {
            return itemComment !== commentToDelete
        });

        setComments(commentWithoutDeleteOne);
    }

    const isNewCommentTextEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder="Deixe um comentario"
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentTextEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}