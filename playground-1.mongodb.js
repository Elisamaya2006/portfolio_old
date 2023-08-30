//Atividade prática
//CREATE DATABASE TEST
//USE TEST


//Código para criar uma nova collection
use("mypet");
db.dropDatabase()
use("mypet");
db.createCollection("dono");

db.dono.insertOne(
    {_id:1, 
        nome:"Ricardo",
        idade:32,
        animal:
            [
                {_id:1,nome:"Lily",valor:2200,raca:"Siamês"},
                {_id:2,nome:"Luca",valor:3500,raca:"Maine Coon"},
                {_id:3,nome:"Lulu",valor:6000,raca:"Golden Retriever"},
                {_id:4,nome:"Leo",valor:5000,raca:"Persa"}
            ]
    },
)
db.dono.insertOne(
    {_id:2, 
        nome:"Maria",
        idade:25,
        animal:
            [
                {_id:1,nome:"Nina",valor:2000,raca:"Poodle"},
                {_id:2,nome:"Timba",valor:4000,raca:"Bulldog"},
                {_id:3,nome:"Morgana",valor:3000,raca:"Pinscher"},
                {_id:4,nome:"Billy",valor:1000,raca:"Chihuahua"}
            ]
    },
)
db.dono.insertOne(
    {_id:3, 
        nome:"Heitor",
        idade:29,
        animal:
            [
                {_id:1,nome:"Hank",valor:1500,raca:"Maltês"},
                {_id:2,nome:"Amora",valor:2900,raca:"Pomeranian"},
                {_id:3,nome:"Bidu",valor:3000,raca:"Cocker Spaniel"},
                {_id:4,nome:"Snoopy",valor:1000,raca:"Beagle"}
            ]
    },
)

//Listar nome e animal do dono
use("mypet");
db.dono.find({"_id":2},{nome:true,animal:true})

//Deletando dados no Mongodb
db.dono.deleteOne({
    "_id":2
})

//Listar todos os donos
db.dono.find({})

//Consulta que apaga o dono com _id: 2
db.dono.deleteMany({_id:2})

//Apagando todos os dados da collection dono
db.dono.deleteMany({})

//Excluindo a collection dono
db.dono.drop()

//Excluindo o banco de dados mypet
use("mypet");
db.dropDatabase()