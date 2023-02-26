import SectionWrapper from '../../../components/sub-components/SectionWrapper';
import ModuleDisplayBody from './ModuleDisplayBody';
import { useState } from 'react';

export default function ModuleDisplay({ content }) {
    const [ displayNumber, setDisplayNumber ] = useState();
    return (
        <SectionWrapper main="display" wrap="display-products wrapper">
            <div className="display-nav">
                <button className="display-nav-active">
                    Optimize Work
                </button>
                <button>
                    Keep Track
                </button>
            </div>
            { displayNumber ?
                <ModuleDisplayBody
                    content={{
                        title: 'Optimize your work',
                        description: 'Placeholder text for the display module.',
                        img: 'https://img.freepik.com/free-photo/reading-information-stickers_1098-18320.jpg?w=1380',
                    }}
                /> :
                <ModuleDisplayBody
                    content={{
                        title: 'Optimize your work',
                        description: 'Placeholder text for the display module.',
                        img: 'https://img.freepik.com/free-photo/reading-information-stickers_1098-18320.jpg?w=1380',
                    }}
                />
            }

        </SectionWrapper>
    );
}