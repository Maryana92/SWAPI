import React from 'react';

import DataTable from '../Common/DataTable';
import Pagination from '../Common/Pagination'

import { NavLink } from 'react-router-dom';
import { getAll } from '../api/people';

const peopleColumnConfig = {
  
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: person => (
      <NavLink to={`/people/:${person.id}`}>{person.name}</NavLink>
    ),
  },
  mass: {
    title: 'Mass',
    isSortable: true,
  },
  hair_color: {
    title: 'Hair Color',
  },
  skin_color: {
    title: 'Skin Color',
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
  
};



class PeoplePage extends React.Component {
    state = {
      isLoaded: false,
      people: [],
      config: peopleColumnConfig,
      count: 87,
      page: 0,
    };
  

    // componentDidMount() {
    //   this.updatePageFromURL();
    // }
  
    // componentDidUpdate() {
    //   this.updatePageFromURL();
    // }
  
    // updatePageFromURL() {
    //   const { location } = this.props;
    //   const urlParams = new URLSearchParams(location.search);
    //   const page = +urlParams.get('page') || 1;
  
    //   if (page === this.state.page) {
    //     return;
    //   }
  
    //   this.setState({ page }, this.loadPeople);
    // }
  
    
  
    //   async loadPeople() {
    //     const people = await getAll();
    
    //     this.setState({ 
    //       people,
    //       isLoaded: true, });
    //     console.log(people);
    //   }

    async componentDidMount() {
      const people = await getAll();
  
      this.setState({ 
        people,
        isLoaded: true, });
      console.log(people);
    }
  
    render () {
      const { people, config, isLoaded, count, page  } = this.state;
  
      return (
        <div className="App">
          <h1>PeoplePage</h1>
          { isLoaded ? (
            <>
            <Pagination count={count} page={page} />
          <DataTable
            items={people}
            config={config}
          />
          </>) : (<h1>Loading...</h1>)}
        </div>
      );
    }
  }
  
  

export default PeoplePage;