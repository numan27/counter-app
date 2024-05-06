import React from 'react'
import AppLayout from '../components/Layout/AppLayout'

const Contact = () => {
  return (
    <AppLayout>
      <div className='bg-slate-200 flex items-center justify-center'>
        <div className="calculator bg-[#3a4452] pl-10 pr-10 mt-4 mb-4 rounded-lg">
          <form action="">
            <div className="display mb-4 mt-8 flex items-end justify-end">
              <input type="text" name='display' className='flex-1 outline-none text-right text-lg shadow-none bg-[#3a4452]' />
            </div>

            <div className='text-[#33ffd8]'>
              <input type="button" value="AC" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="DE" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="." className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="/" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
            </div>

            <div>
              <input type="button" value="7" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="8" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="9" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="*" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
            </div>

            <div>
              <input type="button" value="4" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="5" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="6" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="-" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
            </div>

            <div>
              <input type="button" value="1" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="2" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="3" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="+" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
            </div>

            <div>
              <input type="button" value="00" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="0" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
              <input type="button" value="=" className='border-0 outline-none w-16 h-16 rounded-2xl bg-transparent text-white text-2xl cursor-pointer m-2 operators' />
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  )
};

export default Contact