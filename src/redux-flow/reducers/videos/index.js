import createReducer from '../create-reducer'
import { ADD_VIDEO, REMOVE_VIDEO } from './actions'

const initialState = {}

const Videos = createReducer(initialState, {
    [ADD_VIDEO]: (state, action) => ({
        ...state,
        [action.payload.id]: {
            id: action.payload.id,
            title: action.payload.title
        }
    }),
    [REMOVE_VIDEO]: (state, action) => ({
    })
})

export default Videos