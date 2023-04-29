import DesktopTaskTableRow from './elements/DesktopTaskTableRow';
import DesktopTaskTableHeader from './elements/DesktopTaskTableHeader';
import MobileTaskCard from './elements/MobileTaskCard';

export default function TaskManagerTable({ dataTasks }) {
    return (
        <div role="table">
            { window.innerWidth > 1024 ?
                <DesktopTaskTableHeader />
                : null
            }
            { dataTasks ?
                window.innerWidth > 1024 ?
                    dataTasks.map((task) => {
                        return (
                            <DesktopTaskTableRow
                                key={task.id}
                                task={{...task}}
                            />
                        );
                    })
                    :
                    dataTasks.map((task) => {
                        return (
                            <MobileTaskCard
                                key={task.id}
                                task={{...task}}
                            />
                        );
                    })
                    : <p>No data from the Server.</p>
        }
    </div>
    );
}
