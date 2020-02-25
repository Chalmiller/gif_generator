import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import GifItem from './GifItem';


const Gif_Query = gql`
query GifQuery {
    search {
        data {
          id,
          title,
          url,
          embed_url
        }
    }
}
`;

class Gifs extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="display-4 my-3">Gifs</h1>
                <Query query={Gif_Query}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error);
                            console.log(data);
                            return <React.Fragment>
                                {
                                    data.search.data.map(gif => (
                                        <GifItem key={gif.id} gif={gif} />
                                        )
                                    )
                                }
                            </React.Fragment>
                        }
                    }
                </Query>
            </React.Fragment>
        );
    }
}

export default Gifs;
