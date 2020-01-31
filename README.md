# goStack--desafio1

<strong> Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express. </strong>

<h3> Rotas </h3
<ul> 
  
 <li> POST /projects: A rota deve receber id e title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.
</li>

 <li>  GET /projects: Rota que lista todos projetos e suas tarefas;  </li> 

 <li> PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota </li> 

 <li> DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;  </li> 

 <li> POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
  </li> </ul>
  <br/> 
  
Exemplo
Se eu chamar a rota POST /projects repassando { id: 1, title: 'Novo projeto' } e a rota POST /projects/1/tasks com { title: 'Nova tarefa' }, meu array de projetos deve ficar assim:

[ </br>
    {</br>
       id: "1", </br>
       title: "Novo projeto", </br>
       tasks: ["Nova tarefa"]</br>
    }</br>
];
