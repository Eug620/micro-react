import { cloneDeep } from 'lodash-es'
// 初始状态
const defaultState = {
    num: 1
}

// 导出函数
export default (state = defaultState,action:any) => {
    const newState = cloneDeep(state)
    // if (action.type == 'add'){
    //     newState.num++
    // }
    // console.log(newState);
    switch (action.type) {
        case 'add1':
            newState.num++
            break;
        case 'add2':
            newState.num+=action.value
            break;
        default:
            break;
    }
    
    return newState
}