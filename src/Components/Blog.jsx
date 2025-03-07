import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext';
import Spinner from './Spinner';


const Blog = () => {
  const {posts,loading}=useContext(Appcontext);
  return (
    <div className='w-11/12 max-w-[950px]  py-3 flex flex-col gap-y-7 mt-[40px] mb-[50px]  justify-center items-center'>
      {
        loading ?
         (<Spinner/>):
         (
          posts.length===0?(<div><p>No post found</p></div>):
          (posts.map((posts) => (
            <div key={posts.id}>
              <p className='font-bold text-md'>{posts.title}</p>
              <p className='text-[12px]'>by<span className='italic'>{posts.author}</span>on <span className='underline font-bold'>{posts.category}</span></p>
              <p className='text-[12px]'>Posted On {posts.date}</p>
              <p className='mt-[10px] text-[15px]'>{posts.content}</p>

              <div>
              {posts.tags.map((tag, index) => {
                return <span key={index}
                className='underline text-blue-700 font-bold text-[12px]'
                >{`#${tag}`}</span>;
                })}
              </div>

            </div>
          )))
        )
      }
    </div>
  )
}

export default Blog
