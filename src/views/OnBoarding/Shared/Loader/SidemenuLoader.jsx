import "./Loader.scss";

export default function SidemenuLoader() {
    const items = Array.from({ length: 9 });

    return (
        <div className="sidenav-skeleton">
            {items.map((_, i) => (
                <div key={i} className="sidenav-skeleton__item">
                    {/* Left active indicator placeholder */}
                    <div className="skeleton skeleton--indicator" />

                    {/* Text */}
                    <div className="skeleton skeleton--text" />

                    {/* Status icon */}
                    <div className="skeleton skeleton--icon" />
                </div>
            ))}
        </div>
    );
}
