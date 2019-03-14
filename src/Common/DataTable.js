import React from 'react';

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortColumn: null,
      sortAsc: true,
    };
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.getSortedItems = this.getSortedItems.bind(this);
  }

  getSortedItems() {
    const { sortColumn, sortAsc } = this.state;
    const { items } = this.props;

    if (!sortColumn) {
      return items;
    }

    const sign = sortAsc ? 1 : -1;
    const sortFn = typeof items[0][sortColumn] === 'number'
      ? (a, b) => sign * (a[sortColumn] - b[sortColumn])
      : (a, b) => sign * a[sortColumn].localeCompare(b[sortColumn]);

    return items.sort(sortFn);
  }

  handleHeaderClick(key) {
    if (!this.props.config[key].isSortable) {
      return;
    }

    this.setState(({ sortColumn, sortAsc }) => ({
      sortColumn: key,
      sortAsc: sortColumn === key ? !sortAsc : true,
    }));
  }

  render() {
    const visibleItems = this.getSortedItems();
    const { config } = this.props;

    return (
      <div className="Datatable">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              { Object.entries(config).map(([key, value]) => (
                <th
                  key={key}
                  className={value.isSortable ? 'sortable-column' : ''}
                  onClick={() => this.handleHeaderClick(key)}
                >
                  {value.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {visibleItems.map(item => <Row key={item.name} item={item} config={config} />)}
          </tbody>
        </table>
      </div>
    );
  }
}
const Row = ({ item, config }) => (
  <tr>
    { Object.keys(config).map(key => (
      <Cell
        key={key}
        item={item}
        column={key}
        render={config[key].render}
      />
    ))}
  </tr>
);
const Cell = ({ item, column, render }) => (
  <td>{render ? render(item) : item[column] }</td>
);
export default DataTable;