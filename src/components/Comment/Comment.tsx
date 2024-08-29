import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";
import { dateFormatToNow, dateFormattPublished } from "../../utils/format-date";

export function Comment({
  index,
  publishedAt,
  comment,
  author,
  onRemoveComment,
}) {
  const [likeCount, setlikeCount] = useState(0);

  const publishedDateFormatted = dateFormattPublished(publishedAt);

  const publishedDateRelativeToNow = dateFormatToNow(publishedAt);

  function handleLikeComment() {
    setlikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button
              title="Deletar comentário"
              onClick={() => onRemoveComment(index)}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
