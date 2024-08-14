import { myAxios } from "./Helper";

export const register=(order)=>
{
return myAxios.post("/createOrder",order).then((response)=>{
   
    return response;
}

)

}


// export const getAllDataInTable = (params) => {
//     const { size, page, shirtSize } = params;

//     // Construct query parameters dynamically
//     const queryParams = new URLSearchParams();

//     if (size) queryParams.append("size", size);
//     if (page) queryParams.append("page", page);
//     if (shirtSize) queryParams.append("shirtSize", shirtSize);

//     return myAxios.get(`/getAllOrder?${queryParams.toString()}`)
//         .then((response) => {
//             return response.data; // Return the data from the response
//         });
// }


export const getAllDataInTable = ({ size, page, shirtSize }) => {
    const params = { size, page,shirtSize };
    
    // if (shirtSize) {
    //   params.shirtSize = shirtSize;
    // }
  
    return myAxios.get("/getAllOrder", { params })
      .then((response) => {
        console.log(response)
        return response;
      });
  };


export const countDataOfTable=({shirtSize})=>
    {

        const params = {shirtSize };
        return myAxios.get("getAllOrderCount",{ params }).then((response)=>{
            console.log(response)
            return response;
        })
    }