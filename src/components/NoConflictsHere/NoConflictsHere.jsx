import './NoConflictsHere.scss';

const NoConflictsHere = () => {
    return (<div className="no-conflicts-here">
        <p className="no-conflicts-here__text">
            Surely by naming the component <pre>&lt;NoConflictsHere&gt;</pre> we can avoid the possibility of merge conflicts. EDIT: conflicts apparently are still possible.
        </p>

    </div >);
};

export default NoConflictsHere;