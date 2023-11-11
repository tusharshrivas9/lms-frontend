import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewCourse } from '../../Redux/slices/CourseSlice'
import Home from '../../components/Home'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const CreateCourse = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [userInput,setUserInput] = useState({
        title:"",
        category:"",
        createdBy:"",
        description:"",
        thumbnail:null,
        previewImage:""
    })
     function handleImageUpload(e){
        e.preventDefault()
        const uploadedImage = e.target.files[0]
        if (uploadedImage) {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(uploadedImage)
            fileReader.addEventListener("load",function () {
                setUserInput({
                    ...useInput,
                    previewImage:this.result,
                    thumbnail:uploadedImage
                })
            })
        }
    }

    function handelUserInput(e) {
        const {name,value} = e.target;
        setUserInput({
            ...userInput,
            [name]:value
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault()
        if (!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy) {
            toast.error("All Fields Are Mandatory")
            return            
        }
        const response = await dispatch(createNewCourse(userInput))
        if (response?.payload?.success) {
            setUserInput({
        title:"",
        category:"",
        createdBy:"",
        description:"",
        thumbnail:null,
        previewImage:""

            })
            navigate("/course")
        }
    }
  return (
    <Home>
    <div className="flex items-center justify-center h-[100vh]">
      <form onSubmit={onFormSubmit}
      className='flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative' >

      <Link className = "absolute top-8 text-2xl link text-accent cursor-pointer ">
        <AiOutlineArrowLeft/>
      </Link>

      <h1 className='text-center text-2xl font-bold'>
        Create New Course
      </h1>
      <main className='grid grid-cols-2 gap-x-10'>
      <div className="gap-y-6">
        <div>
            <label htmlFor="image_uploader" className='cursor_pointer'>
                {userInput.previewImage?(
                    <img src={userInput.previewImage} className='w-full h-44 m-auto border' alt="" />
                ):(
                    <div className='w-full h-44 m-auto flex items-center justify-center border'>
                        <h1 className='font-bold text-lg'>Upload your course thumbnail</h1>
                    </div>
                )}
            </label>
            <input type="files" className='hidden' id='image_uploads' accept='.jpg, .png , .jpeg' name='image_uploads' onChange={handleImageUpload} />
        </div>
        <div className="flex flex-col gap-1">
        <label htmlFor="title" className='text-lg font-semibold'>
            Course title
        </label>
        <input type="text" required name='title' placeholder='Enter course title' className='bg-transparent px-2 py-1 border' value={userInput.title} onChange={handelUserInput}/>
        </div>
      </div>

      <div className="flex flex-col gap-1">
      <label htmlFor="createdBy" className='text-lg font-semibold'>
            Course instructor
        </label>
        <input type="text" required name='createdBy' placeholder='Enter course instructor' className='bg-transparent px-2 py-1 border' value={userInput.createdBy} onChange={handelUserInput}/>
      </div>
      <div className="flex flex-col gap-1">
      <label htmlFor="createdcategory" className='text-lg font-semibold'>
            Course category
        </label>
        <input type="text" required name='createddescription' placeholder='Enter course category' className='bg-transparent px-2 py-1 border' value={userInput.createdcategory} onChange={handelUserInput}/>
      </div>
      <div className="flex flex-col gap-1">
      <label htmlFor="createddescription" className='text-lg font-semibold'>
            Course description
        </label>
        <textarea type="text" required name='createddescription' placeholder='Enter course description' className='bg-transparent px-2 py-1 h-24 text-lg overflow-y-scroll resize-none border' value={userInput.createddescription} onChange={handelUserInput}/>
      </div>
      </main>
      <button className='w-full py-2 rounded-sm  bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out' type='submit'>create course</button>
      </form>
      </div>
    </Home>
  )
}

export default CreateCourse
