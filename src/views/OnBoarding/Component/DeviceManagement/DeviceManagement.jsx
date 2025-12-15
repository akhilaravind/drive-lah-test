import React, { useEffect, useState } from 'react';

import Header from '../../Shared/Header/Header';
import DeviceSelector from './components/DeviceSelector';

import './DeviceManagement.scss'
import { useFormValidity } from '../../../../context/FormValidityContext';
import { useFormAction } from '../../../../context/FormActionContext';

const DEVICE_LIMIT = 4;
export default function DeviceManagement(){

    const { addFormData, onBoardFormData  } = useFormValidity();
        const { registerSubmit } = useFormAction();
    
        const [formData, setFormData] = useState(onBoardFormData.device)
    
        const isValid = formData.length;
    
        const handleFormChange = (key, value) => {
            const updatedValues = [...formData];
            updatedValues[key] = {...updatedValues[key], ...value};
            setFormData(updatedValues)
        }
    
        useEffect(() => {
            registerSubmit(async () => {
                if (!isValid) return false;
                addFormData('device', formData)
                return true;
            });
        }, [formData, isValid, addFormData, registerSubmit]);

    return(
        <div className="device-management__form" style={{overflow:'auto'}}>
            <Header heading="Device management" subHeading="Add details of the device, if any already installed on your car. If none, then continue to next step." />
            {Array.from({length: DEVICE_LIMIT}).map((__, idx) =>(
                <React.Fragment key={idx}>
                    <div className="divider" />
                    <DeviceSelector deviceId={idx} deviceValue={formData[idx]} onChange={(formValues)=>handleFormChange(idx, formValues)} />
                </React.Fragment>
            ))}
        </div>
    )
}