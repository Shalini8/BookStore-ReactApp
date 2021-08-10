const initialState = {
    bookData: "",
  };
  
  function bookDesReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
      case "BookDesc":
        return {
          bookData: action.bookData,
        };
        
    default:
        return state;
    }
  }
  
  export default bookDesReducer;