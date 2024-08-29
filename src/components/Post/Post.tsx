
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { PostProps } from "../types/Post/Post";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import { dateFormatToNow, dateFormattPublished } from "../../utils/format-date";
import { Comment as CommentProp } from "../types/Comment/Comment";

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<Array<CommentProp>>([
    {
      id: "41",
      author: {
        avatarUrl: "https://github.com/rafael3007.png",
        name: "Rafael Brito",

      },
      content: "comentário 1",
      publishedAt: new Date(),
    },
    {
      id: "42",
      author: {
        avatarUrl: "https://github.com/rodfrutuoso.png",
        name: "Rodriguinho",
      },
      content: "comentário 2",
      publishedAt: new Date(),
    },
    {
      id: "43",
      author: {
        avatarUrl: "https://github.com/JoaoVittorL.png",
        name: "Joãozinho",
      },
      content: "comentário 3",
      publishedAt: new Date(),
    },
  ]);

  const [newComment, setNewComment] = useState({
    id: "5" + comments.length.toString(),
    author: {
      avatarUrl: "https://github.com/rafael3007.png",
      name: "Rafael Brito",
    },
    content: "",
    publishedAt: new Date(),
  });

  const publishedDateFormatted = dateFormattPublished(publishedAt);

  const publishedDateRelativeToNow = dateFormatToNow(publishedAt);

  const isNewCommentEmpty = newComment.content === "";

  function handleRemoveComment(id: number) {
    const commentsWithoutDeletedOne = comments.filter(
      (_, index) => index != id
    );
    setComments(commentsWithoutDeletedOne);
  }

  function handleAddComment(event: FormEvent) {
    event.preventDefault()
    const updateNewComment: CommentProp = {
      id: "9" + comments.length.toString(),
      author: {
        avatarUrl: "https://github.com/rafael3007.png",
        name: "Rafael Brito",
      },
      content: "",
      publishedAt: new Date(),
    };
    setComments([...comments, newComment]);
    setNewComment(updateNewComment);
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const NewComment: CommentProp = {
      id: "5" + comments.length.toString(),
      author: {
        avatarUrl: "https://github.com/rafael3007.png",
        name: "Rafael Brito",
      },
      content: event.target.value,
      publishedAt: new Date(),
    };

    event.target.setCustomValidity("");
    setNewComment(NewComment);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Por favor, preencha o campo de comentário");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((row) => {
          if (row.type === "paragraph") {
            return <p key={row.id}>{row.content}</p>;
          } else {
            return (
              <a key={row.id} href={row.link ?? ""}>
                {row.content}
              </a>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}  onSubmit={handleAddComment}>
        <strong>Deixe seu feddback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newComment.content}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button
            type="submit"
            onClick={handleAddComment}
            onKeyDown={handleAddComment}
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.length > 0 ? (
          comments.map((comment, i) => (
            <Comment
              key={comment.id}
              index={i}
              publishedAt={comment.publishedAt}
              comment={comment.content}
              author={comment.author}
              onRemoveComment={handleRemoveComment}
            />
          ))
        ) : (
          <p>Ainda não há comentários</p>
        )}
      </div>
    </article>
  );
}
