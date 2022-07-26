import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Nav: NextPage = () => {
    return (
        <div className='border p-5 flex justify-around items-center'>
            <div className='flex flex-col'>
                <span className='font-extrabold text-4xl'>Course List App</span>
                <span className="font-medium text-lg">A WebApp Made using <a className='underline hover:no-underline' href='https://github.com/pmndrs/zustand' target='_blank' rel='noreferrer'>Zustang</a></span>
            </div>
            <div className='font-semibold flex justify-around gap-5'>
                <Link href='https://twitter.com/theVatsal_eth'><a target='_blank'>Twitter</a></Link>
                <Link href='https://github.com/theVatsal-eth'><a target='_blank'>Github</a></Link>
            </div>
        </div>
    )
}

export default Nav