import React from 'react'
import { useForm,SubmitHandler  } from 'react-hook-form';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data);


  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input type='text' name='firstName'   {...register('firstName',{required:'First Name is required'})}/>
          <br/>
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <div>
          <label>Last Name</label>
          <input type='text' name='lastName' {...register('lastName',{required:'Last Name is required'})} />
          <br/>
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type='text' name='email' {...register('email',{required:'Email is required',pattern:{value:/[a-zA-Z][a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,message: 'Please enter a valid email'}})} />
          <br/>
          {errors.email &&<span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Contact No</label>
          <input type='text' name='mobile' {...register('mobile',{required:'Mobile number is required',minLength:{value:'10',message:'Minimum 10 Digit numbers'}})} />
          <br/>
          {errors.mobile && <span>{errors.mobile.message}</span>}
        </div>
        <div>
          <label>Age</label>
          <input type='number' name='age' {...register('age',{required:'Age number is required'})} />
          <br/>
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label>Gender</label>          
          <select name='gender' {...register('gender',{required:'Select Gender is required'})} >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br/>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <button>Submit</button>
      </form>
      </div>
  )
}

export default ContactForm