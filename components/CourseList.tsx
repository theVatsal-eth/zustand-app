import { NextPage } from 'next'
import React from 'react'
import useCourseStore from '../pages/store/store'

const CourseList: NextPage = () => {

    const courses = useCourseStore((state) => state.courses)
    const removeCourse = useCourseStore((state) => state.removeCourse)
    const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus)

    return (
        <div>
            {
                courses.length !== 0 ? (
                    <>
                        <span className='font-bold text-2xl'>Course List</span>
                        <ul className='flex flex-col gap-3 mt-4'>
                            {
                                courses.map((course, index) => (
                                    <li className={`${index % 2 !== 0 ? 'bg-blue-200' : 'bg-blue-400'} flex justify-between items-center p-3 gap-2 w-[500px] rounded-lg`} key={course.id}>
                                        <input checked={course.completed} onChange={
                                            (e) => toggleCourseStatus(course.id)
                                        } className='outline-none border-left-2 border-black' type='checkbox' />
                                        <span className={`text-xl font-bold ${course.completed ? 'line-through' : ''}`}>{course.name}</span>
                                        <button className={`${index % 2 !== 0 ? 'bg-blue-400' : 'bg-blue-200'} rounded-xl`} onClick={() => removeCourse(course.id)} >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                ) :
                ''
            }


        </div>
    )
}

export default CourseList