import axios from 'axios'
import { loginApis,fetchApis,getScores } from '../redux/action'
import Login from '../Page/Login';
const BaseApi = axios.create({
  baseURL: 'http://192.168.0.103:8080',
  headers: { 'Content-Type': 'application/json' }
})

/********************* interfaces *********************/

const PersonApis = {
  login: (id,password) => async (
    dispatch
  ) => {
    //console.log("Hello World!")
    const response = await BaseApi.get(`/student/login/id/${id}/password/${password}`)
    console.log(response.data)
    const data={
      id:id,
      name:response.data.name,
      succeed:response.data.succeed
    }
    dispatch(loginApis(data))
  },
  register:(id,name,password) => async(dispatch)=>{
    const response = await BaseApi.post(`/student/register/id/${id}/name/${name}/password/${password}`)
    dispatch(fetchApis(response.data))
  },
  score:(id) => async(dispatch)=>{
    const response = await BaseApi.get(`/student/getScore/id/${id}`)
    dispatch(getScores(response.data))
  }
 

}
export default PersonApis
