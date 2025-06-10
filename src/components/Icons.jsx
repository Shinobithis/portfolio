import React from 'react'

function Icons() {
  return (
    <div className='flex flex-row px-4 py-3 gap-4'>
        <a 
            href="https://www.linkedin.com/in/yassir-chakour-210865313/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className='h-8 border-r-2 pr-4 cursor-pointer hover:h-10 transition-all duration-300 ease-in-out'
                src="./linkedin.svg" 
                alt="Linkedin" 
            />
        </a>
        <a 
            href="https://github.com/Shinobithis" 
                        target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className='h-8 border-r-2 pr-4 cursor-pointer hover:h-10 transition-all duration-300 ease-in-out'
                src="./github.svg" 
                alt="Github"
            />
        </a>
        <a href="">
            <img
                className='h-8 cursor-pointer hover:h-10 transition-all duration-300 ease-in-out'
                src="./discord.svg" 
                alt="Discord" 
            />
        </a>
    </div>
  )
}

export default Icons