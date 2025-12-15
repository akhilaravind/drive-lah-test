import { Typography, AnimateHeight } from "@components";
import PlanItem from "./PlanItem";


const plans=[
    {
      "planId": "just_mates",
      "name": "Just mates",
      "features": [
        "Bring your own GPS",
        "Mileage reporting to be done by you",
        "In-person key handover to guests"
      ],
      "price": {
        "amount": 0,
        "currency": "USD",
        "period": "month",
        "label": "Free"
      }
    },
    {
      "planId": "good_mates",
      "name": "Good mates",
      "features": [
        "Primary GPS included",
        "Automated mileage calculations",
        "In-person key handover to guests"
      ],
      "price": {
        "amount": 10,
        "currency": "USD",
        "period": "month",
        "label": "$10/month"
      }
    },
    {
      "planId": "best_mates",
      "name": "Best mates",
      "features": [
        "Keyless access technology",
        "Automated mileage calculations",
        "Remote handover to guests"
      ],
      "price": {
        "amount": 30,
        "currency": "USD",
        "period": "month",
        "label": "$30/month"
      }
    }
  ]

export default function Plans({selectedPlan, onChange}) {
    return (
        <section
            className="subscription-management__plan-selector"
            aria-labelledby={'plan-heading'}
        >
            <Typography
                variant="h5"
                id="plan-heading"
                className="secondary font-22"
            >
               Select your plan
            </Typography>

            <div className="plan-selector">
                <div className="grid">
                    {plans.map(plan => <PlanItem key={plan.planId} {...plan} selected={selectedPlan === plan.planId} onSelect={(value)=>onChange('plan', value)} />)}
                </div>

                {/* Conditional Section */}
                <AnimateHeight open={true}>
                    <div
                        className="grid"
                        role="region"
                        aria-label="Bring your own device details"
                    >
                    </div>
                </AnimateHeight>
            </div>

        </section>
    )
}