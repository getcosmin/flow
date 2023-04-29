import { useState } from 'react';

export default function useToggleCreateTask() {
    const [hasCreateTaskView, setCreateTaskView] = useState(false);

    function toggleCreateTaskWindow() {
        console.log('Create Task');
        hasCreateTaskView ? setCreateTaskView(false) : setCreateTaskView(true);
        console.log(hasCreateTaskView);
        document.body.classList.toggle('disable-scroll');
    }
    return {
        hasCreateTaskView: hasCreateTaskView,
        toggleCreateTaskWindow: toggleCreateTaskWindow,
    };
}
