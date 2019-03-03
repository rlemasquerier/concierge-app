// @flow
import axios from 'axios';

type FeedRecord = {
  _id: string,
  user: string,
  date: string,
};

export type FetchRecordsAction = {
  type: 'FETCH_RECORDS_SUCCESS',
  payload: FeedRecord[],
};

const createFetchRecordsAction = (payload: FeedRecord[]): FetchRecordsAction => ({
  type: 'FETCH_RECORDS_SUCCESS',
  payload,
});

type Dispatch = (action: FetchRecordsAction) => any;
type ThunkAction = (dispatch: Dispatch) => any;

export const getAllRecords = (): ThunkAction => async (dispatch: Dispatch): any => {
  try {
    const response = await axios.get('http://localhost:3000/feedRecords');
    const result = response.data.result;
    dispatch(createFetchRecordsAction(result));
  } catch (error) {
    throw error;
  }
};
