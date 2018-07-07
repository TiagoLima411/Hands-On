export class Event {
    user_id: String;
    $key : string;
    nome : string;
    voluntarios : Number;
    likes: Number;
    local : Local;
    position : string;
    office : string;
    salary : number;
    data: Date;        
    descricao: String;
    urlImage: String;
}

export class Local {
    cep: String;
    logradouro : String;
    complemento: String;
    bairro: String;
    localidade: String;
    uf: String;
    unidade: String;
    ibge: String
    gia: String;
}