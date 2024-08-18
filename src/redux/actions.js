export const setDashboardData = (data) => ({
    type: 'SET_DASHBOARD_DATA',
    payload: data
});


const initialState = {
    dashboardData: {}
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DASHBOARD_DATA':
            return { ...state, dashboardData: action.payload };
        default:
            return state;
    }
};

export default dashboardReducer;
