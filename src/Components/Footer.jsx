import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Footer = () => {
  const totalpages=6;
  const{page, handlepage}=useContext(Appcontext);
  console.log('Current page:', page);
  console.log('Total pages:', totalpages);
  return (
    <div className='flex justify-center items-center w-full bg-slate-300 fixed bottom-0'>
      <div className='flex justify-between w-11/12 max-w-[950px] py-2'>
      <div className='flex gap-x-2'>
      {page >1 &&
        (<button
        className='rounded-md border px-4 py-1 border-blue-900'
         onClick={()=>handlepage(page-1)}>
          Previous
        </button>)
        }

        {page < totalpages &&
        (<button className='rounded-md border px-4 py-1 border-blue-900' onClick={()=>handlepage(page+1)}>
          Next
        </button>)
        }
      </div>
        <p className='font-bold text-sm mt-2' > Pages {page} of {totalpages}</p>
      </div>
    </div>
  )
}

export default Footer
