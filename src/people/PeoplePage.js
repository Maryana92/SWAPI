import React from 'react';

import DataTable from '../Common/DataTable';
import { Link } from 'react-router-dom';
import { getAll } from '../api/people';

const peopleColumnConfig = {
  
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
    state = {
      people: [],
      config: peopleColumnConfig,
    };
  
    async componentDidMount() {
      const people = getAll();
  
      this.setState({ people });
    }
  
    render () {
      const { people, config } = this.state;
  
      return (
        <div className="App">
          <h1>Datatable</h1>
          <DataTable
            items={people}
            config={config}
          />
        </div>
      );
    }
  }
  
  

export default PeoplePage;