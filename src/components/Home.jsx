import { useState } from 'react';
import List from './List';

const Home = () => {
  const [input, setInput] = useState('');

  return (
    <div className="db-input__box">
      <div className="db-input">
        <label className="db-input__label">
          Search your favorite cocktail
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="db-input__input"
            type="text"
            placeholder="start typing..."
          ></input>
        </label>
      </div>
      <List searchParams={input} />
    </div>
  );
};

export default Home;
