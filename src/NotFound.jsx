import { useNavigate } from "react-router";
import { Button, Typography } from "./components";

export default function NotFound(){
    const navigate = useNavigate();

    const goBack=()=>{
        navigate(`/onboarding?view=subscription`)

    }
    return(
        <div className="not-found__wrapper">
            <div className="container">
                <Typography variant="h1" className="primary" >404</Typography>
                <Typography variant="h4" className="primary" >Sorry, we couldn't find that page.</Typography>
                <Typography variant="h5" className="secondary" >We can't find the page or car you're looking for. Make sure you've typed in the URL correctly or try searching Drive lah.</Typography>
                <div className="flex" style={{alignItems:'center', justifyContent:'center', marginTop:'40px'}} onClick={goBack}>
                    <Button>Onboard User</Button>
                </div>
            </div>
        </div>
    )
}