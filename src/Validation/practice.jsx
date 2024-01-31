import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup";
import './style.css'
const Practice = () => {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
        },
        validationSchema:yup.object({
        name:yup.string().min(2,"name must have 2 characters").required(),
        email:yup.string().email().required("email must have filled"),
        password:yup.string().min(6,"password must have 6 characters").required()
        }),
        onSubmit:(values)=>{
            console.log(values)
        }

    })
   

  return (
    <div>
        <form className='myforms' onSubmit={formik.handleSubmit}>
            <h1 className='forms'>Submit Form</h1>
            <div className='mydiv'>
                <label className='inputTitle' htmlFor="name">Name :</label><br />

                <div className='inputDiv'>
                <input  type="text" name='name' value={formik.values.name} onChange={formik.handleChange}/><br />
         {formik.touched.name && <span className='bolds' style={{color:"red"}}>{formik.errors.name}</span>}
                </div>
             
            </div>
            <div className='mydiv'>
                <label className='inputTitle' htmlFor="email">Email :</label><br />
               <div className='inputDiv'>
               <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange}/><br />
                {formik.touched.email && <span style={{color:"red"}}>{formik.errors.email}</span>}
                </div>
            </div> 

            <div className='mydiv'>
                <label className='inputTitle' htmlFor="password">Password :</label><br />
               <div className='inputDiv'>
               <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange}/><br />
                {formik.touched.password && <span style={{color:"red"}}>{formik.errors.password}</span>}
                </div>
            </div> 
             

            
            <button className='btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Practice