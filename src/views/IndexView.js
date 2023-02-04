import HeroSectionLarge from "../components/HeroSectionLarge"

export default function IndexView() {
    return (
        <>
            <HeroSectionLarge
                content = {{
                    title: 'Busines Management. Easy.',
                    subtitle: 'Try out Flow Software for free, 30 days.',
                    cta: 'Try Flow',
                }}
            />
        </>
    );
}
