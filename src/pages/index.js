import React, { Component } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Quote from '../components/quote';
import ApiServices from '../services/api';

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
      author: ''
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const data = await ApiServices.fetchData();
    this.setState({
      quote: data.quote,
      author: data.author
    });
    
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <Quote 
          quote={this.state.quote}
          author={this.state.author}
        />
      </Layout>
    );
  }
}

export default IndexPage
