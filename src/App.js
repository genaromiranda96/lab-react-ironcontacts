import React from 'react';
import contacts from "./contacts.json";

import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0,5),
      allcontacts: contacts,
    }
  }
  

  handleActor = () => {
    const oldsActor = [...this.state.contacts];
    const randomActor = this.state.allcontacts[Math.floor(Math.random() * oldsActor.length)];
    oldsActor.push(randomActor);
    this.setState({
      contacts: oldsActor,
    })
  }

  SortActor = () => {
    const newSortContacts = [...this.state.contacts];
    newSortContacts.sort((a,b) => {
      if(a.name > b.name) {
        return 1;
      } if(a.name < b.name) {
        return -1;
      }
      return
    });
    this.setState({
      contacts: newSortContacts,
    })
  }

  
  SortPopularity = () => {
    const newSortContacts = [...this.state.contacts];
    newSortContacts.sort((a,b) => a.popularity - b.popularity);
    this.setState({
      contacts: newSortContacts,
    })
  }
  
  handleDelete = (event) => {
    const newArray = this.state.contacts.filter((a) => a.id !== event);
    this.setState({
      contacts: newArray,
    });
  };

  
  render() {

    return(
        <div className="container-table">
          <h2>IronContacts</h2>
          <div style={{ padding: '20px'}}> 
              <button onClick={this.handleActor}>Add random Contact</button>
              <button onClick={this.SortActor}>Sorty by name</button>
              <button onClick={this.SortPopularity}>Sort by popularity</button>
          </div>
          <table>
              <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.contacts.map((contact, index) => {

                  return(
                    <tr>
                      <td><img height='100px'src={contact.pictureUrl}/></td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity.toFixed(2)}</td>
                      <td><button onClick={ () => this.handleDelete(contact.id)}>Delete</button></td>
                    </tr>
                  ) 
            }
          )
        }
                  </tbody>
            </table>
        </div>
    )
  }
} 

export default App;
