import LayoutTile from './LayoutTile';
import { BATTERIES, TRANSFORMER } from '../batteries';
import './Layout.css';

function Layout({ batteryCounts, transformerCount }: { batteryCounts: Record<string, number>, transformerCount: number }) {

    const batteries = Object.entries(batteryCounts).map(([id, count]) => Array(count).fill(id)).flat();
    const transformers = Array(transformerCount).fill(TRANSFORMER.id);
    const tiles = batteries.concat(transformers).map((id, i) => <LayoutTile device={BATTERIES[id] ?? TRANSFORMER} key={i} />)
    return (
        <div className="layout">
            <h2>Example layout</h2>
            <div className='layout__tiles'>
                {tiles.length ? tiles : <i>Choose batteries to see an example of a layout</i>}
            </div>
        </div>
    )
}

export default Layout
