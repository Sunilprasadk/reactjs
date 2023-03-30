//reducers which returns the new state to the store based on the action it received from the dispatch

const datareducer = (state=[], action) =>{
    //post data
    if(action.type==='SEND'){
       return state = [...state, {
        name : `${action.payload.taskname}`,
        comment : `${action.payload.taskcomments}`,
        status:`${action.payload.taskstatus}`,
        due:`${action.payload.taskdue}`
       }]
    }
}


export default datareducer;