
import SectionWrapper from './sub-components/SectionWrapper';
import FeatureItem from './FeatureItem';
import dbFeatureItems from '../assets/db/dbFeatureItems';
import HeadlineLarge from './sub-components/HeadlineLarge';

export default function ModuleFeatured() {
    return (
        <SectionWrapper main={'featured'} wrap={'wrapper'}>
            <HeadlineLarge
                content={{
                    title: 'Optimize your workflow',
                    subtitle: 'Benefits for your company',
                }}
            />
            <div className="featured-list">
                { dbFeatureItems.map((feature) => {
                    return (
                        <FeatureItem
                            key={feature?.id}
                            content={{...feature}}
                        />
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
