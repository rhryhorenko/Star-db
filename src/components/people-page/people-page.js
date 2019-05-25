import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';
import ErrorBoundary from '../error-boundary';

import './people-page.css';
import SwapiService from "../../services/swapi-service";




export default class PeoplePage extends Component {
    swapiService = new SwapiService();


    state = {
        selectedPerson: 1,
    }


    onPersonSelected = (id)=>{
        this.setState({
            selectedPerson: id
        })
    }



  render() {



        const itemList = (
            <ItemList getData = {this.swapiService.getAllPeople}
                      onItemSelected = {this.onPersonSelected}
            >
                {(i)=>`${i.name} (${i.birthYear})`}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundary>
                <PersonDetails personId = {this.state.selectedPerson}/>
            </ErrorBoundary>

                )

      return(
              <Row  left = {itemList}
                    right= {personDetails}
              />
      )

  }
}
