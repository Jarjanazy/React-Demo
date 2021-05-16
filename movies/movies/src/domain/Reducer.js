const reduce = (currentState, action) => {
    switch(action.type){
      case "show_searched_movies":
        return {movies : action.movies};

      default:
        throw new Error();
    }
  }

  export default reduce;