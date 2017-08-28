export default {
    
    namespace: 'example',
    
    state: {},

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },
    
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line            
        },
    },
};