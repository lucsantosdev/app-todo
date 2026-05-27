import { CheckCircle, Clock, List } from 'lucide-react'
import React from 'react'

function TodoFilters({ currentFilter, stats, onFilterChange }) {

    const filters = [
        { key: "all", label: "All", icon: List, count: stats.total },
        { key: "active", label: "Active", icon: Clock, count: stats.active },
        { key: "completed", label: "Completed", icon: CheckCircle, count: stats.completed },
    ]

    return <>
        <div className="flex items-center justify-center">
            <div className="inline-flex rounded-2xl border border-[#dfe4ec] bg-[#f5f7fb] p-1.5">
                {filters.map(({ key, label, icon: Icon, count }) => {
                    return (
                        <button 
                          key={key} 
                          className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${currentFilter === key ? 'bg-white text-[#111827] shadow-sm' : 'text-[#5b6474] hover:bg-white/70 hover:text-[#111827]'}`}
                          onClick={() => onFilterChange(key)}
                        >
                            <Icon size={16} />
                            <span>{label}</span>
                            <span className="rounded-full bg-[#eef2f8] px-2 py-0.5 text-xs text-[#5b6474]">{count}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    </>
}

export default TodoFilters