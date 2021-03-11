import {products} from '../moks/data';
import {ActionType} from '../store/action';

const initialState = {
    viewList: true,
    products: products,
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionType.CHANGE_LIST:
            return {
                ...state,
                viewList: !state.viewList,
            }
    }
}