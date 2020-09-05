import React from 'react';
import Header from "./components/Header";
import Headline from "./components/Headline";

import "./App.scss";

const temp =
  [
    {
      fName: "Joe",
      email: "jdhgvh@hvhd.gg",
      age: 22,
      online: true
    }
  ];

function App ()
{
  return (
    <div>
      <Header />
      <main>
        <Headline tempArr={ temp } header="posts" desc="Click to render posts" />
      </main>
    </div>
  );
}

export default App;
