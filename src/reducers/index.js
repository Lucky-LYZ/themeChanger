import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilter from './visibilityFilter'

/**
 * @file reducers 
 */
const reducers = combineReducers({
    todos,
    visibilityFilter
})

export default reducers;