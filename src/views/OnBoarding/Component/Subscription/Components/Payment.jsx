import { CreditCardInput, Typography } from "@components";

export default function Payment({onChange, cardInfo}){

    return(
        <div className="subscription-management__payment">
            <Typography
                variant="h5"
                id="plan-heading"
                className="secondary font-22"
            >
                Add card details
            </Typography>
            <CreditCardInput value={cardInfo} onChange={value =>onChange('cardInfo', value)} />
        </div>
    )
}