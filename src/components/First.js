import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function First() {

   const validationSchema = Yup.object({
      firstname: Yup.string().required('The first name field is required'),
      lastname: Yup.string().required('The last name field is required'),
      country: Yup.string().required('Required'),
      subject: Yup.string().required('Required'),
   });

   const { handleBlur, handleChange, handleSubmit, values, errors, touched } = useFormik({
      initialValues: {
         firstname: '',
         lastname: '',
         country: 'australia',
         subject: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values, e) => {
         console.log('Form data', values);

         e.resetForm();
      },
   });

   return (
      <div className="container">
         <form onSubmit={handleSubmit} >
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" onChange={handleChange} onBlurCapture={handleBlur} value={values.firstname} placeholder="Your name.." />
            {touched.firstname && errors.firstname ? (
               <p className='error_p'>{errors.firstname}</p>
            ) : null}

            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" onChange={handleChange} onBlurCapture={handleBlur} value={values.lastname} placeholder="Your last name.." />
            {touched.lastname && errors.lastname ? (
               <p className='error_p'>{errors.lastname}</p>
            ) : null}

            <label>Country</label>
            <select id="country" name="country" onChange={handleChange} onBlurCapture={handleBlur} value={values.country}>
               <option value="australia">Australia</option>
               <option value="canada">Canada</option>
               <option value="usa">USA</option>
            </select>
            {touched.country && errors.country ? (
               <p className='error_p'>{errors.country}</p>
            ) : null}

            <label>Subject</label>
            <textarea id="subject" name="subject" onChange={handleChange} onBlurCapture={handleBlur} value={values.subject} placeholder="Write something.."></textarea>
            {touched.subject && errors.subject ? (
               <p className='error_p'>{errors.subject}</p>
            ) : null}


            <input type="submit" value="Submit" />
         </form>
      </div>
   );
}

export default First;
