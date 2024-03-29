import { useState, useRef } from 'react';
import FormFieldset from '../../../components/FormFieldset';
import InputType from '../../../components/InputType';
import InputDropdownField from '../../components/InputDropdownField';
import useLocalStorage from '../../../hooks/useLocalStorage';

export default function CreateTaskModalView({ toggleCreateTaskWindow }) {
    const taskTitleRef = useRef('');
    const taskCategoryRef = useRef('');
    const taskDescriptionRef = useRef('');
    const taskPriorityRef = useRef('');
    const taskEndDateRef = useRef();

    function addNewTask() {
        event.preventDefault();
        const todayDate = new Date().toISOString().slice(0, 10);
        function generateTaskID() {
            const newNumber = Math.random();
            const transformedNumber = Math.floor(newNumber * 1000000);
            return transformedNumber;
        }
        const taskID = generateTaskID();
            const newTask = {
                id: `${taskID}`,
                title: taskTitleRef.current.value,
                category: taskCategoryRef.current.value,
                description: taskDescriptionRef.current.value,
                priority: taskPriorityRef.current.value,
                state: false,
                startDate: todayDate,
                endDate: taskEndDateRef.current.value,
            };
            console.log(newTask);
            const previousTasks = localStorage.getItem('tasks');
            const previousTasksJSON = JSON.parse(previousTasks);
            console.log(previousTasksJSON);
            const newTaskArray = [...previousTasksJSON, newTask];
            console.log(newTaskArray);
            localStorage.setItem('tasks', JSON.stringify(newTaskArray));
            toggleCreateTaskWindow();
    }

    return (
        <section className="interface-modal">
            <div className="modal wrapper-modal">
                <div className="modal-navigation">
                    <div className="button-icon hover-animation" role="button" onClick={toggleCreateTaskWindow}>
                        <svg height="24" width="24">
                            <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/>
                        </svg>
                    </div>
                </div>
                <form>
                    <FormFieldset legend='01 - SUMMARY'>
                        <InputType
                           content={{
                                inputID: 'task-title',
                                label: 'Title',
                                inputRef: taskTitleRef,
                                placeholder: 'Name the task...',
                           }}
                        />
                        <InputDropdownField
                            content={{
                                inputID: 'task-category',
                                label: 'Department',
                                inputRef: taskCategoryRef,
                            }}
                            inputValues={[
                                'Marketing',
                                'Human Resources',
                                'DevOps',
                                'Sales Team',
                            ]}
                        />
                    </FormFieldset>

                    <FormFieldset legend='02 - Planning'>
                        <div className="interface-group">
                            <label htmlFor="task-description">Description</label>
                            <div className='input-style'>
                                <textarea
                                    ref={taskDescriptionRef}
                                    className="task-description"
                                    placeholder="How would you describe the activity?"
                                    id="task-description"
                                >
                                </textarea>
                            </div>
                        </div>

                        <InputDropdownField
                            content={{
                                inputID: 'task-category',
                                label: 'Priority',
                                inputRef: taskPriorityRef,
                            }}
                            inputValues={[
                                'High',
                                'Medium',
                                'Low',
                            ]}
                        />
                    </FormFieldset>

                    <FormFieldset legend='03 - FINAL'>
                        <div className="interface-group">
                            <label htmlFor="task-priority">Deadline</label>
                            <div role="button" className='input-style'>
                                <input
                                    ref={taskEndDateRef}
                                    type="date"
                                    className="task-input date-input"
                                    id="task-deadline"
                                    required
                                />
                            </div>
                        </div>
                    </FormFieldset>

                    <div className="form-bottom-nav">
                        <input type="submit" className="button-primary" onClick={addNewTask}/>
                    </div>
                </form>
            </div>
        </section>
    );
}
