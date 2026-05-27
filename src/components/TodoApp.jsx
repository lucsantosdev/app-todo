import {
    CheckCircle2,
    Circle,
    Filter,
    Plus,
    Trash2,
} from 'lucide-react'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiKofi } from 'react-icons/si'
import TodoFilters from './TodoFilters'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, selectFilteredTodos, selectIsAddingTodo, selectTodos, selectTodosStats } from '../store/selectors'
import { clearCompleted, markAllComplete, setFilter, setIsAddingTodo } from '../store/todoSlice'

const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/lucsantosdev', icon: FaLinkedinIn },
    { name: 'GitHub', href: 'https://github.com/lucsantosdev', icon: FaGithub },
    { name: 'Email', href: 'mailto:lucsantosdev@gmail.com', icon: HiOutlineMail },
    { name: 'YouTube', href: 'https://www.youtube.com/@lucsantosdev', icon: FaYoutube },
    { name: 'Ko-fi', href: 'https://ko-fi.com/lucsantosdev', icon: SiKofi },
]

function TodoApp() {

    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)
    const filteredTodos = useSelector(selectFilteredTodos)
    const stats = useSelector(selectTodosStats)
    const filter = useSelector(selectFilter)
    const isAddingTodo = useSelector(selectIsAddingTodo)

    const handleFilterChange = (newFilter) => {
        dispatch(setFilter(newFilter))
    }

    const handleAddTodoClick = () => {
        dispatch(setIsAddingTodo(true))
    }

    const handleMarkComplete = () => {
        dispatch(markAllComplete())
    }

    const handleClearCompleted = () => {
        dispatch(clearCompleted())
    }

    return <div className='apple-background min-h-screen px-4 py-10 sm:py-14'>
        <div className="mx-auto max-w-3xl">
            {/* Header */}
            <div className="mb-8 text-center sm:mb-10">
                <div className="mx-auto mb-3 inline-flex items-center rounded-full border border-[#d6d9e2] bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-[#4d5566] shadow-sm">
                    Minimal Workspace
                </div>
                <h1 className="mb-2 text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl">TodoFlow</h1>
                <p className="text-sm text-[#6b7280] sm:text-base">Organize your day with calm, focus and simplicity.</p>
            </div>

            {/* Stats Card */}
            {stats.total > 0 && (
                <div className="apple-card mb-6 rounded-3xl p-6 sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-[#1f2937]">
                        Progress Overview
                    </h2>
                    <div className="text-2xl font-semibold text-[#0a84ff]">
                        {stats.completionPercentage}%
                    </div>
                </div>

                <div className="mb-5 h-2.5 w-full rounded-full bg-[#e7ebf3]">
                    { /* Progress Bar */ }
                    <div className="h-2.5 rounded-full bg-gradient-to-r from-[#5ac8fa] to-[#0a84ff] transition-all duration-500 ease-out" style={{ width: `${stats.completionPercentage}%` }}></div>
                </div>

                { /* Stats */ }
                <div className="grid grid-cols-3 gap-3 text-center sm:gap-4">
                    <div className="rounded-2xl bg-white/70 p-3">
                        <div className="text-2xl font-semibold text-[#111827]">
                            {stats.total}
                        </div>
                        <div className="text-xs uppercase tracking-wide text-[#6b7280]">Total</div>
                    </div>
                    <div className="rounded-2xl bg-white/70 p-3">
                        <div className="text-2xl font-semibold text-[#111827]">
                            {stats.active}
                        </div>
                        <div className="text-xs uppercase tracking-wide text-[#6b7280]">Active</div>
                    </div>
                    <div className="rounded-2xl bg-white/70 p-3">
                        <div className="text-2xl font-semibold text-[#111827]">
                            {stats.completed}
                        </div>
                        <div className="text-xs uppercase tracking-wide text-[#6b7280]">Completed</div>
                    </div>
                </div>
            </div>
            )}

            { /* Main Todo Container */ }
            <div className="apple-card overflow-hidden rounded-3xl">
                { /* Action Bar */ }
                <div className="border-b border-[#dfe4ec] p-6 sm:p-7">
                    <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                        <button onClick={handleAddTodoClick} className='inline-flex items-center gap-2 rounded-xl bg-[#0a84ff] px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_20px_rgba(10,132,255,0.24)] transition-all duration-200 hover:bg-[#0077ed] hover:shadow-[0_14px_24px_rgba(10,132,255,0.24)] cursor-pointer'>
                            <Plus size={20} /> Add Todo
                        </button>

                        { /* Clear and Delete Buttons */ }
                        {stats.total > 0 && (
                            <div className="flex flex-wrap items-center gap-2">
                                {stats.completed > 0 && (
                                    <button onClick={handleClearCompleted} className="inline-flex items-center gap-2 rounded-xl border border-[#ffd8d8] bg-white px-3 py-2 text-sm text-[#d12f2f] transition-all duration-200 hover:bg-[#fff2f2]">
                                        <Trash2 size={16} />
                                        Clear Completed
                                    </button>
                                )}
                                {stats.active > 0 && (
                                    <button onClick={handleMarkComplete} className="inline-flex items-center gap-2 rounded-xl border border-[#d4e7ff] bg-white px-3 py-2 text-sm text-[#0a84ff] transition-all duration-200 hover:bg-[#edf5ff]">
                                        <CheckCircle2 size={16} />
                                        Mark All Completed
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                    { /* Todo Filter */ }
                    <TodoFilters currentFilter={filter} stats={stats} onFilterChange={handleFilterChange} />
                </div>
                { /* Todo Form */ }
                {isAddingTodo && (
                     <div className="border-b border-[#dfe4ec] bg-[#f5f7fb] p-6 sm:p-7">
                        <TodoForm placeholder="What needs to be done?" />
                    </div>
                )}
                { /* Todo List */ }
                <div className="max-h-96 overflow-y-auto">
                    {filteredTodos.length === 0 ? (
                        <div className="p-12 text-center sm:p-16">
                            {todos.length === 0 ? (
                                <div className="text-[#6b7280]">
                                    <Circle size={48} className="mx-auto mb-4 opacity-50" />
                                    <p className="mb-2 text-lg font-medium text-[#111827]">
                                        No Todos Yet
                                    </p>
                                    <p>Add your first todo to get started!</p>
                                </div>    
                            ) : ( 
                                <div className="text-[#6b7280]">
                                    <Filter size={48} className='mx-auto mb-4 opacity-50' />
                                    <p className='mb-2 text-lg font-medium text-[#111827]'>
                                        No {filter} Todos
                                    </p>    
                                    <p className="text-sm">
                                        {filter === "active" && "All caught up! Great job! 🎉"}
                                        {filter === "completed" && "No completed todos yet. Keep going! 💪"}
                                    </p>
                                </div>
                                )}
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-300">
                            {filteredTodos.map((todo, index) => {
                                return <TodoItem key={todo.id} todo={todo} index={index} />
                            })}
                        </div>
                    )}
                </div>
            </div>

            { /* Footer */ }
            <footer className="mt-8 rounded-3xl border border-[#dfe4ec] bg-white/70 px-6 py-5 text-center backdrop-blur-xl">
                <p className="mb-3 text-sm text-[#6b7280]">
                    Built with focus. Developed by{' '}
                    <a
                      href="https://www.linkedin.com/in/lucsantosdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#0a84ff] hover:text-[#0077ed]"
                    >
                        @lucsantosdev
                    </a>
                </p>
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                    {socialLinks.map(({ name, href, icon: Icon }) => {
                        return (
                            <a
                              key={name}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={name}
                              className="social-link"
                            >
                                <Icon size={17} />
                            </a>
                        )
                    })}
                </div>
            </footer>
        </div>
        
    </div>
}

export default TodoApp
