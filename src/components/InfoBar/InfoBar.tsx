import { FC } from 'react';

import { DESCRIPTION, ID, STATUS, TITLE } from '../../config';

import styles from './InfoBar.module.scss';

export const InfoBar: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.heading}>{ID}</div>
      <div className={styles.heading}>{TITLE}</div>
      <div className={styles.heading}>{DESCRIPTION}</div>
      <div className={styles.heading}>{STATUS}</div>
    </div>
  );
};
