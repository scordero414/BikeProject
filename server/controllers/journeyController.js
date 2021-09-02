const pool = require('../pool');

exports.getJourneysById = async (req, res) => {
    try {
        pool.query(`SELECT * FROM journey WHERE id_user='${req.params.id}'`, (err, response) => {
          if (err) throw err;
          if (response.length) 
            res.json(response);
          res.end();
        })
      } catch (error) {
        return res.json({error: "There was an error, please try again later"});
      }
}

exports.createJourney = async (req, res) => {
    let journey = req.body;
    try {
        pool.query(`INSERT INTO journey(id_user, start_date, finish_date, start_ubication, finish_ubication, distance) 
                    VALUES ('${journey.id_user}','${journey.start_date}','${journey.finish_date}','${journey.start_ubication}','${journey.finish_ubication}','${journey.distance}')`, (err, response)=>{
            if (err) throw err;
            if (response)
                res.json({id: response.insertId});
            res.end();
        })
    } catch (error) {
        return res.json(error);
    }
}

// exports.getUserById = async (req, res) => {
//     try {
//       pool.query(`SELECT * FROM user WHERE username='${req.params.id}'`, (err, response) => {
//         if (err) throw err;
//         if (response.length) 
//           res.json(response);
//         res.end();
//       })
//     } catch (error) {
//       return res.json({error: "There was an error, please try again later"});
//     }
//   }