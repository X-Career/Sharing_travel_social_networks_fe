import { store } from "../redux/app/store"

export default authHeader = () => {
    const user = store.getState()
    const accessToken = user.auth.user.accessToken
    if (user && accessToken) {
        return { authorization: `Bearer ${accessToken}` } 
    } else {
        return {}
    }
}