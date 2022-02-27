import { ADD_DATA,DELETE_DATA } from "./actionTypes";

const init = {
    bag:{
        items:[]
    }
}
// console.log(init.bag.items)
export const reducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_DATA:
            return{...store, bag: {...store.bag, items:[...store.bag.items,payload]}}

            case DELETE_DATA:
                store.bag.items=store.bag.items.filter((e)=>{
                    if(e.id !== payload.id){
                        return e;
                    }
                })
            return{...store}

            default:
                return { ...store };
    }

}