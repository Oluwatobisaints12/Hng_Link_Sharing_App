"use client"
import React, { useState } from 'react'
import { Instrument_Sans } from 'next/font/google'

import Image from 'next/image'
import emailIcon from '../../public/ph_envelope-simple-fill.svg'
import passwordIcon from '../../public/ph_lock-key-fill.svg'

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value

        })
    }
const handleSubmit =()=>{

}
    return (
        <div className='mx-[32px] mt-[64px] md:w-full md:max-w-[476px]' >
            <h1 className='text-[#333333] text-[24px] font-bold'>Login</h1>
            <p className='text-[16px] font-normal text-[#737373] mt-[8px]'>Add your details below to get back into the app</p>
            <form className='mt-[40px]' onSubmit={handleSubmit}>
                <div className='relative'>
                    <label htmlFor="email" className='text-[12px] font-[normal]'>Email adddress</label>

                    <input
                    className='py-[12px] pl-[38px] rounded-[8px] border-[1px] border-[#D9D9D9] w-full'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder='e.g. alex@email.com'
                    />
                    <Image 
                    className='absolute left-[16px] top-[59%]'
                    src={emailIcon}
                    width={16}
                    height={16}
                    alt='input email icon'
                    />

                </div>
                <div className='relative mt-[24px]'>
                    <label htmlFor="Password" className='text-[12px] font-[normal]'>Password</label>
                    <br/>
                     <Image
                       className='absolute left-[16px] top-[55%]'

                     src={passwordIcon}
                     width={16}
                     height={16}
                     alt='password input icon'
                     />

                    <input
                                        className='py-[12px] pl-[38px] rounded-[8px] border-[1px] border-[#D9D9D9] w-full'

                        name='password'
                        id='Password'
                        value={formData.password}
                        onChange={handleInputChange}
                        type="password"
                        placeholder='Enter your email'
                    />
                </div>
            </form>
           <div className='flex flex-col mt-[24px] items-center '>
           <button type='submit' className='py-[11px] mt-[24px] px-[24px] bg-[#633CFF] rounded-[8px] w-full text-[white] text-[16px] font-semibold cursor-'>Login</button>
           <div className='flex items-center md:flex flex-row md:items-center'>
           <p className='flex items-center flex-col text-[16px] font-normal mt-[24px] text-[#737373] md:flex md:flex-row'>Don`t have an account? <br/> <span className='text-[16px] font-normal text-[#633CFF]'>Create account?</span></p>
           
           </div>
           </div>

        </div>
    )
}

export default LoginPage
