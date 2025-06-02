import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage } from '../redux/feature/gallery/GallerySlice';

function Pagination() {

    const currentPage = useSelector(state=>state.gallery.page)

    console.log(currentPage)

    const dispatch  = useDispatch();

    const handlePrvPage = ()=>{ 
        dispatch(prevPage())
    }
    const handleNextPage = ()=>{
        dispatch(nextPage())
    }

  return (
    <div>

        <div className='flex gap-2 items-center justify-center py-8 '>
        <button className='bg-blue-200 px-8 py-2 rounded-md font-bold' onClick={handlePrvPage}>Previous Page</button>
        <button className='bg-blue-200 px-8 py-2 rounded-md font-bold' onClick={handleNextPage}>Next Page</button>
        </div>
      
    </div>
  )
}

export default Pagination
