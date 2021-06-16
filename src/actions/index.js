import axios from 'axios';

export const addItem = item => {
  return {
    type: "ADD_ITEM",
    data: item
  };
}

export const removeItem = item => {
  return {
    type: "REMOVE_ITEM",
    data: item
  };
}

function setData(data) {
  return {
    type: "SET_DATA",
    data: data
  };
}


export const fetchData = () => {

  return function(dispatch) {
    console.log('fetchData');
    // return fetch('data.json')
    //   .then(r => {
    //     console.log(r);
    //     r.json()})
    //   .then(res => {
    //       console.log(res);
    //       dispatch(setData(res));
    //   }).catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
    return axios.get('data.json')
      .then(( res ) => {
        console.log(res.data);
      dispatch(setData(res.data));
    }).catch(function (error) {
    // handle error
    console.log(error);
  });
  };
}
