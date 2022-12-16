import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/lucasdafonsecadepaula.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas da Fonseca</strong>
              <time
                title="11 de maio às 08:13"
                dateTime={`${Date.now().toLocaleString()}`}
              >
                Publicado há 1h
              </time>
            </div>

            <button title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito boa aa, parabens!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
