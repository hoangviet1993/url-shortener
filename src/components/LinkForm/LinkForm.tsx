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
import * as RelinkService from '../../service/RelinkService';
import * as types from '../../types/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridGap: theme.spacing(3),
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
    errorMessage: {
      color: 'hsl(0, 87%, 67%)',
      fontSize: '13px',
      fontStyle: 'italic',
      lineHeight: '1.75',
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
      display: 'block',
      fontSize: '18px',
      margin: 'auto',
      overflow: 'hidden',
      padding: '12px',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
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
    padding: '6px 30px',
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

const LinkForm = (props: types.ILinkFormProp) => {
  const classes = useStyles();
  const urlInputInitialValues: types.IFormValues = {urlInput: ''};
  return (
    <div>
      <Hidden smDown>
        <Formik
          initialValues={urlInputInitialValues}
          onSubmit={(values, actions) => {
            if (!LocalStorageService.isUrlInLocalStorage(
              values.urlInput)) {
              RelinkService.createLinkHashID(values.urlInput)
                .then((data) => {
                  const newLink: types.ILink = {
                    hashID: data.hashid,
                    url: data.url,
                  };
                  LocalStorageService.saveNewLinkToLocalStorage(
                    newLink, actions);
                  LocalStorageService.saveToLocalStorage(
                    data.url, data.hashid, actions);
                  const shortlyLinks = localStorage.getItem(
                    constants.serializedShortlyKey);
                  props.setshortlyLinks(shortlyLinks);
                })
                .catch((reLinkError) => {
                  if (reLinkError.response.data) {
                    actions.setFieldError(
                      constants.urlFieldInputName,
                      reLinkError.response.data.url);
                  } else {
                    throw reLinkError;
                  }
                });
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
                    aria-label="URL input field"
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
              if (!LocalStorageService.isUrlInLocalStorage(
                values.urlInput)) {
                RelinkService.createLinkHashID(values.urlInput)
                  .then((data) => {
                    const newLink: types.ILink = {
                      hashID: data.hashid,
                      url: data.url,
                    };
                    LocalStorageService.saveNewLinkToLocalStorage(
                      newLink, actions);
                    LocalStorageService.saveToLocalStorage(
                      data.url, data.hashid, actions);
                    const shortlyLinks = localStorage.getItem(
                      constants.serializedShortlyKey);
                    props.setshortlyLinks(shortlyLinks);
                  })
                  .catch((reLinkError) => {
                    if (reLinkError.response.data) {
                      actions.setFieldError(
                        constants.urlFieldInputName,
                        reLinkError.response.data.url);
                    } else {
                      throw reLinkError;
                    }
                  });
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
                    aria-label="URL input field"
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
