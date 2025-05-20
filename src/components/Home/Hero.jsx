import React from 'react'

const Hero = () => {
  return (
    <div className='h-[800px] flex justify-evenly items-center'>
      <div className='flex flex-col items-center'>
        {/* Container 1 */}
        <div className='text-center'>
          <h1>More Than Just a <span className='font-birthstone'>Game.</span></h1>
          <div className='max-w-xl mx-auto text-white p-4 font-light text-sm'>
            <span>Sports are a global phenomenon, a perfect blend of discipline, endurance, and indescribable joy. We understand that sports are more than just a game; they're a lifestyle, an inspiration, and a source of motivation for millions. From the grand arenas that witness fierce battles to your screen that captures every detail, we're committed to bringing the pulse of the sporting world directly to your fingertips.</span>
          </div>
          <button className='bg-slate-50 p-4 rounded-sm border border-slate-100 text-gray-700 hover:bg-transparent hover:text-white   transition duration-300 ease-in-out'>
            Read More
          </button>
        </div>
        {/* Container 2 */}
        <div>
          <div className='mt-28'>
            <h2 className='border-b-2'>Trending Today</h2>
            <div className='mt-14'>
              <h2>Cards Example</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero