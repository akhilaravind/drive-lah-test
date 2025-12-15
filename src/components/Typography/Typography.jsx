import "./Typography.scss";

const Typography = ({ variant = "p", className, children, ...props }) => {
    const Component = variant;

    return (
        <Component className={`typography typography--${variant} ${className}`} {...props}>
            {children}
        </Component>
    );
};

export default Typography;
