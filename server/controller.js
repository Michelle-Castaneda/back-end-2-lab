
const housesDatabase = require('./db.json')
let currentId = 4
module.exports = {
    getHouses:(req,res) => {
        res.status(200).send(housesDatabase)
    },
    deleteHouse:(req,res) => {
        const id = +req.params.id

        for(let i = 0;i < housesDatabase.length; i++) {
            if(housesDatabase[i].id === id) {
                housesDatabase.splice(i,1)
                res.status(200).send(housesDatabase)
                return
            }
        }
    },
    createHouse:(req,res) => {
        const{address, price, imageURL} = req.body

        housesDatabase.push({
            id: currentId,
            address: address,
            price: price,
            imageURL: imageURL
        }) 
        currentId++
        res.status(200).send(housesDatabase)
        
    },
    updateHouse:(req,res) => {
        const id = +req.params.id
        const type = req.body.type //Type is a string and could either be ‘plus’ or ‘minus’. 
        for(let i=0; i < housesDatabase.length; i++) {
            if(housesDatabase[i].id === id) {
            houseIndex = 1
            }
        }
        if(houseIndex === undefined) {
            res.status(400).send('house not found')
        }
        if(type === 'plus') {
            housesDatabase[houseIndex].price+10000
            res.status(200).send(housesDatabase)
        } else if(type === 'minus') {
            housesDatabase[houseIndex].price+10000
            res.status(200).send(housesDatabase)
        } else {
            res.status(400).send('invalid type constraint')
        }
    }
}    