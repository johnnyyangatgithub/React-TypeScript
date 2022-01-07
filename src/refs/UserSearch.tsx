import {useState, useRef, useEffect} from 'react';

const users = [
  {name:'Alex', age: 20},
  {name:'Sara', age: 20},
  {name:'Abcd', age: 21},
  {name:'efg', age: 22},
  {name:'higk', age: 20},
  {name:'lmno', age: 20},
  {name:'pqrs', age: 20},
  {name:'tuvw', age: 20}
]

const UserSearch:React.FC = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

  useEffect(() => {
    if(!inputRef.current){
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
    
  }

  return (
    <div>
      UserSearch
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}  />
      <button onClick={onClick}>Find user</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;