import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/lucasdafonsecadepaula.png" />
          <div className={styles.authorInfo}>
            <strong>Meu nome</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="11 de maio às 08:13"
          dateTime={`${Date.now().toLocaleString()}`}
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsa
          dolore dolores doloremque dicta expedita voluptatem debit
        </p>
        <p>
          <a href="#">Lorem ipsum dolor sit am</a>
        </p>
        <p style={{ display: "flex", gap: "6px" }}>
          <a href="#">#a</a>
          <a href="#">#b</a>
          <a href="#">#c</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <div className={styles.commentFormBtn}>
          <button type="submit">Comentar</button>
        </div>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
