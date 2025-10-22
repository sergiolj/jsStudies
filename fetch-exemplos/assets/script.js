/*API JSONPlaceholder
https://jsonplaceholder.typicode.com/
É uma API Restful fake usada para testes e prototipagem*/

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/';
const RESOURCE_NAME = 'posts';
var RESOURCE_ID = 10;
var RESOURCE_COMPLETE_URL = `${API_BASE_URL}${RESOURCE_NAME}`; // Essa é a maneira moderna de concatenar dados em JS usando Template Literals

/*Método fetch executado de modo a parecer síncrono com o uso de uma função assíncrona e wait*/
async function searchDataAsync() {
    try{ 
        const response = await fetch(RESOURCE_COMPLETE_URL);
        const data = await response.json();
        console.log('1. Conhecendo a API Simulado Sync')
        console.log('2. Dados recuperados: ', data);
    }catch(error){
        console.error('Erro capturado: ', error)
    }
    console.log('3. Fim da execução Async');
}
searchDataAsync();

/*Quando as opções do fetch (o segundo argumento) não são definidas, 
ou se você não especifica um method dentro delas, o fetch assume por padrão que a requisição é um GET.
*/

/* Método fetch executado de forma assíncrona
fetch(RESOURCE_COMPLETE_URL)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Erro na requisição: ',error);
})
*/


/************************/
/*      EXERCÍCIO 1     */
/************************/
console.log("Exercício 1. Buscar todos os posts com GET");

    RESOURCE_COMPLETE_URL = `${API_BASE_URL}${RESOURCE_NAME}`; 
    /*Template Literals
    Quando você usa a crase ( `) para delimitar uma string, você ganha "superpoderes". 
    Qualquer coisa que você colocar dentro de ${...} será interpretada como código JavaScript e o resultado será inserido naquela posição da string*/
    console.log('URL e recurso a ser chamado: ',RESOURCE_COMPLETE_URL)
    fetch(RESOURCE_COMPLETE_URL)
    .then(response => response.json())
    .then(dados => {
        console.log('Posts recebidos:',dados);
        console.log('Total de posts: ',dados.length);
        console.log('Primeiro post: ',dados[0].title);
    })
    .catch(error => console.error('Erro na requisição:',error));


/************************/
/*      EXERCÍCIO 2     */
/************************/
console.log('Exercício 2. Buscando um post ID específico');
    RESOURCE_ID = 10;
    RESOURCE_COMPLETE_URL =`${API_BASE_URL}${RESOURCE_NAME}${'/'}${RESOURCE_ID}`;
    console.log('URL e recurso a ser chamado: ',RESOURCE_COMPLETE_URL);

    fetch(RESOURCE_COMPLETE_URL)
    .then(response=> response.json())
    .then(data=> {
        console.log('Recuperado o post: ', data.id);
        console.log('Id: ', data.id, 'Title: ', data.title);
    })
    .catch(error => console.error('Erro na requisição:',error));



/************************/
/*      EXERCÍCIO 3     */
/************************/
console.log('Exercício 3. Criando um novo post com POST');

    class Post{
        constructor(title, body, userId){
            if(!title || title.trim() ===''){ 
                /*=== significa que o tipo e o dado devem ser iguais. OBSOLETO!! NÃO USAR "==" que compara fazendo conversão de tipo
                como, por exemplo, 0 == false (true) ou 5 == "5" (true). CORRETO E MODERNO -> 0 === false (false) 5 === "5" (false) */
                throw new Error('O campo Título é obrigatório');
            }
            this.title = title;
            this.body = body;
            this.userId = userId;
            this.id = null;
        }
    }

    try{
        //1. Instanciar o objeto da classe
        const newPost = new Post('Título de teste', 'Escreve qualquer coisa que você queira', 1);
        //2. Define as opções da requisição
        const optionsPost = {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        };
        //3. Criar o fetch
        RESOURCE_COMPLETE_URL=`${API_BASE_URL}${RESOURCE_NAME}`;
        console.log(RESOURCE_COMPLETE_URL);
        console.log(RESOURCE_COMPLETE_URL, optionsPost);

        fetch(RESOURCE_COMPLETE_URL, optionsPost)
            .then(response=> response.json())
            .then(data=>{
            console.log('Criação de um post a partir de uma classe: ', data);
            console.log(data.title);
            console.log(data.body);
            })
            .catch(error => console.error('Erro executando fetch: ', error));

        }catch(error){
        console.error('Erro ao criar novo post: ', error);
    }


/************************/
/*      EXERCÍCIO 4     */
/************************/
console.log('Exercício 4. Atualizar um post com PUT');
    const postUpdate = {
        id: 1,
        title: 'Título Atualizado',
        body: 'Conteúdo novo no post',
        userId: 1
    };
    const optionsPost ={
        method: 'PUT',
        body: JSON.stringify(postUpdate),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8',
        }
    };
    RESOURCE_COMPLETE_URL =`${API_BASE_URL}${RESOURCE_NAME}${'/1'}`;
    console.log(RESOURCE_COMPLETE_URL);
    fetch(RESOURCE_COMPLETE_URL, optionsPost)
        .then(response=> response.json())
        .then(data=> {
            console.log('Post atualizado com PUT: ', data);
        })
        .catch(error=> console.error('Erro ao atualizar registro post', error));


/************************/
/*      EXERCÍCIO 5     */
/************************/
console.log('Exercício 5. Apagar um post com DELETE')
    RESOURCE_COMPLETE_URL='https://jsonplaceholder.typicode.com/posts/200';
    console.log(RESOURCE_COMPLETE_URL);

    fetch(RESOURCE_COMPLETE_URL, {
        method: 'DELETE',
    })
    .then(response=> {
        console.log('Resposta do DELETE (Status)', response.status);
        return response.json();
    })
    .then(data=>{
        console.log('Corpo da Resposta (DELETE): ', data);
    })
    .catch(error=> console.error('Erro na requisição de DELETE', error));


/************************/
/*      EXERCÍCIO 6     */
/************************/
async function postsGET() {
        var RESOURCE_COMPLETE_URL = `${API_BASE_URL}${RESOURCE_NAME}`;
        
    try{
        const response = await fetch(RESOURCE_COMPLETE_URL);
        const data = await response.json();
        
        console.log('1. Exercício 1.1 Buscar todos os posts com GET usando async/await')
        console.log('URL e recurso a ser chamado: ', RESOURCE_COMPLETE_URL);
        console.log('Posts recebidos: ', data);
        console.log('Total de posts: ', data.length);
        console.log('Último post: ', data[length].title)
    }catch(error){
        console.error('Erro na requisição da função GET "/posts" (async): ', error);
    }
}

 async function postsIdGET() {
    var RESOURCE_ID = 10;
    var RESOURCE_COMPLETE_URL =`${API_BASE_URL}${RESOURCE_NAME}${'/'}${RESOURCE_ID}`;
    try{
        const response = await fetch(RESOURCE_COMPLETE_URL);
        const data =await response.json();

        console.log('2. Exercício 2.1 Buscar o post com id específico com GET usando async/await')
        console.log('URL e recurso a ser chamado: ',RESOURCE_COMPLETE_URL);
        console.log('Post Id: ', data.id, ', Title: ', data.title);

    }catch(error){
        console.error('Erro na requisição do ID especificado: ', error);
    }
}

async function postsNewPOST() {
    class Post {
        constructor(title, body, userId){
            if(!title || title.length === 0 || title.trim() === ""){
                throw new Error(' ');
            }
            this.id = null;
            this.title = title;
            this.body = body;
            this.userId = userId;
        }
    }

    const NEWPOST = new Post(
        'Viagem ao centro da Terra',
        'Filme antigo em PB baseado no livro de Julio Verne',
        1
        );

    const RESOURCE_COMPLETE_URL = `${API_BASE_URL}${RESOURCE_NAME}`;
    console.log('Gravando novo post: ' , RESOURCE_COMPLETE_URL);
        fetch(RESOURCE_COMPLETE_URL, {
            method: 'POST',
            body: JSON.stringify(NEWPOST),
            headers: {
                'Content-Type' : 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            console.log('Gravando novo post (Status): ', response.status);
            return response.json();
        })
        .then(data => {
            console.log('Resposta completa: ', data);
            console.log('Dados gravados: ', data.title, ' : ', data.body);
        })
        .catch(error => console.error('Erro ao gravar novo post: ', error));
}

async function postsUpdatePUT() {
    RESOURCE_COMPLETE_URL = `${API_BASE_URL}${RESOURCE_NAME}/1`;
    //1. Criando o objeto para receber o Post
    let ACTUALPOST;
    
    //2. Recuperando os dados do Post com GET
    try{
        const response = await fetch(RESOURCE_COMPLETE_URL);
        if(!response.ok){
            throw new Error('Erro ao buscar post: ', `${response.status}`);
        }
        ACTUALPOST = await response.json();
        console.log('Recuperado: ', ACTUALPOST);
    }catch (error){
        console.error('Erro', error);
    }

    //3. Modificando o objeto
    ACTUALPOST.title = 'Novo Título para o post 1 recuperado';

    //4. Gravando a resposta com o objeto modificado
    try{
        const response = await fetch(RESOURCE_COMPLETE_URL, {
            method: "PUT", 
            body: JSON.stringify(ACTUALPOST),
            headers: {
                'Content-Type' : 'application/json ; charset=UTF-8'
            }
        });
        const data = await response.json();
        
        console.log('Post atualizado com sucesso (PUT): ', response.status);
        console.log('Post atualizado: ', data);

    }catch(error){
        console.error('Erro: ', error);
    }

}

async function postsEraseDELETE() {
    const RESOURCE_COMPLETE_URL = `${API_BASE_URL}${RESOURCE_NAME}/10`;

    try{
        const response = await fetch(RESOURCE_COMPLETE_URL, {
            method: "DELETE",
        })
        if(response.ok){
             console.log('Registro apagado com sucesso (Status): ', response.status);
        }else{
            console.warn('Falha ao apagar registro (Status): ', response.status)
        }
       

    }catch (error){
        console.error('Erro ao deletar registro', error);
    }
}

async function allFunctionsSync() {
   
    await postsGET();
    await postsIdGET();
    await postsNewPOST();
    await postsUpdatePUT();
    await postsEraseDELETE(); 

}

allFunctionsSync();
