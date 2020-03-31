import {
  Button,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import isURL from 'validator/lib/isURL';
import * as constants from '../../constants/';
import * as LocalStorageService from '../../service/LocalStorageService/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridGap: theme.spacing(3),
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
    errorMessage: {
      color: 'hsl(0, 87%, 67%)',
      fontStyle: 'italic',
      paddingTop: '12px',
    },
    isInvalid: {
      '&::placeholder': {
        color: 'hsl(0, 87%, 67%)',
      },
      borderColor: 'hsl(0, 87%, 67%)',
    },
    linkInputContainerMobile: {
      paddingBottom: '15px',
    },
    linkInputTextField: {
      backgroundColor: 'white',
      borderRadius: '10px',
      boxSizing: 'border-box',
      fontSize: '18px',
      margin: 'auto',
      padding: '12px',
      width: '100%',
    },
  }),
);

const ShortenButton = withStyles({
  '@media (min-width: 960px)': {
    root: {
      minHeight: '49.1px',
    },
  },
  root: {
    '&:hover': {
      backgroundColor: '#9BE3E2',
    },
    backgroundColor: 'hsl(180, 66%, 49%)',
    borderRadius: '5px',
    color: 'white',
    fontSize: '18px',
    minWidth: '100%',
    padding: '6px 20px',
    textTransform: 'none',
    width: '100%',
  },
})(Button);


function validateUrl(value: string): string | null {
  let error = null;
  if (!value) {
    error = 'Please add a link.'
  } else {
    if (!isURL(value, { require_protocol: true })) {
      error = 'Please enter a valid URL. Example: http://www.linkname.com';
    }
  }
  return error;
}

const LinkForm = () => {
  const classes = useStyles();
  const urlInputInitialValues: constants.IFormValues = { urlInput: ''};
  return (
    <div>
      <Hidden smDown>
        <Formik
          initialValues={urlInputInitialValues}
          onSubmit={(values, actions) => {
            if (!LocalStorageService.loadHashIDFromLocalStorage(
              values.urlInput)) {
              LocalStorageService.saveUrlToLocalStorage(
                values.urlInput, actions);
            } else {
              actions.setFieldError(
                constants.urlFieldInputName, 'URL already shortened');
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Grid item md={9} lg={10}>
                  <Field
                    className={
                      classes.linkInputTextField + (
                        errors.urlInput && touched.urlInput ?
                          ` ${classes.isInvalid}` : ''
                      )
                    }
                    name={constants.urlFieldInputName}
                    type="text"
                    placeholder="Shorten a link here..."
                    validate={validateUrl}
                  />
                  <ErrorMessage
                    className={classes.errorMessage}
                    name={constants.urlFieldInputName}
                    component="div"
                  />
                </Grid>
                <Grid item md={"auto"}>
                  <ShortenButton
                    type="submit"
                  >
                    Shorten It!
                </ShortenButton>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Hidden>
      <Hidden mdUp>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Formik
            initialValues={urlInputInitialValues}
            onSubmit={(values, actions) => {
              if (!LocalStorageService.loadHashIDFromLocalStorage(
                values.urlInput)) {
                LocalStorageService.saveUrlToLocalStorage(
                  values.urlInput, actions);
              } else {
                actions.setFieldError(
                  constants.urlFieldInputName, 'URL already shortened');
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={classes.linkInputContainerMobile}>
                  <Field
                    className={
                      classes.linkInputTextField + (
                        errors.urlInput && touched.urlInput ?
                          ` ${classes.isInvalid}` : ''
                      )
                    }
                    name="urlInput"
                    type="text"
                    placeholder="Shorten a link here..."
                    validate={validateUrl}
                  />
                  <ErrorMessage
                    className={classes.errorMessage}
                    name="urlInput"
                    component="div"
                  />
                </div>
                <ShortenButton
                  type="submit"
                >
                  Shorten It!
                </ShortenButton>
              </Form>
            )}
          </Formik>
        </Grid>
      </Hidden>
    </div>
  )
};

export default LinkForm;
