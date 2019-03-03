// @flow

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, InputField, Button, Page } from '../../components/common';

type Props = {
  classes: Object,
  simpleAction: () => any,
  login: ({ mail: string, password: string }) => Promise<any>,
  history: Object,
};

type State = {};

Yup.setLocale({
  string: {
    email: `L'email est invalide`,
  },
});

const validationSchema = Yup.object().shape({
  mail: Yup.string()
    //.email()
    .required('Le champ est requis'),
  password: Yup.string().required('Le champ est requis'),
});

class Login extends Component<Props, State> {
  submitForm = async (values: { mail: string, password: string }, actions: Object) => {
    this.props.simpleAction();
    try {
      await this.props.login(values);
      this.props.history.push('/');
    } catch (error) {
      actions.setFieldError('password', 'Identifiant ou mot de passe invalide');
      console.log(error);
    }
  };
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Page>
        <Card>
          <div className={classes.formContainer}>
            <h2>Connexion</h2>
            <Formik
              initialValues={{ mail: '', password: '' }}
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
                      id="mail"
                      placeholder="Email"
                      type="text"
                      value={values.mail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.mail}
                      touched={touched.mail}
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
