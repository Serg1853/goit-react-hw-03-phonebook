
import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.wrapper}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            required
            onChange={this.handleChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            required
            onChange={this.handleChange}
            value={this.state.number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
        </label>
        <button type="submit" className={css.btn}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

