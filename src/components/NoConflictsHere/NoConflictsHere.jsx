import './NoConflictsHere.scss';

const NoConflictsHere = () => {
    return (<div className="no-conflicts">
        <p className="no-conflicts__text">
            Surely by naming the component <pre>&lt;NoConflictsHere&gt;</pre> we can avoid merge conflicts. Suprised others have not thought of this NEAT trick.
        </p>

    </div >);
};

export default NoConflictsHere;