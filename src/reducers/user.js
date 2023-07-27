const initState = {
    userInfo: {}
}

const UserReducer = (state=initState, action)=>{
    switch (action.type) {
        case 'userInfo':
            return { ...state, userInfo: action.payload }
    
        default:
            return state
    }
}

export default UserReducer