import styles from './Notification.module.css';
import { Component } from 'react';

export class Notification extends Component {
  render() {
    return <h2 className={styles.title}>{this.props.message}</h2>;
  }
}
