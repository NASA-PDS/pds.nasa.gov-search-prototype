import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';

class SearchResults extends Component {
    componentDidMount() {
    }

    render() {
        console.log("results", this.props);
        let docs = [];
        if(this.props.appReducer.searchResults && 
            this.props.appReducer.searchResults.response &&
            this.props.appReducer.searchResults.response.docs){
                docs = this.props.appReducer.searchResults.response.docs;
        }

        let searchResults = docs.map((doc, index) => 
            <SearchResult key={index} {...doc} index={index}></SearchResult>
        );

        if(docs.length < 1){
            searchResults = <div className="noResultsMessage">No Results Found.</div>
        }
        
        return (
            <div className="searchResults">
                {searchResults}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(SearchResults);  