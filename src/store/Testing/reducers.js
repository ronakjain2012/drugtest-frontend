import { TEST_INCREMENT, TEST_DECREMENT } from "../StoreActionsTypes";

const initialTestingState = {
	counterValue: 0,
	totalClick: 0,
};

export function TestingStoreReducer(state = initialTestingState, action) {
	switch (action.type) {
		case TEST_INCREMENT:
			return {
				...state,
				counterValue: state.counterValue+1,
				totalClick: state.totalClick+1,
			};
		case TEST_DECREMENT:
			return {
				...state,
				counterValue: state.counterValue-1,
				totalClick: state.totalClick+1,
			};
		default: {
			return state;
		}
	}
}
