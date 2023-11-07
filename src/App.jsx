import { useState } from "react";
import { puppyList } from "./data.js";

import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("Component is rendering...");
  console.log(puppies);

  return (
    <div>
      {puppies.map((puppy) => (
        <p key={puppy.id}>{puppy.name}</p>
      ))}
    </div>
  );
}

export default App;
