import ReactDOM from 'react-dom';
import UserSearch from './refs/UserSearch';
import EventComponent from './events/EventComponent';
import GuestList from './state/GuestList';

const App = () => {
  return (
    <div>
      <UserSearch />
      <hr />
      <EventComponent />
      <hr />
      <GuestList />
      <hr />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));