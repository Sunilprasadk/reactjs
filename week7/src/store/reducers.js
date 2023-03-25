//error

const reducers = (initialState = [], action)=>{
    if(action.type==='TASKADD' && initialState.length === 0){
        return initialState = ''
    }else if(action.type==='TASKCOMPLETE'){
        initialState.map((item,index)=>{
            if(index===action.payload){
                item.taskStatus=`COMPLETED`
            }
        })
        return initialState = [
            ...initialState
        ]
    }
    else{
        return initialState = [

            ...initialState,

            {
                taskName:action.payload ? `${action.payload}` : `Empty`,
                taskStatus:action.payload ? `ACTIVE` : `None`,
            }
        ]
    }
}

export default reducers;