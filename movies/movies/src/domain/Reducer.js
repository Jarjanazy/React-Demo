const reduce = (currentState, action) => {
    switch(action.type){
      case "search_movie":
        return {movie : action.movie};
      
      default:
        throw new Error();
    }
  }

  export default reduce;