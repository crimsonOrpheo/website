import PropTypes from 'prop-types';
import qs from 'qs';
import React, { Component } from 'react';
import { Index } from 'elasticlunr';

const getSearch = ({ location }) => {
  if (!location) return '';
  if (!location.search) return '';

  const query = location.search.substring(1);
  const parsed = qs.parse(query);
  if (!parsed.q) return '';
  return parsed.q;
};

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
    const hits = this.index.search(query);
    return hits.map(({ ref }) => this.index.documentStore.getDoc(ref));
  }

  render() {
    const { query, hits } = this.state;

    return (
      <div role="search"
      style={{
        padding: 10,
        maxWidth: 540,
        margin: 'auto'
      }}>
        <input
          onChange={this.updateQuery}
          placeholder="What are you waiting for?"
          style={{
            width: '100%',
            paddingLeft: 4
          }}
          type="search"
          value={query}
          ref={input => input && input.focus()}
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
