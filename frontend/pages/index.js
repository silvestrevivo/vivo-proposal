import React, { Component } from 'react'
import Link from 'next/link';
import DisplayError from '../components/ErrorMessage';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_ALL_USERS = gql`
  query{
    getAllUsers{
      name
      category
      description
      instructions
      instructions
      createdDate
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Query query={GET_ALL_USERS}>
          {
            ({ data, loading, error }) => {
              if (loading) return <div>Loading...</div>
              if (error) return <DisplayError />
              console.log('data', data.getAllUsers)
              return (
                <div>
                  {
                    data.getAllUsers.map(item => {
                      return (
                        <li key={item.name}>
                          <span>{item.name}</span>, <span>{item.description}</span>, <span>{item.category}</span>, <span>{item.instructions}</span>, <span>{item.createdDate}</span></li>
                      )
                    })
                  }
                </div>
              )
            }
          }
        </Query>
      </div>
    )
  }
}

export default Home
