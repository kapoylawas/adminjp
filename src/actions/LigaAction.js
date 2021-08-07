import FIREBASE from '../config/FIREBASE';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_LIST_LIGA = 'GET_LIST_LIGA';

export const getListLiga = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_LIGA);

    FIREBASE.database()
      .ref('ligas')
      .once('value', (querySnapshot) => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_LIGA, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_LIGA, error);
        alert(error);
      });
  };
};