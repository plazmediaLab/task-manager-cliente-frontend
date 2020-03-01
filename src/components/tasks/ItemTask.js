import React, { Fragment } from 'react';
import styled from '@emotion/styled';


const FlexLI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p{
    flex: 1 1 0;
    padding-right: 1rem;
  }

  button:not(:last-of-type){
    margin-right: .5rem!important;
  }
`;


const ItemTask = ({ item }) => {
  return (
    <Fragment>
      <FlexLI key={item.name} className="list-item i-line">
        <p className="txt-a-l">{item.name}</p>

        {item.state
        ? (
          <button type="button" className="btn btn-s-c btn-l-acept" title="Complete">Comp</button>
        )
        :(
          <button type="button" className="btn btn-s-c btn-warning" title="Incomplete">Incom</button>
        )}

        <button type="button" className="btn btn-s-c btn-blue" title="Edit">
          <i className="a-createmode_editedit"></i>
        </button>
        <button type="button" className="btn btn-s-c btn-cancel" title="Delete">
          <i className="a-trash"></i>
        </button>

      </FlexLI>
    </Fragment>
  );
};

export default ItemTask;