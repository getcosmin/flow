export default function InputSelectList({ actions, content }) {
    return (
        <div className="interface-group">
        <label htmlFor="task-category">{content.label}</label>
        <div role="button" className='input-style' onClick={actions.toggleDropdown}>
            <input
                required
                ref={content.inputRef}
                className="task-input"
                placeholder={content.placeholder}
                id={content.inputId}
                value={content.inputValue}
            />
            <svg className="dropdown-icon" height="24" width="24">
                <path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4Z"/>
            </svg>
        </div>
        <div className="dropdown-list"
             data-active={content.dropdownState}
             onClick={actions.selectDropdownValue}>

            <span>Marketing</span>
            <span>Human Resources</span>
            <span>Sales</span>
            <span>Design</span>
        </div>
    </div>
    );
}
