import LayoutTile from './LayoutTile';
import './Layout.css';

function Layout({ batteryCounts }: { batteryCounts: Record<string, number> }) {

    const batteries = Object.entries(batteryCounts).map(([id, count]) => Array(count).fill(id)).flat();
    const tiles = batteries.map((id, i) => <LayoutTile id={id} key={i} />)

    return (
        <div className="layout">
            <h2>Layout</h2>
            <div className='layout__tiles'>
                {tiles}
            </div>
        </div>
    )
}

export default Layout
