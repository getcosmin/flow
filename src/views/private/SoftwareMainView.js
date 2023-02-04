import BreadcrumbList from "../../components/BreadcrumbList";
import NavigationSide from "../../components/NavigationSide";

export default function NebulaSoftwareView() {
    return (
        <section className="workview">
            <NavigationSide/>
            <div className="wrapper">
                <BreadcrumbList
                    content = {{
                        path01: 'Software',
                    }}
                />
                <h2>Welcome to WorkStation.</h2>
            </div>
        </section>
    );
}
