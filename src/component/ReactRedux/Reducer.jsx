// Initial state of the data
const initialState = {
    api1Data: [], // Data from API 1
};

// Data reducer function
export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_OF_PROFILE':
            return {
                ...state,
                api1Data: action.payload, // Update API 1 data
                // error: null, // Clear error message
            };
        default:
            return state; // Return current state if action type is not recognized
    }
};








