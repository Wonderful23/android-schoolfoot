import { AnyAction } from 'redux'
import { ActionTypes } from '../../Util/const'
const initialState = {
  person: {

  },
  apis:{},
  activities:{},
  records:{},
  scores:{}
}

const rootReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'Login':
      return {
        ...state,
        person: action.payload.person
      }
    case 'Apis':
      return {
        ...state,
        apis: action.payload.apis
      }
    case 'GetActivities':
      return {
        ...state,
        activities: action.payload.activities
    }
    case 'GetRecords':
      return {
        ...state,
        records: action.payload.records
    }
    case 'GetScores':
      return {
        ...state,
        scores: action.payload.scores
    }      
    default:
      return state
  }
}
export default rootReducer