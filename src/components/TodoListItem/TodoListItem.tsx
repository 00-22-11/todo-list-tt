import { FC, MouseEvent } from 'react';

import { shortize } from '../../helpers';
import { TodoItem } from '../../types';

import styles from './TodoListItem.module.scss';

interface Props {
  todoItem: TodoItem;
  handleToggle: (id: number) => void;
  handleClick: (todoItem: TodoItem) => void;
}

export const TodoListItem: FC<Props> = ({
  todoItem,
  handleToggle,
  handleClick,
}) => {
  const { id, title, description, status } = todoItem;

  const handleCheckboxClick = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    handleToggle(id);
  };

  return (
    <button className={styles.root} onClick={() => handleClick(todoItem)}>
      <div className={styles.item}>{id}</div>
      <div className={styles.item}>{shortize(title)}</div>
      <div className={styles.item}>{shortize(description)}</div>
      <input
        type="checkbox"
        onClick={(event) => handleCheckboxClick(event)}
        checked={status}
        className={styles.item}
      />
    </button>
  );
};
