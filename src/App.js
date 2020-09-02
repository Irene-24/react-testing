import React from 'react';
import Header from "./components/Header";
import Headline from "./components/Headline";

import "./App.scss";

function App ()
{
  return (
    <div>
      <Header />
      <main>
        <Headline header="posts" desc="Click to render posts" />
      </main>
    </div>
  );
}

export default App;
