import "./App.css";
import React from "react";
import contacts from "./contacts.json";

class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let newContact = contacts[randomIndex];
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.concat(newContact),
      };
    });
  };

  deleteContact = (id) => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.filter(
          (contacts) => contacts.id !== id
        ),
      };
    });
  };

  sortByName = () => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };
    });
  };

  sortByPopularity = () => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort(
          (a, b) => b.popularity - a.popularity
        ),
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr>
                  <td>
                    {" "}
                    <img src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <button onClick={() => this.deleteContact(contact.id)}>
                    Delete Contact
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
