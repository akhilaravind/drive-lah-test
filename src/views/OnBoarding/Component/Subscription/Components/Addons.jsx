import { Typography, RadioButton } from "@components";
import { Activity } from "react";
 
export default function Addons({selectedPlan, onChange, selectedAddon}){
    
    return(
        <div className="subscription-management__addons">
             <Typography
                variant="h5"
                id="plan-heading"
                className="secondary font-22"
            >
                Select add-ons for your subscription
            </Typography>
            <div className="subscription-management__addons__option">
                <RadioButton
                    name="byo_gps"
                    value="byo_gps"
                    label="BYO secondary GPS - $5/month"
                    checked={selectedAddon === 'byo_gps'}
                    onChange={(value) =>onChange('addon', value)}
                    style={selectedPlan === 'just_mates' ? {width:'450px'} : {}}
                />
                <Activity mode={selectedPlan === 'good_mates' ? 'visible' : 'hidden' }>
                    <RadioButton
                        name="byo_lockbox"
                        value="byo_lockbox"
                        label="BYO lockbox - $10/month"
                        onChange={(value) =>onChange('addon', value)}
                        checked={selectedAddon === 'byo_lockbox'}
                    />
                </Activity>
                <Activity mode={selectedPlan === 'best_mates' ? 'visible' : 'hidden' }>
                    <RadioButton
                        name="trip_insurance"
                        value="trip_insurance"
                        label="Between trip insurance"
                        highlightText="Coming soon"
                        onChange={(value) =>onChange('addon', value)}
                        checked={selectedAddon === 'trip_insurance'}
                    />
                </Activity>
            </div>
        </div>
    )
}