import { myAxios } from "./Helper";

export const register=(order)=>
{
return myAxios.post("/createOrder",order).then((response)=>response.json)

}