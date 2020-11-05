import React from 'react'
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout'


function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>

    </div>
  );
}

export default App;
