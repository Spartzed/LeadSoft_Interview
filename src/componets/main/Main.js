import "./Main.css";
import React, {useEffect,useState } from 'react';
import MaterialTable from 'material-table';
// import { getUsers } from "../../services/api";

const Main = () => {


    var Rectoken = localStorage.getItem("token");

    var token = JSON.parse(Rectoken);

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState([true]);
    const options = {
        headers: {  
            'accept' : 'application/problem+json',
            'Authorization' : token
        }
      }

    // useEffect(() => {
    //     //atalho, criando uma função anonima para não precisar declarar const, devido a useEffect noa poder ser async
    //     (async () => {
    //         const response = await getUsers();
    //         setData(response.data);
    //         setLoading(false);
    //     })();
    // }, []);

    // if(loading){
    //     return <div className="loading">Carregando usuários... </div>
    // }
    // console.log(data);
    
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>Olá LeadSoft</h1>
          </div>
        </div>
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
            columns={[
               { title: 'ID', field: 'Id' },
               { title: 'Nome Completo', field: 'Name' },
               { title: 'Sobrenome', field: 'Surname' },
               { title: 'Aniversario', field: 'DateOfBirth', type: 'numeric' }
            ]}

            data={
                query =>
                new Promise((resolve, reject) => {
                  let url = 'http://peopletest.leadsoft.inf.br/api/v1/People?'
                  url += 'CurrentPage=' + (query.page + 1)
                  url += '&PageSize=' + query.pageSize
                  url += '&IsPaged=true'
                  fetch(url,options)
                    .then(response  => response .json())
                    .then(result   => {
                        console.log(result)
                      resolve({
                        data: result,
                        // page: result.page - 1,
                        // totalCount: result.total,
                      })
                    })
                })
              }
            title="Controle de Usuários"
            actions={[
                {
                  icon: 'edit',
                  tooltip: 'Editar',
                  onClick: (event, rowData) => alert("You saved " + rowData.name)
                },
                rowData => ({
                  icon: 'delete',
                  tooltip: 'Excluir',
                  onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                })
            ]}
            options={{
                actionsColumnIndex: -1
              }}
           />
       </div>
      </div>
    </main>
  );
};

export default Main;