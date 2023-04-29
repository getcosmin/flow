export default function DesktopTaskTableHeader() {
    return (
        <div className="table-header" role="row">
            <div role="columnheader" aria-sort="none">ID</div>
            <div role="columnheader" aria-sort="none">Category</div>
            <div role="columnheader" aria-sort="none">Title</div>
            <div role="columnheader" aria-sort="none">Description</div>
            <div role="columnheader" aria-sort="none">Priority</div>
            <div role="columnheader" aria-sort="none">Status</div>
            <div role="columnheader" aria-sort="none">Start Date</div>
            <div role="columnheader" aria-sort="none">End Date</div>
        </div>
    );
}
