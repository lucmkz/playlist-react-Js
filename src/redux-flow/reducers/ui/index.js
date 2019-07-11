import createReducer from '../create-reducer'
import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from './action'

const initialState = {
    isRegisterFormOpened: false
}

const ui = createReducer(initialState, {
    [OPEN_REGISTER_VIDEO]: (state, action) => ({
        ...state,
        isRegisterFormOpened: true
    }),
    [CLOSE_REGISTER_VIDEO] : (state, action) => ({
        ...state,
        isRegisterFormOpened: false
    })

})

export default ui