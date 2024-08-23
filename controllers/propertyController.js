import db from "../database.js";

 export const getRumah = (req,res) => {
    const sql = "SELECT * FROM property_rumah"
    db.query(sql, (error, result) => {
        res.send(result)
    });
};

export const getRumahById = (req,res) => {
    //menangkap data query url
    const id = req.query.id_rumah;
    //menangkap semua data dari table mahasiswa berdasarkan nim
    const sql = `SELECT * FROM property_rumah WHERE id = ${id_rumah}`;
    //mengirim query ke database mysql
    db.query(sql, (error, result) => {
        //ngirim data hasil ke client browser
        res.json(result);
    });
};

export const createRumah = (req,res) => {
    const { id_rumah, nama_pembeli, tipe_rumah, pembayaran} = req.body;
    const sql = "INSERT INTO property_rumah (id_rumah, nama_pembeli, tipe_rumah, pembayaran) VALUES (?,?,?,?)";
    db.query(sql, [id_rumah, nama_pembeli, tipe_rumah, pembayaran], (error, result) => {
        if (error) {
            res.status(400);
            res.send(error);
        }
        res.status(201);
        res.json(result);
    });
};

export const updateRumah = (req, res) => {
    const id = req.query.id_rumah;
    const { id_rumah,nama_pembeli, tipe_rumah, pembayaran} = req.body
    if(nim || id_rumah ,nama_pembeli, tipe_rumah, pembayaran){
        const query = `UPDATE property_rumah SET nama_pembeli = "${nama_pembeli}", tipe_rumah = "${tipe_rumah}", pembayaran = "${pembayaran}", id = "${id_rumah}"`;
        db.query(query, (error, result) => {
            if(error) res.status(400).send(error,message)
                res.json(result)
        })
    } else {
        res.send("isi body nya")
    }
}

export const deleteRumah = (req, res) => {
    const id = req.query.id_rumah
    const sql = "DELETE FROM property_rumah WHERE id_rumah = ?"
    db.query(sql, [id], (error, result) => {
        if(error){
            res.status(400)
            res.send(error)
        }
        res.status(200)
        res.json("Data berhasil di hapus")
    })
}