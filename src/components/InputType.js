export default function InputType({ content }) {
    return (
        <div className="interface-group">
            <label htmlFor="task-title">{content.label}</label>
                <div className='input-style'>
                    <input
                        required
                        ref={content.inputRef}
                        className="task-input"
                        placeholder={content.placeholder}
                        id={content.inputID}
                        value={content.inputValue}
                    />
                </div>
    </div>
    );
}
