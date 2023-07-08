import { Device } from '../types';
import './LayoutTile.css';

function LayoutTile({ device }: { device: Device }) {
    return <div className="layout__tile" style={{ width: `${device.length * 10}px` }}>{ device.name }
    </div>
}

export default LayoutTile
