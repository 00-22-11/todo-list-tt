import { FC, useState } from 'react';

import { Headings } from './components/Headings';
import { InputForm } from './components/InputForm';
import { TodoListItem } from './components/TodoListItem';
import { Modal } from './components/Modal';

import { TodoItem } from './types';
import { EMPTY_STRING } from './config';

import styles from './App.module.scss';

const defaultTodo = {
  id: 0,
  title: EMPTY_STRING,
  description: EMPTY_STRING,
  status: false,
};

export const App: FC = () => {
  const [todos, setTodos] = useState<Array<TodoItem>>([]);
  const [modalProps, setModalProps] = useState(defaultTodo);
  const [activeModal, setActiveModal] = useState(false);

  const addTodo = (title: string, description: string) =>
    setTodos((prev) => [
      ...prev,
      {
        id: todos.length,
        title,
        description,
        status: false,
      },
    ]);

  const handleToggle = (id: number) => {
    setTodos((prev) => [
      ...prev.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : { ...todo }
      ),
    ]);
  };

  const handleClick = (item: TodoItem) => {
    setModalProps(item);
    setActiveModal(true);
  };

  return (
    <>
      <div className={styles.root}>
        <InputForm addTodo={addTodo} />
        <Headings />
        <div className={styles.todos}>
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todoItem={todo}
              handleToggle={handleToggle}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>

      <Modal
        modalProps={modalProps}
        active={activeModal}
        setActive={setActiveModal}
      />
    </>
  );
};
