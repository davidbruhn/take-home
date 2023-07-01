import { BATTERIES, TRANSFORMER } from "../batteries";

import './Totals.css';

interface Props {
    batteryCounts: Record<string, number>;
}

function Totals({ batteryCounts }: Props) {
    const batteryCount = Object.values(batteryCounts).reduce((a, b) => a + b);
    const transformersRequired = Math.floor(batteryCount / 4);
    const price = Object.entries(batteryCounts).map(([id, count]) => count * BATTERIES[id].cost).reduce((a, b) => a + b) + transformersRequired * TRANSFORMER.cost;
    const energy = Object.entries(batteryCounts).map(([id, count]) => count * BATTERIES[id].energy).reduce((a, b) => a + b) + transformersRequired * TRANSFORMER.cost;
    const landDimension = Object.entries(batteryCounts).map(([id, count]) => BATTERIES[id].length * BATTERIES[id].width * count).reduce((a, b) => a + b) + transformersRequired * TRANSFORMER.length * TRANSFORMER.width;

    return (
        <div className="totals">
            <h2>Total</h2>
            <table>
                <tbody>
                    <tr><td>Energy</td><td>{energy} MWh`</td></tr>
                    <tr><td>Size</td><td>{landDimension} ft²</td></tr>
                    <tr><td>Price</td><td>${price}</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default Totals;
