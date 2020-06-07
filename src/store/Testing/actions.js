import {TEST_INCREMENT,TEST_DECREMENT} from '../StoreActionsTypes'


export const incrementOnes = () => (
    {
        type: TEST_INCREMENT,
        payload: {}
    }
)

export const decrementOnes = () => (
    {
        type: TEST_DECREMENT,
        payload: {}
    }
)