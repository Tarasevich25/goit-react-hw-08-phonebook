import { useDispatch } from 'react-redux';

import css from './RegistForm.module.css';
import { register } from 'redux/auth/operations';

const RegistForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          minLength={3}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          minLength={6}
          required
          placeholder="Current password"
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistForm;