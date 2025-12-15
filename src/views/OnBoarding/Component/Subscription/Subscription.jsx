import { Activity, useEffect, useState } from 'react'
import Header from '../../Shared/Header/Header'
import Addons from './Components/Addons'
import MoreInfo from './Components/MoreInfo'
import Plans from './Components/Plans'
import './Subscription.scss'
import { AnimateHeight } from '../../../../components'
import Payment from './Components/Payment'
import { useFormValidity } from '../../../../context/FormValidityContext'
import { useFormAction } from '../../../../context/FormActionContext'

export default function Subscription() {
    const { addFormData, onBoardFormData  } = useFormValidity();
    const { registerSubmit } = useFormAction();

    const [formData, setFormData] = useState(onBoardFormData.subscription)

    const hasAddon = Boolean(formData.addon?.trim());

    const hasCardInfo =
        formData.cardInfo.cardNumber.trim() !== "" &&
        formData.cardInfo.expiry.trim() !== "" &&
        formData.cardInfo.cvc.trim() !== "";

    const hasPlan = formData.plan.trim() !== "";

    const isValid = hasAddon ? hasCardInfo : hasPlan;

    const handleFormChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            addon: key === 'plan' ? '' : prev.addon,
            [key]: value,
        }))
    }

    useEffect(() => {
        registerSubmit(async () => {
            if (!isValid) return false;
            addFormData('subscription', formData)
            return true;
        });
    }, [formData, isValid, addFormData, registerSubmit]);

    return (
        <div className="subscription-management__form" style={{ overflow: 'auto' }}>
            <Header heading="Subscription plan" subHeading="Select the ideal subscription plan for your listing." />
            <div className="divider" />
            <Plans selectedPlan={formData.plan} onChange={handleFormChange} />
            <AnimateHeight open={formData.plan}>
                <Activity mode={formData.plan ? 'visible' : 'hidden'}>
                    <div className="divider"></div>
                    <Addons selectedPlan={formData.plan} onChange={handleFormChange} selectedAddon={formData.addon} />
                </Activity>
            </AnimateHeight>
            <AnimateHeight open={(formData.plan && formData.addon)}>
                <Activity mode={(formData.plan && formData.addon) ? 'visible' : 'hidden'}>
                    <div className="divider" />
                    <Payment cardInfo={formData.cardInfo} onChange={handleFormChange} />
                </Activity>
            </AnimateHeight>
            <div className="divider" />
            <MoreInfo />
        </div>
    )
}