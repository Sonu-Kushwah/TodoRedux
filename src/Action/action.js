export const addTodo=(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo=(id)=>{
    return{
        type:"DELETE_TODO",
        id
    }
}

export const remove=()=>{
    return{
        type:"REMOVE_ALL"
    }
}