import { useState, useRef } from 'react';
import FormFieldset from '../../../components/FormFieldset';
import InputSelectList from '../../../components/InputSelectList';
import InputSelectPriority from '../../../components/InputSelectPriority';
import InputType from '../../../components/InputType';

export default function CreateTaskModalView({ toggleCreateTaskModal }) {
    const [hasCategoryEnabled, setCategoryEnabled] = useState(false);
    const [categoryValue, setCategoryValue] = useState('');

    const [hasPriorityEnabled, setPriorityEnabled] = useState(false);
    const [priorityValue, setPriorityValue] = useState('');
    const [priorityIcon, setPriorityIcon] = useState('');


    const taskTitleRef = useRef('');
    const taskCategoryRef = useRef('');
    const taskDescriptionRef = useRef('');
    const taskPriorityRef = useRef('');
    const taskEndDateRef = useRef();

    class TasksController {
        static toggleCategory() {
            TasksController.closeDropdowns();
            hasCategoryEnabled ? setCategoryEnabled(false) : setCategoryEnabled(true);
        }
        static togglePriority() {
            TasksController.closeDropdowns();
            hasPriorityEnabled ? setPriorityEnabled(false) : setPriorityEnabled(true);
        }
        static closeDropdowns() {
            if (hasCategoryEnabled) {
                setCategoryEnabled(false);
            }
            if (hasPriorityEnabled) {
                setPriorityEnabled(false);
            }
        }
        static selectPriority(event) {
            setPriorityValue(event.target.innerText);
            TasksController.closeDropdowns();
            console.log(priorityValue);
            switch (event.target.innerText) {
                case 'High':
                    setPriorityIcon('https://getcosmin.dev/assets/icons/icon-high-getcosmin.svg');
                    break;
                case 'Normal':
                    setPriorityIcon('https://getcosmin.dev/assets/icons/icon-medium-getcosmin.svg');
                    break;
                case 'Low':
                    setPriorityIcon('https://getcosmin.dev/assets/icons/icon-low-getcosmin.svg');
                    break;
                default:
                    setPriorityIcon('');
                    break;
            }
        }
        static selectCategory(event) {
            setCategoryValue(event.target.innerText);
            TasksController.closeDropdowns();
        }
    }

    class TaskManager {
        static async createTask(event) {
            const todayDate = new Date().toISOString().slice(0, 10);
            event.preventDefault();
            const newTask = {
                title: taskTitleRef.current.value,
                category: taskCategoryRef.current.value,
                description: taskDescriptionRef.current.value,
                priority: taskPriorityRef.current.innerText,
                startDate: todayDate,
                endDate: taskEndDateRef.current.value,
            };
            console.log(newTask);
            TaskManagerValidation.checkInputTitle(newTask.title);

            const response = await fetch('/insert/new-task', {
                method: 'POST',
                body: JSON.stringify(newTask),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();

            console.log(data);
        }
    }

    class TaskManagerValidation {
        static checkInputTitle(variable) {
            if (variable.length > 6) {
                console.log('Input is valid.');
            } else {
                console.log('Input is not valid.');
            }
        }
    }


    return (
        <section className="interface-modal">
            <div className="modal wrapper-modal">
                <div className="modal-navigation">
                    <div className="button-icon hover-animation" role="button" onClick={toggleCreateTaskModal}>
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
                        <InputSelectList
                            content={{
                                inputID: 'task-category',
                                label: 'Category',
                                inputValue: categoryValue,
                                inputRef: taskCategoryRef,
                                dropdownState: hasCategoryEnabled,
                            }}
                            action={{
                                toggleDropdown: TasksController.toggleCategory,
                                selectDropdownValue: TasksController.selectCategory,
                            }}
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

                        <InputSelectPriority
                            content={{
                                inputID: 'task-category',
                                label: 'Category',
                                inputValue: priorityValue,
                                inputRef: taskPriorityRef,
                                priorityIcon: priorityIcon,
                                dropdownState: hasPriorityEnabled,
                            }}
                            action={{
                                toggleDropdown: TasksController.togglePriority,
                                selectDropdownValue: TasksController.selectPriority,
                            }}
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
                        <input type="submit" className="button-primary" onClick={TaskManager.createTask}/>
                    </div>
                </form>
            </div>
        </section>
    );
}
