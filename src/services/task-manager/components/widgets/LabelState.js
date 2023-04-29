import './css/LabelState.css'

export default function LabelState({ state }) {
    return (
        <>
            { state.done ?
                <span className="label label__status-completed">Done</span> :
                <span className="label label__status-pending">Pending</span>
            }
        </>
    );
}