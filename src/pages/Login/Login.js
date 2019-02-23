// @flow

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Header, Card, InputField } from '../../components/common';

type Props = {
  classes: Object,
};

type State = {};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Le champ est requis'),
  password: Yup.string().required('Le champ est requis'),
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
        <Card>
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
                  <InputField
                    id="email"
                    placeholder="Email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                    error={errors.email}
                    touched={touched.email}
                  />
                  <InputField
                    id="password"
                    placeholder="Mot de passe"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? 'text-input error' : 'text-input'
                    }
                    error={errors.password}
                    touched={touched.password}
                  />
                  <button type="submit" disabled={isSubmitting}>
                    Se Connecter
                  </button>
                </form>
              );
            }}
          </Formik>
        </Card>
      </div>
    );
  }
}

const styles = {};

export default injectSheet(styles)(Login);
