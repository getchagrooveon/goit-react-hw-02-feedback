import { Component } from 'react';
import styles from './Statistics.module.css';
import { Notification } from '../Notification/Notification';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    return (
      <>
        <h2 className={styles.stats}>Statistics</h2>
        {this.props.positivePercentage === undefined ? (
          <Notification message={'There is no feedback yet'} />
        ) : (
          <>
            <span className={styles.results}>Good {this.props.good}</span>
            <span className={styles.results}>Neutral {this.props.neutral}</span>
            <span className={styles.results}>Bad {this.props.bad}</span>
            <span className={styles.results}>Total {this.props.total}</span>
            <span className={styles.results}>
              Positive feedback {this.props.positivePercentage}
            </span>
          </>
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
