export default function FormFieldset({ children, legend }) {
    return (
        <fieldset>
            <legend>{legend}</legend>
            {children}
        </fieldset>
    );
}