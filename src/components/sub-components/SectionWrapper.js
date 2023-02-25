export default function SectionWrapper({ className, children }) {
    return (
        <section className={className}>
            <div className="wrapper">
                {children}
            </div>
        </section>
    );
}
