import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  action: (formData: FormData) => void | Promise<void>;
}

export default function SearchBar({ action }: SearchBarProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        <form
          className={styles.form}
          action={async (formData: FormData) => {
            const query = formData.get("query")?.toString().trim() ?? "";
            if (!query) {
              toast.error("Please enter your search query.");
              return;
            }
            await action(formData);
          }}
        >
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
