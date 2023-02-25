import { Link } from 'react-router-dom';
import ButtonLink from './sub-components/ButtonLink'
import HeadlineLarge from './sub-components/HeadlineLarge';
import SectionWrapper from './sub-components/SectionWrapper';

export default function HeroSectionLarge({ content }) {
    return (
        <SectionWrapper className="hero-large">
            <HeadlineLarge content={{...content}} />
            <div className="margin-auto">
                <ButtonLink className="button button-primary" url="/software/tasks" cta="Try Flow" />
                <ButtonLink className="button button-secondary" url="/task-manager" cta="Find out more" />
            </div>
        </SectionWrapper>
    );
}
