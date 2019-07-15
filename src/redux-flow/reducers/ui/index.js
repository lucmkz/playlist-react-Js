import createReducer from '../create-reducer'
import { 
    OPEN_REGISTER_VIDEO, 
    CLOSE_REGISTER_VIDEO, 
    CLOSE_SINGLE_VIDEO,
    OPEN_SINGLE_VIDEO 
} from './action'

const initialState = {
    isRegisterFormOpened: false,
    isSingleVideoOpened: false
}

const ui = createReducer(initialState, {
    [OPEN_REGISTER_VIDEO]: (state, action) => ({
        ...state,
        isRegisterFormOpened: true
    }),
    [CLOSE_REGISTER_VIDEO] : (state, action) => ({
        ...state,
        isRegisterFormOpened: false
    }),
    [CLOSE_SINGLE_VIDEO] : (state, action) => ({
        ...state,
        isSingleVideoOpened: false
    }),
    [OPEN_SINGLE_VIDEO] : (state, action) => ({
        ...state,
        isSingleVideoOpened: true
    })
})

export default (ui)