import { ADD_VIDEO } from './actions'
import { db } from '../../../config/firebase'

export const registerVideo = ({ id, title }) => async (dispatch) => {
    await db.ref('video').child(id).update({ id, title })
    dispatch(addVideo({ id, title }))
}

export const addVideo = ({ id, title }) => ({
    type: ADD_VIDEO,
    payload: {id, title}
})

export const fetchVideos = () => (dispatch) => {
    db.ref('video').on('value', (snapshot) => {
        console.log(snapshot.val())
        snapshot.forEach((child) => {
            dispatch(addVideo(child.val()))
        })
    })
}