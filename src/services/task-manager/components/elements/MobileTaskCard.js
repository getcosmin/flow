import { useState } from 'react';
import LabelState from '../widgets/LabelState';
import WidgetDate from '../widgets/WidgetDate';
import '.././css/MobileCardTask.css';
import useDeleteTasks from '../../hooks/useDeleteTasks';

export default function MobileCardTask({ task, deleteTask}) {
    return (
        <div className="mobile-card" id={task?.id}>
            <div className="mobile-card__header">
                <WidgetDate date={task?.endDate} />
                <span className="mobile-card__id">
                    {task?.id}
                </span>
            </div>
            <p className="mobile-card__title">
                {task?.title}
            </p>
            <div className="mobile-card__footer">
                <LabelState state={{done: task?.state}} />
                <button className='mobile-card__delete' onClick={deleteTask}>
                    <svg height="24" viewBox="0 96 960 960" width="24">
                        <path d="M280 936q-33 0-56.5-23.5T200 856V336h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680 936H280Zm400-600H280v520h400V336ZM360 776h80V416h-80v360Zm160 0h80V416h-80v360ZM280 336v520-520Z"/>
                    </svg>
                    Delete
                </button>
            </div>
        </div>
    );
}
