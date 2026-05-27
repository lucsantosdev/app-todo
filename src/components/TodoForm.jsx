import { Check, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, setIsAddingTodo } from '../store/todoSlice'

function TodoForm({
    onSubmit,
    onCancel,
    initialValue = "", 
    placeholder = "Add a new task..."
}) {

    const dispatch = useDispatch()
    const [text, setText] = useState(initialValue)
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmedText = text.trim()
        if (trimmedText) {
            if (onSubmit) {
                // for editing
                onSubmit(trimmedText)
            } else {
                dispatch(addTodo(trimmedText))
            }
            setText("")
        }
    }

    const handleCancel = () => {
        if (onCancel) {
            onCancel()
        } else {
            dispatch(setIsAddingTodo(false))
        }
        setText("")
    }

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            handleCancel()
        }
    }

    return (
        <form className="flex items-center gap-3" onSubmit={handleSubmit}>
            <div className="flex-1">
                <input 
                    ref={inputRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className='w-full rounded-xl border border-[#d6dbe6] bg-white px-4 py-3 text-[#111827] placeholder-[#8b95a7] shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 focus:border-[#0a84ff] focus:outline-none focus:ring-3 focus:ring-[#d9ebff]'
                    maxLength={500}
                />
            </div>
            <div className="flex items-center gap-2">
                <button
                  type="submit"
                  title="Save todo"
                  className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a84ff] text-white transition-all duration-200 hover:bg-[#0077ed] disabled:cursor-not-allowed disabled:bg-[#b3c8e6]'
                >
                <Check size={18} />    
                </button>
                <button
                                    type="button"
                                    title="Cancel"
                  className='flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6dbe6] bg-white text-[#606a7a] transition-all duration-200 hover:bg-[#f5f7fb] disabled:cursor-not-allowed'
                  onClick={handleCancel}
                >
                <X size={18} />    
                </button>
            </div>

        </form>
    )
    }

export default TodoForm