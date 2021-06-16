const InitState = {myList:[],recommendations:[],loading: true};

const reducer = (state=InitState, action) => {
  console.log("Action received: ");
  console.log(state, action.type, action.data);

  switch (action.type) {
    case "SET_DATA":
      let newState=action.data;
      console.log("hi",action.data.recommendations);
      return {...state , myList:action.data.myList, recommendations:action.data.recommendations, loading: false};
    case "REMOVE_ITEM":
      let newLis = state.myList.filter(ele => ele.id !== action.data.id)
      let newRec =[...state.recommendations, action.data];
      return { ...state, myList: newLis, recommendations: newRec };
    case "ADD_ITEM":
      let newRecom = state.recommendations.filter(
        ele => ele.id !== action.data.id
      );
      let newList = [...state.myList, action.data];
      return {
        ...state,
        myList: newList,
        recommendations: newRecom
      };
    default:
      return state;
  }
}

export default reducer;
