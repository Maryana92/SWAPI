import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    url: 'https://starwars-visualguide.com/assets/img/categories/character.jpg',
    title: 'People',
    id: 1,
  },
  {
    url: 'https://starwars-visualguide.com/assets/img/categories/films.jpg',
    title: 'Films',
    id: 2,
  },
  {
    url: 'https://starwars-visualguide.com/assets/img/categories/planets.jpg',
    title: 'Planets',
    id: 3,
  },
  {
    url: 'https://starwars-visualguide.com/assets/img/categories/species.jpg',
    title: 'Species',
    id: 4,
  },
  {
    url: 'https://starwars-visualguide.com/assets/img/categories/starships.jpg',
    title: 'Starships',
    id: 5,
  },
  {
    url: 'https://starwars-visualguide.com/assets/img/categories/vehicles.jpg',
    title: 'Vehicles',
    id: 6,
  },
];

const HomePage = () => (
  <div className="home_page-container">
    {categories.map(({ title, url, id }) => (
      <div
        className="home_page-category"
        key={id}
      >
        <h3 className="title-image">{title}</h3>
        <NavLink to={title.toLowerCase()}>
          <img src={url} alt={title} />
        </NavLink>
      </div>
    ))}

  </div>
);

export default HomePage;