import { Activity, lazy, Suspense, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { Navigate, useNavigate } from 'react-router-dom';
import { Typography } from '@components';
import Footer from "./Shared/Footer/Footer";
import SideNav from "./SideNav/SideNav";
import './index.scss';
import { useQueryParams } from "../../hooks/useQueryParams";
import { Button } from "../../components";
import { FormValidityProvider, useFormValidity } from "../../context/FormValidityContext";
import { FormActionProvider } from "../../context/FormActionContext";
import Loader from "./Shared/Loader/Loader";

const Subscription = lazy(() => import("./Component/Subscription/Subscription"))
const DeviceManagement = lazy(() => import("./Component/DeviceManagement/DeviceManagement"))

const menuItems = [
    "Location",
    "About",
    "Features",
    "Rules",
    "Pricing",
    "Promotion",
    "Pictures",
    "Insurance",
    "Subscription",
    "Device",
    "Easy Access",
]
export default function OnBoarding() {
    const view = useQueryParams('view');
    const navigate = useNavigate();
    const { setCanProceed } = useFormValidity();
    const isMenuAvailable = menuItems.find(menu => menu.toLowerCase() === view);
    const index = menuItems.findIndex((item) => item.toLowerCase() === view?.toLowerCase());

    const navVisited = index >= 0 ? menuItems.slice(0, index) : [];

    const handleBack = () => {
        navigate(`${location.pathname}?view=subscription`)
    }

    const goNext = () => {
        const currentIndex = menuItems.findIndex(menu => menu.toLowerCase() === view.toLowerCase());
        if(currentIndex !== menuItems.length -1){
            navigate(`${location.pathname}?view=${(menuItems[currentIndex+1]).toLowerCase()}`)
        }
    };

    const onBoardForms = {
        subscription: Subscription,
        device: DeviceManagement
    }

    const FormComponent = onBoardForms[view];

    useEffect(() => {
        setCanProceed(false);
    }, [view, setCanProceed]);

    if (!isMenuAvailable) {
        return <Navigate to={`${location.pathname}?view=subscription`} replace />;
    }

    return (
        <div className="onboard-management-container">
            <FormActionProvider>
                <div className="container">
                    <div className="flex gap-3">
                        <SideNav navVisited={navVisited} />
                        <FormValidityProvider>
                            <Suspense fallback={<Loader />}>
                                <AnimatePresence mode="wait">
                                    {FormComponent ? (
                                        <motion.div
                                            key={view} // IMPORTANT: triggers animation on change
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -12 }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                        >
                                            <FormComponent />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="fallback"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <div className="empty-state">
                                                <Typography variant="h2" className="primary">No content</Typography>
                                                <p>The requested information is currently unavailable.</p>

                                                <Button variant="primary" onClick={handleBack}>
                                                    Go to Subscription
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Suspense>
                        </FormValidityProvider>
                    </div>
                </div>
                <Activity mode={FormComponent ? 'visible' : 'hidden'}>
                    <Footer onNext={goNext} />
                </Activity>
            </FormActionProvider>
        </div>
    )
}