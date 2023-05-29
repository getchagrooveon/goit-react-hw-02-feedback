import { Component } from 'react';
import styles from './FeedbackOptions.module.css';
export class FeedbackOptions extends Component {
  render() {
    const props = this.props;
    const propsKeys = Object.keys(props.options);
    return (
      <div className={styles.buttonContainer}>
        {propsKeys.map(element => {
          return (
            <button
              key={element}
              className={styles.button}
              onClick={props.onLeaveFeedback}
            >
              {element}
            </button>
          );
        })}
      </div>
    );
  }
}