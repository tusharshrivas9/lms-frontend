import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { getAllCourses } from '../../Redux/slices/CourseSlice';
import Home from '../../components/Home';
import CourseCard from '../../components/CourseCard';


const CourseList = () => {

    const dispach = useDispatch()

    const {courseData} = useSelector((state)=>state.course)

    async function loadCourses(){
        await dispach(getAllCourses())
    }

    useEffect(()=>{
     loadCourses()
    },[])
  return (
    <Home>
      <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
        <h1 className='text-center text-3xl pl-20 flex flex-col gap-10 text-white'>
            Explore the course made by
            <span className='font-bolt text-yellow-500'>
                Industry experts
            </span>
            </h1>
            <div className="mb-10 flex flex-wrap gap-14">
                  {courseData?.map((element)=>{
                    return <CourseCard key={element._id} data={element}/>
                  })}
            </div>
        
      </div>
    </Home>
  )
}

export default CourseList
