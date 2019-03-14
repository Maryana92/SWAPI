import React from 'react';
import { getAllPlanets } from '../service/AllComponents';
import Pagination from '../Common/Pagination';
import DataTable from '../Common/DataTable';

const ColumnConfig = {
 
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: planet => (
      <Link to={`/planets/${planet.name}`}>{planet.name}</Link>
    ),
  },
  diameter: {
    title: 'Diameter',
    isSortable: true,
  },
  rotation_period: {
    title: 'Rotation Period',
    isSortable: true,
  },
  orbital_period: {
    title: 'Orbital Period',
    isSortable: true,
  },
  gravity: {
    title: 'Gravity',
    isSortable: true,
  },
  population: {
    title: 'Population',
    isSortable: true,
  },
  climate: {
    title: 'Climate',
    isSearchable: true,
  },
  surface_water: {
    title: 'Surface Water',
  },
};


class Planets extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      planets: [],
      page: 1,
      count: 0,
      config: planetsColumnConfig,
    };
  }

  async componentDidMount() {
    const { count, results: planets } = await getAllPlanets();

    this.setState({
      planets,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { planets, isLoaded, count, page, config } = this.state;
    return (
      <div>
        <h1 className="title-component">Planets Page</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <DataTable
              className="data-table"
              items={planets}
              config={config}
            />
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}
export default Planets;