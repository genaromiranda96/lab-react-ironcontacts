import React from 'react';
import contacts from "./contacts.json";

import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0,5),
    }
  }

  render() {

    const allContacts = [...this.state.contacts]
    return(
        <div className="container-table">
          <h2>IronContacts</h2>
          <table>
              <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                  </tr>
                </thead>
                <tbody>
                {allContacts.map(contact => {
                const {name, popularity, pictureUrl} = contact;

                  return(
                    <tr>
                      <td><img height='100px'src={pictureUrl}/></td>
                      <td>{name}</td>
                      <td>{popularity.toFixed(2)}</td>
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
