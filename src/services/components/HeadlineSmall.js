import Breadcrumbs from '../../components/Breadcrumbs';

export default function HeadlineSmall({ title }) {
    return (
        <header>
            <Breadcrumbs />
            <h2 className='headline-small'>{title}</h2>
        </header>
    );
}
