import { useState } from 'react'
import * as _ from 'lodash-es';
import Layout from './components/Layout';
import './App.css';
import { BATTERIES, TRANSFORMER } from "./batteries";

function App() {
  const [batteryCounts, setBatteryCount] = useState(_.mapValues(BATTERIES, () => 0));

  const tableRows = Object.values(BATTERIES).map(({ name, id }) => <tr key={name}><td>{name}</td><td>{BATTERIES[id].energy} MWh</td><td>{BATTERIES[id].length * BATTERIES[id].width} ft²</td><td><input className="input" type="number" min="0" onInput={(newCount: React.ChangeEvent<HTMLInputElement>) => setBatteryCount({ ...batteryCounts, [id]: newCount.target.valueAsNumber })} value={batteryCounts[id]} /></td><td>${BATTERIES[id].cost}</td></tr>);

  const batteryCount = Object.values(batteryCounts).reduce((a, b) => a + b);
  const transformerCount = Math.floor(batteryCount / 4);

  const price = Object.entries(batteryCounts).map(([id, count]) => count * BATTERIES[id].cost).reduce((a, b) => a + b) + transformerCount * TRANSFORMER.cost;
  const energy = Object.entries(batteryCounts).map(([id, count]) => count * BATTERIES[id].energy).reduce((a, b) => a + b) + transformerCount * TRANSFORMER.energy;
  const landDimension = Object.entries(batteryCounts).map(([id, count]) => BATTERIES[id].length * BATTERIES[id].width * count).reduce((a, b) => a + b) + transformerCount * TRANSFORMER.length * TRANSFORMER.width;

  return (
    <div className="devices">
      <h1>Configuration builder</h1>
      <h2>Choose number of batteries</h2>
      <table className='table'>
        <colgroup>
          <col />
          <col className="numeric" />
          <col className="numeric" />
          <col className="numeric" />
          <col />
        </colgroup>
        <thead>
          <tr><th>Battery</th><th className='numeric'>Energy</th><th className='numeric'>Size</th><th className='numeric'>Quantity</th><th className='numeric'>Cost</th></tr>
        </thead>
        <tbody>
          {tableRows}
          <tr><td>Transformer</td><td>-.25 MWh</td><td>100 ft²</td><td>{transformerCount} (<i>1 per 4 batteries</i>)</td><td>${TRANSFORMER.cost}</td></tr>
        </tbody>
        <tfoot>
          <tr><td>Total</td><td>{energy} MWh</td><td>{landDimension} ft²</td><td>{transformerCount + batteryCount}</td><td>${price}</td></tr>
        </tfoot>
      </table>
      <Layout batteryCounts={batteryCounts} transformerCount={transformerCount} />
    </div>
  )
}

export default App
