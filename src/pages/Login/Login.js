// @flow

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, InputField, Button, Page } from '../../components/common';

type Props = {
  classes: Object,
};

type State = {};

Yup.setLocale({
  string: {
    email: `L'email est invalide`,
  },
});

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
    return (
      <Page>
        <Card>
          <div className={classes.formContainer}>
            <h2>Connexion</h2>
            <Formik
              initialValues={{ email: '', password: '' }}
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
                  <form className={classes.form} onSubmit={handleSubmit}>
                    <InputField
                      id="email"
                      placeholder="Email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      error={errors.password}
                      touched={touched.password}
                    />
                    <Button type="submit" disabled={isSubmitting || Object.keys(errors).length > 0}>
                      Se Connecter
                    </Button>
                  </form>
                );
              }}
            </Formik>
          </div>
        </Card>
      </Page>
    );
  }
}

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default injectSheet(styles)(Login);
