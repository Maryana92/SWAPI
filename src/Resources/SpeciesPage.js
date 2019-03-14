import React from 'react';
import { getAllSpecies } from '../service/AllComponents';
import Pagination from '../Common/Pagination';
import DataTable from '../Common/DataTable';

const ColumnConfig = {
  
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: spacies => (
      <Link to={`/spacies/${spacies.name}`}>{spacies.name}</Link>
    ),
  },
  classification: {
    title: 'Classification',
    isSortable: true,
  },
  designation: {
    title: 'Designation',
    isSortable: true,
  },
  average_height: {
    title: 'Average_height',
    isSortable: true,
  },
  average_lifespan: {
    title: 'Average Lifespan',
    isSortable: true,
  },
  hair_colors: {
    title: 'Hair Colors',
    isSortable: true,
    isSearchable: true,
  },
  skin_colors: {
    title: 'Skin Colors',
    isSortable: true,
    isSearchable: true,
  },
  language: {
    title: 'Language',
    isSearchable: true,
  },
};


class Species extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      species: [],
      page: 1,
      count: 0,
      config: speciesColumnConfig,
    };
  }

  async componentDidMount() {
    const { count, results: species } = await getAllSpecies();

    this.setState({
      species,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { species, isLoaded, count, page, config } = this.state;
    return (
      <div>
        <h1 className="title-component">Species Page</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <DataTable
              className="data-table"
              items={species}
              config={config}
            />
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}

export default Species;