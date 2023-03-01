import { Dispatch, FC, SetStateAction } from 'react';

import { TodoItem } from '../../types';

import { CLOSE, DESCRIPTION, STATUS } from '../../config';

import styles from './Modal.module.scss';

interface Props {
  modalProps: TodoItem;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<Props> = ({ modalProps, active, setActive }) => {
  return (
    <>
      {active && (
        <div className={styles.root}>
          <div className={styles.title}>{modalProps.title}</div>
          <div className={styles.info}>
            <div className={styles.description}>
              {DESCRIPTION}: {modalProps.description}
            </div>
            <div className={styles.status}>
              {STATUS}:
              <input type="checkbox" checked={modalProps.status} />
            </div>
            <button
              type="button"
              onClick={() => setActive(false)}
              className={styles.button}
            >
              {CLOSE}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
