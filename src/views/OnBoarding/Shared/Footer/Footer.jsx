import { Button } from '@components'
import './Footer.scss'
// import { useFormValidity } from '../../../../context/FormValidityContext';
import { useFormAction } from '../../../../context/FormActionContext';
import toast from 'react-hot-toast';


export default function Footer({ onNext }) {
    const { triggerSubmit, isSubmitting } = useFormAction();

    const handleNext = async () => {
        const success = await triggerSubmit();
        if (success){
            toast.success('Form valid, moving to next');
            onNext();
        }
        else{
            toast.error('Please fill all the fields to continue')
        }
    };

    return (
        <footer className="device-management__footer">
            <div className="container">
                <Button variant='secondary' disabled={ isSubmitting}  onClick={handleNext}>Next</Button>
            </div>
        </footer>
    )
}