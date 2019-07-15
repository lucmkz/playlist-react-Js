import 
{ 
    OPEN_REGISTER_VIDEO, 
    CLOSE_REGISTER_VIDEO, 
    CLOSE_SINGLE_VIDEO,
    OPEN_SINGLE_VIDEO 
} 
    from "./action";

export const openRegisterVideo = () => ({
    type: OPEN_REGISTER_VIDEO    
})

export const closeRegisterVideo = () => ({
    type: CLOSE_REGISTER_VIDEO    
})

export const closeSingleVideo = () => ({
    type: CLOSE_SINGLE_VIDEO    
})

export const openSingleVideo = () => ({
    type: OPEN_SINGLE_VIDEO    
})