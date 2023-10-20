import { 
  useOthers,
  useUpdateMyPresence,
  useStorage,
  useMutation
} from "../../../liveblocks.config";
import { useState } from "react";

import styles from '../page.module.css';

function WhoIsHere() {
  const userCount = useOthers((others) => others.length);

  return (
    <div className={styles.who_is_here}>There are {userCount} other users online</div>
  );
};

function SomeoneIsTyping() {
  const someoneIsTyping = useOthers((others) =>
    others.some((other) => other.presence.isTyping)
  );

  return (
    <div className={styles.someone_is_typing}>
      {someoneIsTyping ? "Someone is typing..." : ""}
    </div>
  );
}

export function TodoList() {

  const [draft, setDraft] = useState("");
  const updateMyPresence = useUpdateMyPresence();

  const todos = useStorage((root) => root.todos);

  const addTodo = useMutation(({ storage }, text) => {
    storage.get("todos").push({ text })
  }, []);

  const deleteTodo = useMutation(({ storage }, index) => {
    storage.get("todos").delete(index);
  }, []);

  return (
    <div>
      <WhoIsHere />
      <input
        className={styles.liveblocksInput}
        type="text"
        placeholder="What needs to be done?"
        value={draft}
        onChange={(e) => {
          setDraft(e.target.value);
          updateMyPresence({ isTyping: true });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateMyPresence({ isTyping: false });
            addTodo(draft);
            setDraft("");
          }
        }}
        onBlur={() => updateMyPresence({ isTyping: false })}
      />
      <SomeoneIsTyping />
      {todos.map((todo, index) => {
          return (
            <div key={index} className={styles.todo_container}>
              <div className={styles.todo}>{todo.text}</div>
              <button
                className={styles.delete_button}
                onClick={() => deleteTodo(index)}
              >
                ✕
              </button>
            </div>
          );
        })
      }
    </div>
  );
};