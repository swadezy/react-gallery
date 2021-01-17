const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
            const queryText = `UPDATE "gallery" SET likes = $1 WHERE id = $2;`
            pool.query(queryText, [galleryItem.likes, galleryId]).then((response) => {
                console.log('updated');
                res.sendStatus(204)
            }).catch((error) => {
                console.log('received error', error);
                res.sendStatus(500)
            })
        }
    }
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "gallery" ORDER BY "id" ASC;`
    pool.query(queryText).then((gallery) => {
        res.send(gallery.rows)
    }).catch((error) => {
        console.log('received error', error);
        res.sendStatus(500)
    })
})

module.exports = router;