async function initialize() {
    try {
        defineImageList();
        await chargeImageList(); // Tenta executar
    } catch (error) {
        console.error("Falha ao carregar as imagens. Prosseguindo...", error);
    } finally {
        // O bloco 'finally' SEMPRE é executado.
        console.log("Executando myCode() independentemente do resultado anterior.");
        myCode();
    }
}

  function defineImageList() {}

  function chargeImageList() {}

class Parents{
    constructor(father, mother){
        this.father = father;
        this.mother = mother;
    }
}

class Student{
    constructor (name, id, birthDate, parents, registre){
        this.name = name;
        this.id = id;
        this.birthDate = birthDate;
        this.parents = parents;
        this.registre = registre;
    }
}

function myCode(){
    let st1Parents = new Parents('Sérgio', 'Nara');
    let st1Registre = ['Calculo I', 'Algoritmos', 'POO', 'Compiladores'];
    let studentSt1 = new Student('Sérgio', '20026817', '25/09/1973', st1Parents, st1Registre);
    //console.log(studentSt1);
    let json = JSON.stringify(studentSt1); //Transforma um objeto em json
    //console.log(json);
    let studentSt2 = JSON.parse(json); // Cria um objeto a partir de um Json
    console.log(studentSt2);
    console.log(studentSt1);
}

initialize();