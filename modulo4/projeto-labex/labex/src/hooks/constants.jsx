export const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucia-cufre-hopper'

export const axiosConfig = {
   headers:{
    auth: localStorage.getItem("token"),
   }
}