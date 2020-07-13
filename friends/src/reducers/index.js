export const initialState = {
    friends: [],
    loginToken: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...initialState,
                loginToken: ""
            };
        default:
            return state;
    }
}