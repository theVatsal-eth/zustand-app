import { NextPage } from 'next'
import React, { useState } from 'react'

import useCourseStore from '../pages/store/store'

const CourseFrom: NextPage = () => {

    const addCourse = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState<string>('')

    const handleCourseSubmit = () => {
        if (!courseTitle) return alert("Please add a course title")
        addCourse({
            id: Math.ceil(Math.random() * 100000),
            name: courseTitle,
        })
        setCourseTitle('')
    }

    return (
        <div className='flex justify-center items-center flex-col mt-5 gap-2'>
            <div className='flex flex-col w-[500px]'>
                <label className='font-mono italic'>
                    Course name
                </label>
                <input
                    value={courseTitle}
                    className='border-2 outline-none border-gray-600 p-2'
                    placeholder='Web Development 2022...'
                    onChange={(e) => {
                        setCourseTitle(e.target.value)
                    }} />
            </div>
            <button
                className='bg-blue-500 p-2 rounded-lg text-white'
                onClick={() => {
                    handleCourseSubmit()
                }}
            >Add Course</button>
        </div>
    )
}

export default CourseFrom