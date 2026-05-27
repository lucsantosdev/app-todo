import { createSelector } from '@reduxjs/toolkit'

// basic selectors
export const selectTodos = (state) => state.todos.items
export const selectFilter = (state) => state.todos.filter
export const selectIsAddingTodo = (state) => state.todos.isAddingTodo

// filter items
export const selectFilteredTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
        switch(filter) {
            case "active":
                return todos.filter(todo => !todo.completed)
            case "completed":
                return todos.filter(todo => todo.completed)
            default:
                return todos
        }
    }
)

export const selectTodosStats = createSelector(
    [selectTodos],
    (todos) => {
        const total = todos.length
        const completed = todos.filter(todo => todo.completed).length
        const active = total - completed
        const completionPercentage = total === 0 ? 0 : Math.round((completed / total) * 100)

        return {
            todos,
            total,
            completed,
            active,
            completionPercentage,
        }
    }
)