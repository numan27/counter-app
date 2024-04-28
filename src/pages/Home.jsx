import { useEffect, useRef, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import AppLayout from '../components/Layout/AppLayout'
import { FiMinus, FiPlus } from 'react-icons/fi';
import { RxReset } from 'react-icons/rx';

const Home = () => {

  const [count, setCount] = useState(0);
  const counterRef = useRef(null)
  const [showBottomToTop, setShowBottomToTop] = useState(false);

  useEffect(() => {
    const handleToScroll = () => {
      setShowBottomToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleToScroll)
  }, []);

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const reset = () => {
    setCount(0)
  }
  const ClickToCounter = () => {
    counterRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const BottomToTop = () => {
    window.scrollTo({ top: "0px", behavior: 'smooth' })
  }



  return (
    <AppLayout>
      <div className="min-h-screen banner relative flex items-center justify-center">
        <div className="z-30 text-center w-full md:w-4/6 px-2 md:px-0">
          <h1 className='text-white text-lg md:text-2xl lg:text-5xl font-medium '>Count effortlessly with our intuitive Counter App. Simple, efficient, and user-friendly counting at your fingertips.</h1>
          <button onClick={ClickToCounter} className='bg-orange-600 text-white px-16 py-4 text-xl rounded uppercase mt-4'>
            Get started
          </button>
        </div>
        <div className="absolute inset-0 bg-gray-800 opacity-50 z-10"></div>
      </div>

      <div ref={counterRef} className='counter-section min-h-screen text-center pt-24'>
        <p>Use the Counter App to effortlessly keep track of numbers, scores, and counts. It's your go-to tool for accurate and efficient counting, making tasks a breeze with its user-friendly interface.</p>

        <div className='border-orange-600 border-2 rounded-md h-32 w-96 mx-auto my-8 text-2xl flex items-center justify-center text-green-600'>
          Count: <span className='text-4xl ms-2'> {count}</span>
        </div>

        <div className='flex gap-3 justify-center mt-4'>
          <button onClick={handleDecrement} className='bg-red-500 px-12 py-4 rounded-md flex items-center gap-3 text-white'>
            <FiMinus size="24" />
            Decrement</button>
          <button onClick={handleIncrement} className='bg-green-500 px-12 py-4 rounded-md flex items-center gap-3 text-white'> <FiPlus size="24" /> Increment</button>
        </div>

        <div className='flex justify-center'>
          <button onClick={reset} className='bg-blue-500 px-16 py-4 rounded-md text-white mt-8 flex items-center gap-3'>
            <RxReset size="24" />
            Reset</button>
        </div>


      </div>

      {showBottomToTop && (
        <button onClick={BottomToTop} className='bg-orange-600 p-4 w-16 h-16 rounded-md flex items-center justify-center fixed bottom-10 right-2 text-white'>
          <FaArrowUp size="24" color="#fff" /></button>
      )}
    </AppLayout>
  )
}

export default Home