import { ADD_DATA,DELETE_DATA } from "./actionTypes";

export const addData=(payload)=>{
    return{
        type:ADD_DATA,
        payload,
    };
};

export const deleteData=(payload)=>{
    return{
        type:DELETE_DATA,
        payload,
    };
};