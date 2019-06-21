
/**
 * @file action creator
 * @description 各方法用于生成action
 */

export const handleChange=(input)=>({
    type:'HANDLE_CHANGE',
    input:input
})

export const handleAdd = () => ({
    type: 'ADD_TODO'
})

export const handleEdit = (id, status) => ({
    type: 'TOGGLE_TODO',
    id:id,
    status,status
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})