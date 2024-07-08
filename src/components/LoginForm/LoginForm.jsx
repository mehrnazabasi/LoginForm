import React from 'react'
import './loginform.css'
export const LoginForm = () => {
  return (
    <div>
      <section className='w-100 vh-100 d-flex justify-content-center align-items-center' >     
        <div className='form-body w-50 h-auto'>
          <div className='title-form mt-5 text-center'>
            <h3 className='fs-5 fw-normal'>
              برای ثبت نام مشخصات خود را وارد نمایید و سپس بر روی دکمه ورود کلیک کنید.
            </h3>
          </div>
          <form className='forms w-100 h-auto'>
            <div>
              <label className='m-3' htmlFor="inputName">
                <p className='fs-5'>
                  نام و نام خانوادگی
                </p>
              <input type="name" id='name' onChange={(e) => setName(e.target.value)} value={name}/>
              </label>
            </div>

            <div>
              <label className='m-3' htmlFor="inputEmail">
                <p className='fs-5'>
                  ایمیل
                </p>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
              </label>
            </div>

            <div>
              <label className='m-3' htmlFor="inputPassword">
                <p className='fs-5'>
                  پسورد
                </p>
                <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
              </label>
            </div>
          </form>

          <div className='submit w-100 h-auto text-center m-2'>
           <button type="button" class="btn btn-secondary w-25 fs-5" onClick={submit}>
            انجام شد
           </button>
          </div>

          <div>
            {
              validateMessage !== '' ?
              <div class="alert alert-secondary" role="alert">
                {validateMessage}
              </div>
              :
              ''
            }
          </div>

        </div>
      </section>
    </div>
  )
}
