import { ChangeEvent, FC, FormEvent, useState } from 'react';

import {
  CREATE,
  DESCRIPTION,
  EMPTY_STRING,
  ENTER_DESC,
  ENTER_TITLE,
  FIELD_IS_EMPTY,
  TITLE,
} from '../../config';

import styles from './InputForm.module.scss';

interface Props {
  addTodo: (title: string, description: string) => void;
}

export const InputForm: FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>(EMPTY_STRING);
  const [description, setDescription] = useState<string>(EMPTY_STRING);

  const [titleFieldEmptyError, setTitleFieldEmptyError] = useState(false);
  const [descriptionFieldEmptyError, setDescriptionFieldEmptyError] =
    useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!title && !description) {
      setTitleFieldEmptyError(true);
      setDescriptionFieldEmptyError(true);

      return;
    } else if (!title) {
      setTitleFieldEmptyError(true);

      return;
    } else if (!description) {
      setDescriptionFieldEmptyError(true);

      return;
    }

    addTodo(title, description);

    setTitle(EMPTY_STRING);
    setDescription(EMPTY_STRING);
  };

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleFieldEmptyError(false);
    setTitle(event.target.value);
  };

  const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescriptionFieldEmptyError(false);
    setDescription(event.target.value);
  };

  const getInputClassName = (isError: boolean) =>
    isError ? styles.emptyError : EMPTY_STRING;

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <div className={styles.title}>
        {TITLE}:
        <input
          value={title}
          type="text"
          placeholder={ENTER_TITLE}
          onChange={(event) => handleTitle(event)}
          className={getInputClassName(titleFieldEmptyError)}
        />
        {titleFieldEmptyError && (
          <div className={styles.errorMessage}>{FIELD_IS_EMPTY}</div>
        )}
      </div>
      <div className={styles.description}>
        {DESCRIPTION}:
        <input
          value={description}
          type="text"
          placeholder={ENTER_DESC}
          onChange={(event) => handleDescription(event)}
          className={getInputClassName(descriptionFieldEmptyError)}
        />
        {descriptionFieldEmptyError && (
          <div className={styles.errorMessage}>{FIELD_IS_EMPTY}</div>
        )}
      </div>
      <button type="submit" className={styles.button}>
        {CREATE}
      </button>
    </form>
  );
};
