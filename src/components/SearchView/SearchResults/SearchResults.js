import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import SearchFacetGroup from '../SearchFacets/SearchFacetGroup';
import ProductLevelSuggestions from '../ProductLevelSuggestions/ProductLevelSuggestions';
import { Route } from 'react-router-dom';

class SearchResults extends Component {
    componentDidMount() {
    }

    render() {
        let results = [];
        if(this.props.appReducer.searchResults && 
            this.props.appReducer.searchResults.response &&
            this.props.appReducer.searchResults.response.docs){
                results = this.props.appReducer.searchResults.response.docs;
        }

        let searchResults = results.map((result, index) => 
            <SearchResult key={index} {...result} index={index}></SearchResult>
        );

        let facets = [];
        if(this.props.appReducer.searchResults &&
            this.props.appReducer.searchResults.facet_fields){
                
                this.props.appReducer.facets.forEach((facet, index) => {
                    let facetItems = this.props.appReducer.searchResults.facet_fields[facet.title];
                    let facetGroup = <Route path="/" render={(props) => 
                        <SearchFacetGroup {...props} key={index} title={facet.title} facetItems={facetItems} value={facet.value}/>
                    }/>;
                    facets.push(facetGroup);
                });
        } 

        if(results.length < 1){
            searchResults = <div className="noResultsMessage">No Results Found.</div>
        }
        
        return (
            <div className="searchResults">
                <div className="columns">
                    <div className="facetsColumn">
                        {facets}
                    </div>
                    <div>
                        {searchResults}
                    </div>
                    <div className="productLevelSuggestionsColumn">
                        <ProductLevelSuggestions></ProductLevelSuggestions>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(SearchResults);  