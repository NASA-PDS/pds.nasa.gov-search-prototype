export const updateSearchInput = (payload) => dispatch => {
    dispatch({
     type: 'UPDATE_SEARCH_INPUT',
     payload
    })
}

export const updateIsSearching = (payload) => dispatch => {
    dispatch({
     type: 'UPDATE_IS_SEARCHING',
     payload
    })
}