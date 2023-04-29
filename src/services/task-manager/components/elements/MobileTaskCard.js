import LabelState from '../widgets/LabelState';
import WidgetDate from '../widgets/WidgetDate';
import '.././css/MobileCardTask.css';

export default function MobileCardTask({ task }) {
    return (
        <div className="mobile-card" id={task?.id}>
            <div className="mobile-card__header">
                <WidgetDate date={task?.date} />
                <span className="mobile-card__id">
                    {task?.id}
                </span>
            </div>
            <p className="mobile-card__title">
                {task?.title}
            </p>
            <div className="mobile-card__footer">
                <LabelState state={{done: task?.state}} />
            </div>
        </div>
    );
}
