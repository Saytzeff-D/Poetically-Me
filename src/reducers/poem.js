const initState = {
    selectedPoem: ''
}

const PoemReducer = (state=initState, action)=>{
    switch (action.type) {
        case 'summary':
            return {...state, selectedPoem: action.payload}
    
        default:
            return state
    }
}

export default PoemReducer