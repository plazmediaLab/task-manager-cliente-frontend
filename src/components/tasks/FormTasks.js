import React, {useContext} from "react";
import styled from '@emotion/styled';
// Import Contex
import projectContext from '../../contex/projects/projectContext'


const LogoContainer = styled.div`
  padding: 3rem;
  text-align: center;
  color: var(--plaz-dark);
  font-weight: bold;
`;


const FormTasks = () => {

  // CONTEX
  const projectsContext = useContext(projectContext);
  const {actualproject} =  projectsContext;

  if(!actualproject){
    return (
      <LogoContainer>
        Development by <i className="a-imagotype"></i>
      </LogoContainer>
    )
  }
  // Destructuring first position of actualproject
  const [projectActive] = actualproject;

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