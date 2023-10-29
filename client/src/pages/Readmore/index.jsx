import { doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useDocument } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router-dom'
import { firestore } from '../../firebase';
import CodeMirror from '@uiw/react-codemirror';
import { Icon } from '@iconify/react';

const Readmore = () => {
    const [code,setCode]=useState('const b=1')
    const {id}=useParams()
    const [value] = useDocument(doc(firestore, 'homework', id));

  return (
    <div className='mt-3 p-5 flex flex-row'>
        <div className='w-1/2'>
            <div className='text-white font-bold text-4xl '>{value?.data().title}</div>
            <div className='bg-zinc-800 text-white p-4 rounded-md mt-3 font-semibold'>{value?.data().content}</div>
            <p className='mt-3 text-white text-xl font-bold'>结果：</p>
            <div className='bg-zinc-800 text-white p-4 rounded-md mt-3 font-semibold'>{value?.data().result}</div>
        </div>
        <div className='w-1/2 p-2'>
            <nav className='bg-zinc-800 w-full p-3 text-white flex flex-row justify-between items-center'>
                <div className='items-center flex flex-row gap-2 '>
                    <Icon icon="ant-design:code-outlined" className='w-6 h-6 text-green-600' />
                    <p className='font-semibold'>Code Editor</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                <button className=' p-2 bg-zinc-700 w-28 hover:border-0 hover:bg-green-800 transition-all'>
                    <p className='font-semibold'>运行</p>
                </button>
                <button onClick={()=>console.log(code)} className='bg-green-800 p-2 w-28 flex flex-row items-center justify-center hover:gap-2 transition-all gap-4'>
                    <p className='font-semibold'>提交</p>
                    <Icon icon="ant-design:arrow-right-outlined" className='w-6 h-6' />
                </button>
                </div>
            </nav>
            <CodeMirror
                value={code}
                options={{
                    theme: 'material',
                    mode: 'js',
                }}  
                onChange={(value)=>setCode(value)}
            ></CodeMirror>
            
        </div>
    </div>
  )
}

export default Readmore