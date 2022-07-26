import create, { StateCreator } from "zustand";


export interface ICourse {
    id: number;
    name: string;
    completed?: boolean;
}

interface State {
    courses: ICourse[];
    addCourse: (course: ICourse) => void;
    removeCourse: (courseId: number) => void;
    toggleCourseStatus: (courseId: number) => void;
}

const courseStore: StateCreator<
State,
[],
[],
State
>= (set) => ({
    courses: [],
    addCourse: (course: ICourse) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },
    removeCourse: (courseId: number) => {
        set((state) => ({
            courses: state.courses.filter((c: ICourse) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId: number) => {
        set((state) => ({
            courses: state.courses.map((c) => c.id === courseId ? {
                id: c.id,
                name: c.name,
                completed: !c.completed
            } : c)
        }))
    },
})

const useCourseStore = create<State>()(
    (...a) => courseStore(...a)
)

export default useCourseStore;