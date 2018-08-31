import PropTypes from 'prop-types';
import qs from 'qs';
import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import { GTMsearchQuery } from '../../utils/digital-analytics.js'

export const query  = graphql`query
SearchIndexQuery {
    siteSearchIndex {
      index
    }
}`;

const getSearch = ({ location }) => {
  if (!location) return '';
  if (!location.search) return '';

  const query = location.search.substring(1);
  const parsed = qs.parse(query);
  if (!parsed.q) return '';
  return parsed.q;
};

var t;
var queryTag;
var queryResults;
var isOn;

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);

    this.updateQuery = evt => {
      const text = evt.target.value;
      const newQuery = qs.stringify({ q: text }, { format: 'RFC1738' });
      const hits = this.getHits(text);
      this.props.onSearch(text, hits);
      this.setState(s => {
        return {
          ...s,
          hits,
          query: text,
        };
      });
    };

    const query = getSearch(props);
    this.state = {
      query,
      hits: this.getHits(query),
    };
  }

  createIndex() {
    this.index = Index.load(this.props.data.index);
  }

  getHits(query) {
    if (!query) return [];

    if (!this.index) this.createIndex();
    const hits = this.index.search(query,{});
    return hits.map(({ ref }) => this.index.documentStore.getDoc(ref));
  }

  componentDidUpdate(){
    isOn = true;
    resetTimer;
    queryTag = this.state.query;
    queryResults = this.state.hits.length;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    function resetTimer() {
        if (isOn) {
        clearTimeout(t);
        t = setTimeout(sendTag, 1000)
        // 1000 milisec = 1 sec
      }
    }
    function sendTag(){
      if(queryTag!=""){
      if (isOn){
        GTMsearchQuery('Search','Query',queryTag,queryResults)
        isOn = false;
      }
      }
    }
  }

  componentWillUnmount(){
    isOn = false;
  }

  render() {
    const { query, hits } = this.state;

    return (
      <div role="search"
      style={{
        padding: 0,
        maxWidth: 540,
        margin: 'auto',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
        <input
          onChange={this.updateQuery}
          placeholder="Search much?"
          style={{
            width: '100%',
            paddingLeft: 10,
            height: 40,
            borderRadius: 5,
            outline: 'none'
          }}
          type="search"
          value={query}
          autoFocus = {true}
        />

      </div>
    );
  }
}

Search.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.object.isRequired,
  }).isRequired,
  onSearch: PropTypes.func.isRequired,
};
