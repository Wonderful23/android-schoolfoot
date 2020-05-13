import axios from 'axios'
import { getActivities,getRecords,fetchApis } from '../redux/action'
const BaseApi = axios.create({
  baseURL: 'http://192.168.0.103:8080',
  headers: { 'Content-Type': 'application/json' }
})

/********************* interfaces *********************/

const ActivityApis = {
  get: () => async (
    dispatch
  ) => {
    //console.log("Hello World!")
    const response = await BaseApi.get("/student/getActivities")
    dispatch(getActivities(response.data))
  },
  record: (id) => async(
    dispatch
  ) =>{
    const response = await BaseApi.get(`/student/getRecords/id/${id}`)
    dispatch(getRecords(response.data))
  },
  sigin: (activityId,studentId,code) => async(
    dispatch
  ) =>{
    const response = await BaseApi.post(`/student/checkIn/activityId/${activityId}/studentId/${studentId}/code/${code}`)
    dispatch(fetchApis(response.data))
  }
  
}
export default ActivityApis