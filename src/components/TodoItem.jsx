import { Calendar, Check, Edit3, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TodoForm from './TodoForm'
import { deleteTodo, toggleTodo, updateTodo } from '../store/todoSlice'

function TodoItem({ todo, index }) {

    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id))
    }

    const handleDelete = () => {
        setIsDeleting(true)
        setTimeout(() => {
            dispatch(deleteTodo(todo.id))
        }, 200)
    }

    const handleUpdate = (text) => {
        dispatch(updateTodo({ id: todo.id, updates: { text: text.trim() } }))
        setIsEditing(false)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(date)
    }

    if(isEditing) {
        return <div className="bg-[#f5f7fb] p-4 sm:p-5">
            <TodoForm 
              initialValue={todo.text} 
              onSubmit={handleUpdate} 
              onCancel={() => setIsEditing(false)} 
              placeholder="Update your todo"
            />
        </div>
    }

    return <>
        <div 
                    className={`group p-4 transition-all duration-200 hover:bg-[#f7f9fd] sm:px-5 ${isDeleting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'} ${todo.completed ? 'opacity-75' : ''}`} style={{ animationName: 'slideInUp', animationDuration: '0.3s', animationTimingFunction: 'ease-out', animationFillMode: 'forwards', animationDelay: `${index * 50}ms` }}
        >
            {/* Toggle Button */}
            <div className='flex items-start gap-3'>
                <button onClick={handleToggle} className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${todo.completed ? 'border-[#0a84ff] bg-[#0a84ff] text-white hover:bg-[#0077ed]' : 'border-[#b6bfcc] bg-white hover:border-[#0a84ff] hover:bg-[#e9f3ff]'}`}>
                    {todo.completed && <Check size={14} />}
                </button>
                {/* Todo Content */}
                <div className='flex-1 min-w-0'>
                        <div className={`leading-relaxed text-[#1f2937] ${todo.completed ? 'line-through decoration-[#0a84ff]/60' : ''}`}>{todo.text}</div>
                    <div className='mt-2 flex items-center gap-4 text-xs text-[#7a8394]'>
                        <div className='flex items-center gap-1'>
                            <Calendar size={12} />
                            <span>Created {formatDate(todo.createdAt)}</span>
                        </div>
                        <span>Updated {formatDate(todo.updatedAt)}</span>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <button className="rounded-lg p-2 text-[#7a8394] transition-all duration-200 hover:bg-[#ebf1fb] hover:text-[#1f2937]" onClick={() => setIsEditing(true)}>
                        <Edit3 size={14} />
                    </button>
                    <button onClick={handleDelete} className="rounded-lg p-2 text-[#7a8394] transition-all duration-200 hover:bg-[#fff1f1] hover:text-[#d12f2f]">
                        <Trash2 size={14} />
                    </button>

                </div>
            </div>
        </div>
    </>
}

export default TodoItem