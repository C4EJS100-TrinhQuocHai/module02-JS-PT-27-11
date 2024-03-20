export const increaseCounter=(value)=>{
    return {
        type:"increase",
        payload:value
    }
}
export const decreaseCounter = (value) => {
    return {
        type: "decrease",
        payload: value
    }
}

// function tinhTong(a,b) {
//     console.log(a);
//     console.log(b);

// }
// tinhTong(5,6)