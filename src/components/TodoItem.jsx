import { Calendar, Check } from 'lucide-react'
import React from 'react'

function TodoItem() {
    return <>
        <div 
          className={`group p-4 hover:bg-gray-100 transition-all duration-200`}
        >
            {/* Toggle Button */}
            <div className='flex items-start gap-3'>
                <button className='flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 mt-0.5'>
                    <Check size={14} />
                </button>
                {/* Todo Content */}
                <div className='flex-1 min-w-0'>
                    <div className={`text-gray-800 leading-relaxed`}></div>
                    <div className='flex items-center gap-4 mt-2 text-xl text-gray-600'>
                        <div className='flex items-center gap-1'>
                            <Calendar size={12} />
                            <span>Created</span>
                        </div>
                        <span>Update</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TodoItem