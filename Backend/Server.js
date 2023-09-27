const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.post("/register", function (req, resp) {
  const { name, surname, email, password, role } = req.body;
  const sql = `INSERT INTO customerregistration (name, surname, email, password,role)
      VALUES (?, ?, ?, ?,?)`;
  const value = [name, surname, email, password, role];
  con.query(sql, value, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      resp.send(result);
    }
  });
});

app.post("/login", function (req, resp) {
  const { email, password } = req.body;
  const sql = "select *from customerregistration where email=?";
  con.query(sql, [email], function (err, result) {
    if (err) {
      console.log(err);
    }
    const user = result[0];
    if (!user || password !== user.password) {
      return resp.status(401).json({
        error: "Wrong email or passowrd",
      });
    }
    delete user.password;
    resp.json(user);
  });
});

app.get("/strength", function (req, resp) {
  const sql = "select *from gymstrength";
  con.query(sql, function (err, result) {
    if (err) {
      console.log("Something went wrong please Try again later");
    }
    resp.send(result);
  });
});

app.get("/cardio", function (req, resp) {
  const sql = "select *from cardio";
  con.query(sql, function (err, result) {
    if (err) {
      console.log("Something went wrong please Try again later");
    }
    resp.send(result);
  });
});

app.post("/clientDetail", function (req, resp) {
  const {
    name,
    surname,
    email,
    location,
    phoneno,
    age,
    address,
    plan,
    numofdays,
  } = req.body;
  const values = [
    name,
    surname,
    email,
    location,
    phoneno,
    age,
    address,
    plan,
    numofdays,
  ];

  const sql = `INSERT INTO clientDetail (name, surname, email, location, phoneno, age, address, plan, numofdays) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  con.query(sql, values, function (err, result) {
    if (err) {
      console.log("Something went wrong with the SQL query:", err);
    } else {
      resp.send(result);
      console.log("Client Detail Added");
    }
  });
});

app.get("/getclient", function (req, resp) {
  const sql = "select *from clientdetail";
  con.query(sql, function (err, result) {
    if (err) {
      console.log("Somthing went wrong");
    } else {
      resp.send(result);
    }
  });
});

app.delete("/delete/:id", function (req, resp) {
  const userid = req.params.id;
  sql = "DELETE FROM Clientdetail WHERE id = ?";
  con.query(sql, userid, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      resp.send("User deleted");
    }
  });
});

app.put("/update/:id", function (req, resp) {
  const { name, surname, email, location, phoneno, age, address, plan } =
    req.body;
  const userid = req.params.id;
  const value = [name, surname, email, location, phoneno, age, address, plan];
  const sql = `UPDATE Clientdetail SET
                name = ?, 
                surname = ?, 
                email = ?, 
                location = ?, 
                phoneno = ?, 
                age = ?, 
                address = ?, 
                plan = ?
              WHERE id=?`;
  con.query(sql, [...value, userid], function (err, result) {
    if (err) {
      console.error(err);
      resp.status(500).send("An error occurred while updating the row.");
    } else {
      console.log("Row updated successfully.");
      resp.status(200).send("Row updated successfully.");
    }
  });
});

app.get("/getmail", function (req, resp) {
  sql = "select email from customerregistration";
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      resp.send(result);
    }
  });
});

app.listen(5000,()=>{
  console.log("Port listening on port 5000");
});
