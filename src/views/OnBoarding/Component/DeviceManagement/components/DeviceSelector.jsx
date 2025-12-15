import {
    Typography,
    TextInput,
    Switch,
    FileUpload,
    AnimateHeight,
} from "@components";
import { useId } from "react";

export default function DeviceSelector({ deviceId, deviceValue, onChange }) {

    // Accessible IDs
    const sectionId = useId();
    const toggleDescId = useId();

    return (
        <section
            className="device-management__device-selector"
            aria-labelledby={sectionId}
        >
            <Typography
                id={sectionId}
                variant="h5"
                className="secondary font-22"
            >
                Device {deviceId+1}
            </Typography>

            <div className="type-selector">
                <div className="grid">
                    {/* Device Type */}
                    <TextInput
                        label="Device Type"
                        name="deviceType"
                        placeholder="Enter device type"
                        aria-required="true"
                        value={deviceValue?.deviceType ?? ''}
                        onChange={(e)=>onChange({'deviceType': e.target.value})}
                    />

                    {/* Bring Your Own Device */}
                    <div className="device-option">
                        <div className="select flex space-between">
                            <Typography variant="h5" className="secondary">
                                Bringing your own device?
                            </Typography>

                            <Switch
                                checked={!!deviceValue?.isBringDevice}
                                onChange={(value)=>onChange({'isBringDevice': value})}
                                aria-describedby={toggleDescId}
                                aria-expanded={!!deviceValue?.isBringDevice}
                                name="isBringDevice"
                            />
                        </div>

                        <Typography
                            id={toggleDescId}
                            variant="p"
                            className="secondary"
                        >
                            Toggle this on if you're bringing your own device. Leave it off if
                            Drive mate is to provide the device.
                        </Typography>
                    </div>
                </div>

                {/* Conditional Section */}
                <AnimateHeight open={!!deviceValue?.isBringDevice}>
                    <div
                        className="grid"
                        role="region"
                        aria-label="Bring your own device details"
                    >
                        <TextInput
                            label="Serial Number"
                            placeholder="Enter the serial number of the device"
                            name="deviceSerialNo"
                            value={deviceValue?.deviceSerialNo ?? ''}
                            onChange={(e)=>onChange({'deviceSerialNo': e.target.value})}
                        />

                        <div className="device-option">
                            <FileUpload label="Upload an image of the device" value={deviceValue?.deviceImage ?? ''} onChange={(file) => onChange('deviceImage', file)} />
                        </div>
                    </div>
                </AnimateHeight>
            </div>
        </section>
    );
}
