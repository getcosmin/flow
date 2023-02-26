import HeroSectionLarge from '../../components/HeroSectionLarge';
import ArticleSection from './components/ArticleSection';
import ModuleFeatured from '../../components/ModuleFeatured';
import ModuleDisplay from './components/ModuleDisplay';

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
            <ModuleFeatured />
            <ModuleDisplay/>
            <ArticleSection />
        </>
    );
}
