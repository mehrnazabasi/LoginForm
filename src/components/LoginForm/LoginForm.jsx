import React, { useState } from 'react'
export const LoginForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validateMessage, setValidateMessage] = useState('')
  
  const [user, setUser] = useState(null)
  const submit = () => {
    if(name === '' || email === '' || password === ''){
      setValidateMessage('لطفا مشخصات را کامل وارد نمایید')
    } else {
      setName('')
      setEmail('')
      setPassword('') 
      setUser({
        name: name,
        email: email,
        password: password
      })
    }
  }
  return (
    <div>
      <section className='w-100 d-flex justify-content-center align-items-center'>     
        <div className='card form-body w-50 h-auto p-4'>
          <div className='title-form mt-5 text-center'>
            <h3 className='fs-5 fw-normal'>
              برای ثبت نام مشخصات خود را وارد نمایید و سپس بر روی دکمه ثبت نام کلیک کنید.
            </h3>
          </div>
          <form className='forms w-100 h-auto'>

            <div className="mb-3">
              <label htmlFor="name" className="form-label fs-5">
                نام و نام خانوادگی
              </label>
              <input type="text" id='name' onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label fs-5">
                ایمیل
              </label>
              <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fs-5">
                رمز عبور
              </label>
              <input type="password" id='name' onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" />
            </div>
          </form>

          <div className='submit w-100 h-auto text-center m-2'>
            <button type="button" className='btn btn-primary fs-5 w-25' onClick={submit}>
               ثبت نام
            </button>
          </div>

          <div className='text-center mt-4'>
            {
              validateMessage !== '' ?
              <div className="alert alert-danger" role="alert">
                {validateMessage}
              </div>
              :
              ''
            }
          </div>

        </div>
      </section>


      {
        user != null ?
        <div className='w-50 row justify-content-center mt-4 mb-5 mx-auto'>
        
          <div className="card px-0">
            <div className="card-header fs-5 text-center">
              اطلاعات کاربر ثبت نام شده
            </div>
            
            <div className='card-body'>
              <p className='card-name fs-5 list-group-item m-0'>
                نام و نام خانوادگی:
                {
                  user.name
                }
              </p>
              <p className='card-text fs-5 list-group-item m-0'>
                ایمیل: 
                {
                  user.email
                }
              </p>
              <p className='card-password fs-5 list-group-item m-0'>
                رمز عبور:
                {
                  user.password
                }
              </p>
            </div>
          </div>
        </div>
        :
        ''
      }
    </div>
  )
}
