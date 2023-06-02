import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

interface PostProps {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: "text" | "link";
    value: string;
  }[];
  publishedAt: Date;
}

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucasdafonsecadepaula.png",
      name: "Lucas da Fonseca de Paula",
      role: "Software Engineer",
    },
    content: [
      { type: "text", value: "Lorem ipsum dolor sit amet" },
      { type: "link", value: "Lorem ipsum dolor sit amet" },
    ],
    publishedAt: new Date(),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lucasdafonsecadepaula.png",
      name: "Lucas 2",
      role: "Software Engineer 2",
    },
    content: [
      { type: "text", value: "Lorem ipsum dolor sit amet 22" },
      { type: "link", value: "Lorem ipsum dolor sit amet 23" },
    ],
    publishedAt: new Date(),
  },
] as PostProps[];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
