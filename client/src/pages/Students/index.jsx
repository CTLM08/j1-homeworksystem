import { collection } from 'firebase/firestore'
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'
import { Icon } from '@iconify/react';

const Students = () => {
    const [value , loading ] = useCollection(collection(firestore,'user'))
  return (
    <div className='p-5'>
        <div className='mt-2 p-5'>
            <table className='flex flex-col bg-zinc-800 p-5 rounded-md '>
                {
                    value?.docs.map((doc,index)=>
                            doc.data().username!='电脑协会'&&(
                                <tr className='flex flex-row border-b-2 border-white/30 w-full py-3  items-center gap-3'>
                                    <Icon icon="radix-icons:avatar" className='w-8 h-8 text-white/60 ' />

                                    <td className='text-white/70 font-semibold text-center '>{doc.data().username}</td>
                                    <td className='text-white/70 font-semibold text-xs' >{doc.data().email}</td>
                        </tr>
                            )
                    )
                }
            </table>
        </div>
    </div>
  )
}

export default Students