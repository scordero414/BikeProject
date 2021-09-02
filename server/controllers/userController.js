const pool = require('../pool');

exports.getUsers = async (req, res) => {
    try{
        pool.query("SELECT * FROM `user`", (err, response) =>{
            if (err) throw err;
                console.log(error);
            if (response)
                res.json(response);
            res.end();
        })
    }catch(e){
        return res.json(e);
    }
}

exports.createUser = async (req, res) => {
    let user = req.body;
    try {
        console.log(user)
        pool.query(`INSERT INTO user(username, name, password) VALUES ('${user.username}','${user.name}','${user.password}')`, (err, response)=>{
            if (err) throw err;
            if (response)
                res.json({success: "Usuario creado exitosamente."});
            res.end();
        })
    } catch (error) {
        return res.json(e);
    }
}

exports.getUserById = async (req, res) => {
    try {
      pool.query(`SELECT * FROM user WHERE username='${req.params.id}'`, (err, response) => {
        if (err) throw err;
        if (response.length) 
          res.json(response);
        res.end();
      })
    } catch (error) {
      return res.json({error: "There was an error, please try again later"});
    }
  }