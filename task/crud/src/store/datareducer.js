const datareducer = (state=[], action) =>{
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