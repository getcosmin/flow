export default function SectionWrapper({ main, wrap, children }) {
    return (
        <section className={main}>
            <div className={wrap}>
                {children}
            </div>
        </section>
    );
}
