import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';

const validateInputs = (validate) => {
    const errors = {};
        // if (!values.email) {
        //  errors.email = 'Required';
        //} else if (
        //  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //) {
        //  errors.email = 'Invalid email address';
        //}
        return errors;

}

const INITIAL_VALUES = { title: '',
                         company: '',
                         location: '',
                         position:'', 
                         description:'', 
                         startDate:'', 
                         endDate:'' };
const PortfolioCreateForm = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormGroup>
            <Label>title</Label>
            <Field className="form-control" type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>company</Label>
            <Field className="form-control" type="text" name="company" />
            <ErrorMessage name="company" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>location</Label>
            <Field className="form-control" type="text" name="location" />
            <ErrorMessage name="location" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>position</Label>
            <Field className="form-control" type="text" name="position" />
            <ErrorMessage name="position" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>description</Label>
            <Field className="form-control" type="textarea" name="description" component="textarea" />
            <ErrorMessage name="description" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>startDate</Label>
            <Field className="form-control" type="text" name="startDate" />
            <ErrorMessage name="startDate" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>endDate</Label>
            <Field className="form-control" type="text" name="endDate" />
            <ErrorMessage name="endDate" component="div" />
          </FormGroup>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;