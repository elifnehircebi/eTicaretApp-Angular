const mongoose = require("mongoose");

const uri = "mongodb+srv://enc:123@eticaret-db.ddd9uy9.mongodb.net/?retryWrites=true&w=majority";

const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser: true,//olabilicek hataların önüne geçmek
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDb bağlantısı başarılı!"))
    .catch((err)=> console.log ("Bağlantı Hatası! Hata: " + err.message));
}

module.exports = connection;//connection metodunu paylaşır hale getirdim.