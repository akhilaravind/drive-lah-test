import "./Loader.scss";

export default function Loader() {
    return (
        <div className="dm-skeleton">
            {/* Header */}
            <div className="dm-skeleton__header">
                <div className="skeleton skeleton--title" />
                <div className="skeleton skeleton--subtitle" />
            </div>

            {[1, 2, 3].map((i) => (
                <div key={i} className="dm-skeleton__card">
                    <div className="skeleton skeleton--section-title" />

                    <div className="dm-skeleton__row">
                        <div className="dm-skeleton__left">
                            <div className="skeleton skeleton--label" />
                            <div className="skeleton skeleton--input" />
                        </div>

                        <div className="dm-skeleton__right">
                            <div className="skeleton skeleton--toggle" />
                            <div className="skeleton skeleton--text-line" />
                            <div className="skeleton skeleton--text-line short" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
