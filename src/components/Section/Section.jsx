import { Component } from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    return (
      <section className={styles.feedback}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </section>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string,
};
