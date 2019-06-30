const reducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW': 
            return true
        default:
            return false;

    }
}

export default reducer;