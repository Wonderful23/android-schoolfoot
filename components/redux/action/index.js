import { AnyAction } from 'redux'
import {ActionTypes} from '../../Util/const'

export const loginApis = (person) => {
  return {
    type: 'Login',
    payload: {
      person
    }
  }
}
export const fetchApis = (apis) => {
  return {
    type: 'Apis',
    payload: {
      apis
    }
  }
}
export const getActivities = (activities) => {
  return {
    type: 'GetActivities',
    payload: {
      activities
    }
  }
}
export const getRecords = (records) => {
  return {
    type: 'GetRecords',
    payload: {
      records
    }
  }
}
export const getScores = (scores) => {
  return {
    type: 'GetScores',
    payload: {
      scores
    }
  }
}