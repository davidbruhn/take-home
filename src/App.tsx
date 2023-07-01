import { useState } from 'react'
import * as _ from 'lodash-es';
import Layout from './components/Layout';
import Totals from './components/Totals';
import './App.css';
import { BATTERIES } from "./batteries";

function App() {
  const [batteryCounts, setBatteryCount] = useState(_.mapValues(BATTERIES, () => 0));

  const tableRows = Object.values(BATTERIES).map(({ name, id }) => <tr key={name}><td>{name}</td><td>{BATTERIES[id].energy} MWh</td><td>{BATTERIES[id].length}ft by {BATTERIES[id].width}ft</td><td><input className="input" type="number" min="0" onInput={(newCount: React.ChangeEvent<HTMLInputElement>) => setBatteryCount({ ...batteryCounts, [id]: newCount.target.valueAsNumber })} value={batteryCounts[id]} /></td></tr>);

  return (
      <div className="devices">
        <h1>Select batteries</h1>
        <table>
          <thead>
            <tr><th>Battery</th><th>Energy</th><th>Size</th><th>Quantity</th></tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>

        <Totals batteryCounts={batteryCounts} />
        <Layout batteryCounts={batteryCounts} />
      </div>
  )
}

export default App
