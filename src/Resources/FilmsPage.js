import React from 'react';
import { getAllFilms } from '../service/AllComponents';
import DataTable from '../Common/DataTable';

const ColumnConfig = {
  
  title: {
    title: 'Title',
    isSortable: true,
    isSearchable: true,
    render: film => (
      <Link to={`/films/${film.title}`}>{film.title}</Link>
    ),
  },
  episode_id: {
    title: 'Episode Id',
    isSortable: true,
  },
  opening_crawl: {
    title: 'Opening_crawl',
    isSearchable: true,
  },
  director: {
    title: 'Director',
    isSortable: true,
  },
  producer: {
    title: 'Producer',
    isSortable: true,
  },
  release_date: {
    title: 'Release Date',
  },
};


class Films extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      films: [],
      config: ColumnConfig,
    };
  }

  async componentDidMount() {
    const { results: films } = await getAllFilms();

    this.setState({
      films,
      isLoaded: true,
    });
  }

  render() {
    const { films, isLoaded, config } = this.state;
    return (
      <div>
        <h1 className="title-component">Films Page</h1>
        { isLoaded ? (
          <DataTable
            className="data-table"
            items={films}
            config={config}
          />
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}


export default Films;