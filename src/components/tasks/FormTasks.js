import React from "react";


const FormTasks = () => {

  return (
    <div className="p-4">
      <form>
        <div className="col-row gap-2">
          <div className="col-9">
            <input
              type="text"
              name="nameTask"
              placeholder="Write the task name"
              className="input-100 box-shadow-s"
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-100 btn-secondary box-shadow-s"
            >
              Add task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormTasks;