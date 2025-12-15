import { Typography } from "@components";

export default function Header({heading, subHeading}){

    return(
        <div className="management__header">
            <Typography variant="h2" className="primary">{heading}</Typography>
            <Typography variant="h5" className="secondary">{subHeading}</Typography>
        </div>
    )
}