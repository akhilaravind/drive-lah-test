import { Typography } from "@components";
import lockIcon from '@/assets/icons/lock.svg'
import guageIcon from '@/assets/icons/guage.svg'
import locationIcon from '@/assets/icons/location.svg';

const icons = {
    0: locationIcon,
    1: guageIcon,
    2: lockIcon
}

const currency = {
    usd: "$",
    eur: "€",
    gbp: "£",
    jpy: "¥",
    inr: "₹"
}
export default function PlanItem(props){

    return(
        <div className={`plan-item__wrapper ${props.selected ? 'selected':''}`} onClick={()=> props.onSelect(props.planId)}>
            <div className="plan-item__heading">
                <Typography variant="h5" className="primary font-22">{props.name}</Typography>
            </div>
            <div className="plan-item__features">
                <ul>
                    {props.features.map((feature, index) =>(
                        <li key={index}>
                            <span><img height={16} width={12} src={icons[index]} alt={feature} /></span>
                            <Typography variant="p" className="font-14">{feature}</Typography>
                        </li>

                    ))}
                </ul>
            </div>
            {props.price.amount === 0 ? <Typography variant="h4" className="primary">Free</Typography> :
            <div className="flex">
                <Typography variant="h4" className="primary">{`${currency[props.price.currency.toLowerCase()]}${props.price.amount}`}</Typography>
                <Typography variant="p" className="primary" style={{lineHeight:2.5}}>/{props.price.period}</Typography>
            </div>}
            
        </div>
    )

}