import React from 'react'
import user from "./img/user2.png"
import right from "./img/right.png"
import left from "./img/left.png"

const Change = ({img, title, job, paragraph, dataChange}) => {
  return (
    <>
        <center>
            <div className="flex mx-10 flex-col w-[80% sm:w-[70%] md:w-[60%] lg:w-[50%] justify-center items-center mt-10 bg-slate-200 p-10 shadow-lg">
                <div>
                    <img src={img} alt="" className='h-[150px]'/>
                </div> 
                <div className='flex flex-col gap-3 pt-3'>
                    <h1 className='text-3xl font-semibold'>{title}</h1>
                    <p className='text-blue-500'>{job}</p>
                    <p className='text-slate-400'>{paragraph}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-5 mt-10 items-center justify-center">
                        <img src={left} alt="" className='cursor-pointer hover-eff transition-all duration-300'  onClick={dataChange}/>
                        <img src={right} alt="" className='cursor-pointer hover-eff transition-all duration-300' onClick={dataChange} />
                </div>
                <div>
                    <button onClick={dataChange} className='px-5 py-2 bg-cyan-500 border border-cyan-500 mt-5 transition-all duration-300 rounded-md cursor-pointer hover-eff hover:bg-transparent hover:text-black text-white'>surprise me</button>
                </div>
                </div>
                
            </div>
        </center>
    </>
  )
}

export default Change