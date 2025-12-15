import {
    Typography,
    TextInput,
    Switch,
    FileUpload,
    AnimateHeight,
} from "@components";
import { useId, useState } from "react";

export default function DeviceSelector({ deviceId }) {
    const [isBringDevice, setIsBringDevice] = useState(false);

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
                Device {deviceId}
            </Typography>

            <div className="type-selector">
                <div className="grid">
                    {/* Device Type */}
                    <TextInput
                        label="Device Type"
                        placeholder=""
                        aria-required="true"
                    />

                    {/* Bring Your Own Device */}
                    <div className="device-option">
                        <div className="select flex space-between">
                            <Typography variant="h5" className="secondary">
                                Bringing your own device?
                            </Typography>

                            <Switch
                                checked={isBringDevice}
                                onChange={setIsBringDevice}
                                aria-describedby={toggleDescId}
                                aria-expanded={isBringDevice}
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
                <AnimateHeight open={isBringDevice}>
                    <div
                        className="grid"
                        role="region"
                        aria-label="Bring your own device details"
                    >
                        <TextInput
                            label="Serial Number"
                            placeholder="Enter the serial number of the device"
                        />

                        <div className="device-option">
                            <FileUpload label="Upload an image of the device" />
                        </div>
                    </div>
                </AnimateHeight>
            </div>
        </section>
    );
}
