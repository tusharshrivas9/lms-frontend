import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../helper/Axiosinstence"

const initialState = {
    courseDate:[]
}

export const getAllCourses = createAsyncThunk("/course/get",async ()=>{
    try {
        const response = axiosInstance.get("/courses")
        toast.promise(response,{
            loading:"loading course data...",
            success:"Courses loaded sucessfully",
            error:"failed to get the course"
        })
        return (await response).data.courses
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const createNewCourse = createAsyncThunk("/course/create",async (data)=>{
    try {
        let formData = new FormData()
        formData.append("title" ,data?.title)
        formData.append("description" ,data?.description)
        formData.append("category" ,data?.category)
        formData.append("createdBy" ,data?.createdBy)
        formData.append("tumbnail" ,data?.thumbnail)

        const response = axiosInstance.post("/courses",formData)
        toast.promise(response,{
            loading:"Creating new course",
            success:"course created",
            error:"Failed to create course"
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const courseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(getAllCourses.fulfilled,(state,action)=>{
            if (action.payload) {
                state.courseDate = [...action.payload]
            }
        })
    }
})

export default courseSlice.reducer