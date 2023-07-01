import { BATTERIES } from '../batteries';
import './LayoutTile.css';

function LayoutTile({ id }: { id: string }) {
    const { iconColor, length } = BATTERIES[id];
    return <div className="layout__tile" style={{ width: `${length * 5}px`, backgroundColor: `${iconColor}` }}>
    </div>
}

export default LayoutTile
