import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="John Doe" content="Lorem ipsum dolor sit amet" />
        </main>
      </div>
    </div>
  );
}
