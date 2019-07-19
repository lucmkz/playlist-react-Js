import { ADD_VIDEO, REMOVE_VIDEO } from './actions'
import { db } from '../../../config/firebase'

export const registerVideo = ({ id, title }) => async (dispatch) => {
    await db.ref('video').child(id).update({ id, title })
    dispatch(addVideo({ id, title }))
}

export const unregisterVideo = ({ id }) => async (dispatch) => {
    console.log(id)

    await db.ref('video').child(id).update({
        id: null,
        title: null
    })
    dispatch(removeVideo({ id }))
}

export const removeVideo = ({ id, title }) => ({
    type: REMOVE_VIDEO,
    payload: { id, title }
})

export const addVideo = ({ id, title }) => ({
    type: ADD_VIDEO,
    payload: { id, title }
})


//db.ref('videos').orderBy('title').on('child_added', (child, prevKey) => {
//    console.log(child.val(), prevKey)
//})
//Está instrução, ordena os valores retornados pelo "filho" de "videos", nesse caso, "title"
export const fetchVideos = () => (dispatch) => {
    db.ref('video').on('value', (snapshot) => {
        const videos = snapshot.val()
        //object.keys([OBJETO]), criará um array com os ids de um objeto
        const ordered = Object.keys(videos)
            .sort((a, b) => videos[a].title < videos[b].title ? -1 : 1)
            .forEach((id) => dispatch(addVideo({
                id,
                title: videos[id].title
            })))

        //snapshot.forEach((child) => {
        //    dispatch(addVideo(child.val()))
        //})
    })
}