import React, { Component } from 'react'
import Meta from '../components/Meta';
import Header from '../components/Header';
import ParagraphStyles from './styles/ParagraphStyles';

export default class Pages extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <ParagraphStyles>This will be on every page (Pages Component) - to create different layouts</ParagraphStyles>
        {this.props.children}
      </div>
    )
  }
}
