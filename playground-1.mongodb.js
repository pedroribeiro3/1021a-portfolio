//Criando o banco de dados
use("bdpatissier");

//Criando uma collection chamada "cake"
db.createCollection("cake");

//Incluindo 4 bolos na collection "cake"
db.cake.insertMany([
    {
        _id: ObjectId(1),
        nome:"Bolo de Brigadeiro Recheado",
        peso: "3kg",
        preco: 200.00,
        ingredientes: [
            {
                "nome": "Chocolate",
                "quantidade": "1 (xícara)"
            },
            {
                "nome": "Ovos",
                "quantidade": "3 unidades"
            },
            {
                "nome": "Leite",
                "quantidade": "1 (xícara)"
            },
            {
                "nome": "Açúcar",
                "quantidade": "1 (xícara)"
            },
            {
                "nome": "Fermento",
                "quantidade": "1 (colher de sopa)"
            },
            {
                "nome": "Óleo",
                "quantidade": "1 (xícara)"
            },
            {
                "nome": "Farinha de Trigo",
                "quantidade": "2 (xícaras)"
            }
        ]
    },
    {
        _id: ObjectId(2),
        nome:"Bolo de Quatro Leite",
        peso: "3kg",
        preco: 250.00,
        ingredientes: [
            {
                "nome": "Aroma de Baunilha",
                "quantidade": "1 (colher de sopa)"
            },
            {
                "nome": "Ovos",
                "quantidade": "4 unidades"
            },
            {
                "nome": "Açúcar",
                "quantidade": "1 (xícara)"
            },
            {
                "nome": "Farinha de Trigo",
                "quantidade": "1 e 1/2 (xícaras)"
            },
            {
                "nome": "Leite",
                "quantidade": "100ml"
            },
            {
                "nome": "Fermento",
                "quantidade": "1 (colher de sopa)"
            },
        ]
    },
    {
        _id: ObjectId(3),
        nome:"Bolo de Nata com Morango",
        peso: "3kg",
        preco: 380.00,
        ingredientes: [
            {
                "nome": "Essência de Baunilha",
                "quantidade": "1 (colher de sopa)"
            },
            {
                "nome": "Ovos",
                "quantidade": "4 unidades"
            },
            {
                "nome": "Água morna",
                "quantidade": "1 (xícara)"
            },
            {
                "nome": "Açúcar",
                "quantidade": "2 (xícaras)"
            },
            {
                "nome": "Farinha de Trigo",
                "quantidade": "2 (xícaras)"
            },
            {
                "nome": "Fermento",
                "quantidade": "1 (colher de sopa)"
            },
        ]
    },
    {
        _id: ObjectId(4),
        nome:"Bolo de Limão Siciliano",
        peso: "3kg",
        preco: 65.00,
        ingredientes: [
            {
                "nome": "Limão Siciliano",
                "quantidade": "1 unidade"
            },
            {
                "nome": "Óleo",
                "quantidade": "1/2 (xícara)"
            },
            {
                "nome": "Ovos",
                "quantidade": "2 unidades"
            },
            {
                "nome": "Açúcar",
                "quantidade": "2 (xícara)"
            },
            {
                "nome": "Farinha de Trigo",
                "quantidade": "3 (xícaras)"
            },
            {
                "nome": "Leite",
                "quantidade": "1 (xícara)"
            },
            {
                "nome": "Fermento",
                "quantidade": "2 (colher de sopa)"
            },
        ]
    },
])

//Excluindo o document "cake" com objectId(1)
use("bdpatissier");
db.cake.deleteOne({_id:ObjectId("0000000114edfa5335c312f7")})

//Listando o nome e preço dos bolos
use("bdpatissier");
db.cake.find({}, {nome:true, preco:true})

//Atualizando dados do bolo 2
use("bdpatissier");
db.cake.updateOne(
    {_id: ObjectId('0000000214edfa5335c312f8')},
    {
        $set:{
            nome: "Bolo Vulcão de Leite Ninho",
            peso: "3.5kg",
        },
        $push:{
            ingredientes: {
                nome: "Leite Condensado",
                quantidade: "1 caixa"  
            },
        },
    }
)

//Modificando um ingrediente de um bolo e alterando sua quantidade para 3.
use("bdpatissier");
db.cake.updateOne(
    {
        _id: ObjectId('0000000314edfa5335c312f9'),
        "ingredientes.nome": "Ovos"
    },
    {
        $set: {
            "ingredientes.$.nome":"ovo",
            "ingredientes.$.quantdade": "4 unidades"
        }
    }
)

//Apagando o banco de dados
db.dropDatabase()