export default function InputSelectPriority({ action, content }) {
    return (
        <div className="interface-group">
            <label htmlFor="task-priority">Priority</label>
            <div role="button input-style" className='input-style' onClick={action.toggleDropdown}>
                <div className="task-input task-select" id="task-priority" >
                    { content.priorityIcon ?
                        <img src={content.priorityIcon} height="24" width="24"/>
                        : null
                    }
                    <div
                        required
                        ref={content.inputRef}
                        className="task-input"
                        placeholder={content.placeholder}
                        id={content.inputId}
                    >
                    {content.inputValue}
                    </div>
                    
                </div>
                <svg className="dropdown-icon" height="24" width="24">
                    <path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4Z"/>
                </svg>
            </div>
            <div role="button" className="dropdown-list"
                data-active={content.dropdownState}
                onClick={action.selectDropdownValue}>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7.4,15.7,6,14.3l6-6,6,6-1.4,1.4-4.35-4.35L12,11.1Z"/>
                    </svg>
                    High
                </span>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <rect x="6" y="11" width="12" height="2"/>
                    </svg>
                    Normal
                </span>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12,12.9l.25-.25L16.6,8.3,18,9.7l-6,6-6-6L7.4,8.3Z"/>
                    </svg>
                    Low
                </span>
            </div>
        </div>
    );
}
