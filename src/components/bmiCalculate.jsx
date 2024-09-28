import React, { useState } from 'react'

function BmiCalculate() {
  const [weight,setWeight] = useState("");
  const [height,setHeight] = useState("");
  const [bmi,setBmi] = useState("");
  const [message,setMessage] = useState("");
  const calcBmi = (e) => {
    e.preventDefault();
    if(weight === "" || height === ""){
      alert("Please enter your height and weight")
    }else{
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))
      if(bmi < 18.5){
        setMessage("You are underweight")
      }
      else if(bmi >= 18.5 && bmi <= 24.5){
        setMessage("You are healthy")
      }
      else{
        setMessage("You are overweight")
      }

    }
  }
  let reload = () => {
    window.location.reload()
  }
  return (
    <>
        <div className='w-full h-screen flex pt-10 items-center justify-center  bg-gradient-to-r from-purple-500 to-pink-500'>
          <div className='bg-white mx-auto rounded-md shadow-md w-[350px]'>
              <h1 className='font-semibold mt-4 text-xl text-center'>BMI Calculator</h1>
              <form onSubmit={calcBmi}>
                <div className='mt-3 px-6'>
                  <label className='block text-sm'>Weight (Kg)</label>
                  <input placeholder='Enter your weight' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className='py-1 mt-1 w-full px-1 bg-gray-200 border rounded-sm border-gray-300' />
                </div>

                <div className='mt-3 px-6'>
                  <label className='block text-sm'>Height (m)</label>
                  <input placeholder='Enter your height' type="number" value={height} onChange={(e) => setHeight(e.target.value)} className='py-1 mt-1 bg-gray-200 w-full px-1 border rounded-sm border-gray-300' />
                </div>
                <div className='mt-3 px-6'>
                  <button type='submit' className='w-full mb-2 bg-blue-600 text-white font-semibold rounded-sm py-1'>Calculate</button>
                  <button onClick={reload} className='w-full bg-gray-400 text-black font-semibold rounded-sm py-1'>Reload</button>
                </div>
                
              </form>
              <div className='my-3 text-center px-6'>
                <h3 className='text-base mt-2 font-bold'>Your BMI is:{bmi}</h3>
                <p className='font-semibold'>{message}</p>
              </div>
          </div>
        </div>
    </>
  )
}

export default BmiCalculate;