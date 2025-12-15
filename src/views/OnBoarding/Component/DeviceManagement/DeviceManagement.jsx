import './DeviceManagement.scss'

import Header from '../../Shared/Header/Header';
import DeviceSelector from './components/DeviceSelector';

export default function DeviceManagement(){

    return(
        <div className="device-management__form" style={{overflow:'auto'}}>
            <Header heading="Device management" subHeading="Add details of the device, if any already installed on your car. If none, then continue to next step." />
            <div className="divider" />
            <DeviceSelector deviceId={1} />
            <div className="divider" />
            <DeviceSelector deviceId={2} />
            <div className="divider" />
            <DeviceSelector deviceId={3} />
            <div className="divider" />
            <DeviceSelector deviceId={4} />
        </div>
    )
}