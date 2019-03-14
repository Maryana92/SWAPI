import React from 'react';
import getComponents from '../Common/api';
import Pagination from '../Common/Pagination';
import DataTable from '../Common/DataTable';
import { Link } from 'react-router-dom';

const ColumnConfig = {
  
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: person => (
      <Link to={`/people/${person.name}`}>{person.name}</Link>
    ),
  },
  mass: {
    title: 'Mass',
    isSortable: true,
  },
  hair_color: {
    title: 'Hair Color',
  },
  birth_year: {
    title: 'Born',
    isSortable: true,
  },
  gender: {
    title: 'Gender',
  },
  height: {
    title: 'Height',
  },
  species: {
    title: 'Species',
  },
  homeworld: {
    title: 'Homeworld ',
  },
  skin_color: {
    title: 'Skin Color',
  },
};



class PeoplePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      people: [],
      page: 1,
      count: 0,
      config: ColumnConfig,
    };
  }

  getAllPeople = () => {
    return getComponents('/people/');
  };

  async componentDidMount() {
    const { count, results: people } = await this.getAllPeople();

    this.setState({
      people,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { people, isLoaded, count, page, config } = this.state;
    return (
      <div>
        <h1 className="title-component">People Page</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <DataTable
              className="data-table"
              items={people}
              config={config}
            />
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}

export default PeoplePage;