import styles from './Statistics.module.css';
import { Notification } from '../Notification/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => {
  return (
    <>
      <h2 className={styles.stats}>{title}</h2>
      {positivePercentage === undefined ? (
        <Notification message={'There is no feedback yet'} />
      ) : (
        <>
          <span className={styles.results}>Good {good}</span>
          <span className={styles.results}>Neutral {neutral}</span>
          <span className={styles.results}>Bad {bad}</span>
          <span className={styles.results}>Total {total}</span>
          <span className={styles.results}>
            Positive feedback {positivePercentage}
          </span>
        </>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.node,
};
