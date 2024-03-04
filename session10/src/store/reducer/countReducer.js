// reducer thật ra là những cái hàm nhiệM vụ tính toán lại state mới
// khởi tạo state
const initialState = ["hoa", "hồng"];
export const countReducer1 = (state = initialState, action) => {
    switch (action.type) {
        case "increase":
            let newState=[...state];
            newState.push(3);
            return newState
        default:
            return state;
    }
}