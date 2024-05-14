import './AddWorkerForm.css';

const AddWorkerForm = () => {
    return (
        <div className="form-container">
            <form className="worker-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Fathers Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Birth Day</label>
                        <input type="date" />
                    </div>
                    <div className="form-group">
                        <label>Personal Number</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Birth Place</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Resume</label>
                        <textarea rows="4"></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
};

export default AddWorkerForm;
