import NavigationSideMenu from '../../components/NavigationSideMenu';
import HeadlineSmall from '../../services/components/HeadlineSmall';

export default function NebulaSoftwareView() {
    return (
        <section className="workview">
            <NavigationSideMenu />
            <div className="wrapper">
                <HeadlineSmall title='Dashboard' />
            </div>
        </section>
    );
}
