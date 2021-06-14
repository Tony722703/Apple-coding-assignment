const InitState = {
  myList: [
    {
      title: "Futurama",

      id: 1,

      img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },

    {
      title: "The Interview",

      id: 2,

      img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },

    {
      title: "Gilmore Girls",

      id: 3,

      img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
  ],
  recommendations: [
    {
      title: "Family Guy",

      id: 4,

      img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },

    {
      title: "The Croods",

      id: 5,

      img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },

    {
      title: "Friends",

      id: 6,

      img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  ]
};

const reducer = (state=InitState, action) => {
  console.log("Action received: ");
  console.log(state, action.type);

  switch (action.type) {
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
