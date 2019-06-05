import React, {Component} from 'react';
import { Colum } from "rbx";

class ListRestaurants extends Component {
  render() {
    return (
    <div className="Restaurants-list">
      <h2 className="title is-size-4">Restaurantes</h2>

      <Column.Group multiline gapSize={2}>
        Restaurants...
      </Column.Group>
    </div>
    )
  }
}
