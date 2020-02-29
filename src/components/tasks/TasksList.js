import React from 'react';
import styled from '@emotion/styled';
// Components
import ItemTask from './ItemTask';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 0 2rem 2rem;
  overflow: auto;
  -webkit-box-sizing: border-box;
    box-sizing: border-box;

  div.card{ 
    height: 100%;
    max-height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    
    div.card-head{
      color: var(--plaz-bright);
      text-align: center;

      button{
        background-color: var(--tomato-dark-1)!important;
        border-color: var(--tomato-dark-1)!important;
      }
      button:hover{
        background-color: var(--tomato)!important;
        border-color: var(--tomato)!important;
      }
      button:active{
        background-color: var(--tomato-dark-2)!important;
        border-color: var(--tomato-dark-2)!important;
      }
    }

    div.card-body{
      height: 100%;
      max-height: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;

      ul.list-group{
        height: 100%;
        max-height: 85%;
        display: block;
        overflow-y: auto;
      }
    }
  }
`;


const TasksList = () => {

  // Data Test 
  const projactsList = [
    {name: 'Conectar servidor', state: true},
    {name: 'Crear la API', state: true},
    {name: 'Seleccionar equipo de trabajo', state: false},
    {name: 'Logo', state: true},
    {name: 'Pagar por adelantado', state: false},
    {name: 'Tramitar visas', state: false},
    {name: 'Elegir plataformas de pago', state: true},
    {name: 'Elegir hosting', state: false},
    {name: 'Paleta de colores', state: true},
    {name: 'Selebrar lanzamiento', state: false},
  ]

  return (
      <ListContainer>
        <div className="br-s card box-shadow-m">
          <div className="card-head bg-2 jc-spaceB">
            <h3><i className=" a-pied-piper-last-iso af-m"></i> Tasks list: Intranet</h3>
            <button type="button" className="btn btn-s btn-secondary">Delete project</button>
          </div>
          <div className="card-body">
            <ul className="list-group ab">
              {projactsList.length === 0 
                ? <p>Emty list</p>
                
                :projactsList.map(item => (
                    <ItemTask 
                    item={item}
                    />
                  ))
              }
            </ul>
          </div>
        </div>
      </ListContainer>
  );
};

export default TasksList;