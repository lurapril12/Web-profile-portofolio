import React from 'react';
import Image from 'next/image';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';


const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>

        <div className='flex justify-center items-center'>
            <ul className='space-y-4'>
                <li className='flex items-center'>
                    <Image src={phone} alt="phone" className='h-[110px] w-auto mr-6' />
                    <p className='text-xl'>+62 857 7792 9036</p>
                </li>
                <li className='flex items-center'>
                    <Image src={mail} alt="mail" className='h-[110px] w-auto mr-6' />
                    <p className='text-xl'>luriaprilia8@gmail.com</p>
                </li>
            </ul>
        </div>

        <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
            <h2 className='text-4xl font-bold'>Let&apos;s Connect</h2>
            <p className='text-white/70 mt-4'>I am open to new opportunities. Connect with me via phone or email</p>
            <form className='space-y-4'action="https://getform.io/f/adrnglra" method="POST">
                <div className='grid md:grid-cols-2 gap-4'>
                    <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus-ring:2 focus:ring-orange-400' placeholder='First Name'/>
                    <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus-ring:2 focus:ring-orange-400' placeholder='Last Name'/>
                    <input type='email' name='emial' className='bg-black/70 rounded-xl p-3 focus:outline-none focus-ring:2 focus:ring-orange-400' placeholder='Email'/>
                    <input type='phone' name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus-ring:2 focus:ring-orange-400' placeholder='Phone'/>
                </div>
                <textarea className='w-full bg-black/70 rounded-xl p-3 focus:outline-none focus-ring:2 focus:ring-orange-400' placeholder='Message' />
                <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-lg'>Send</button>
            </form>
        </div>

    </div>
  )
}

export default Contact
