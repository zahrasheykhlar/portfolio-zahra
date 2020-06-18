import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/PortInput';

const validateInputs = (values) => {
    const errors = {};

   // Object.keys(values).forEach((key)=>{
      Object.entries(values).forEach(([key, value])=>{
      if(!values[key]){
      errors[key] = `Field ${key} is required!`
      }
    });
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
            <Field type="text" 
                   name="title" 
                   label="Title"
                   component={PortInput}/>
            <Field type="text" 
                   name="company" 
                   label="Company"
                   component={PortInput}/>
            <Field type="text" 
                   name="location"
                   label="Location"
                   component={PortInput}/>
            <Field type="text" 
                   name="position"
                   label="Position" 
                   component={PortInput}/>
            <Field type="textarea" 
                   name="description" 
                   label="Description"
                   component={PortInput}/>
            <Field type="text" 
                   name="startDate"
                   label="StartDate"
                   component={PortInput}/>
            <Field type="text" 
                   name="endDate"
                   label="EndDate"
                   component={PortInput}/>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;