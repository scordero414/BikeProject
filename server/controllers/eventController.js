const pool = require('../pool');

// exports.getJourneys = async (req, res) => {
//     try{
//         pool.query("SELECT * FROM `journey`", (err, response) =>{
//             if (err) throw err;
//                 console.log(error);
//             if (response)
//                 res.json(response);
//             res.end();
//         })
//     }catch(e){
//         return res.json(e);
//     }
// }

exports.createEvent = async (req, res) => {
    let event = req.body;
    try {
        pool.query(`INSERT INTO events(id_journey, description, type, time) 
                    VALUES ('${event.id_journey}','${event.description}','${event.type}','${event.time}')`, (err, response)=>{
            if (err) throw err;
            if (response)
                res.json({success: "Se ha registrado el evento exitosamente" });
            res.end();
        })
    } catch (error) {
        return res.json(error);
    }
}
