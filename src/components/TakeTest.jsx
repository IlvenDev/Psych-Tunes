import React from 'react'

const Button = () => (
    <button 
        type='button' 
        className=' border-slate-200 items-center justify-center bg-green-700 h-64 w-64 rounded-full font-semibold text-white text-xl'
        //onClick={}
        >
        Take the test
    </button>
);

const TakeTest = () => {
  return (
    <section className=' w-full h-[520px] bg-slate-600 flex justify-center items-center gap-16'>
        <div className=' w-80 h-64 justify-self-end'>
            <h1 className='font-normal text-2xl text-slate-100'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam mattis ultrices pretium. Donec sodales,
                urna et sollicitudin vehicula, odio dolor congue quam, 
            </h1>   
        </div>
        <div className=' justify-items-center place-items-center '>
            <Button />
        </div>

    </section>
  )
}

export default TakeTest