// @flow

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Header } from '../../components/common/Header';

type Props = {
  classes: Object,
};

type State = {};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Required'),
  password: Yup.string().required('No password provided.'),
});

class Login extends Component<Props, State> {
  submitForm = (values: { email: string, password: string }, actions: Object) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 500);
  };
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div className={classes.container}>
        <Header />
        <hr />
        <Formik
          initialValues={{ email: '' }}
          onSubmit={this.submitForm}
          validationSchema={validationSchema}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" style={{ display: 'block' }}>
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <label htmlFor="password" style={{ display: 'block' }}>
                  Mot de passe
                </label>
                <input
                  id="password"
                  placeholder="Mot de passe"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

const styles = {};

export default injectSheet(styles)(Login);
