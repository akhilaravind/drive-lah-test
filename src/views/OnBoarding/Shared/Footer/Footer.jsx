import { Button } from '@components'
import './Footer.scss'
// import { useFormValidity } from '../../../../context/FormValidityContext';
import { useFormAction } from '../../../../context/FormActionContext';


export default function Footer({ onNext }) {
    // const { canProceed } = useFormValidity();

    const { triggerSubmit, isSubmitting } = useFormAction();

    const handleNext = async () => {
        const success = await triggerSubmit();
        if (success) onNext();
    };

    return (
        <footer className="device-management__footer">
            <div className="container">
                <Button variant='secondary' disabled={ isSubmitting}  onClick={handleNext}>Next</Button>
            </div>
        </footer>
    )
}