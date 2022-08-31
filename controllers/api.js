'use strict';

let {Sequelize, sequelize} = require('../service/db');

exports.creator = async (req, res) => {
    try {
        const creatorId = req.query.creator_id;
        let user = await db.sequelize.query(
            'SELECT * FROM creator b\n' +
            'WHERE id=$1\n',
            { bind: [creatorId], type: 'RAW' },
        );
        res.send(user[0]);
    } catch (err) {
        console.log("Error is User: " + err);
        res.sendStatus(400);
    }
};

/*
    TODO implement new endpoints here
 */

exports.campaign = async (req, res) => {
    try {
        const creatorId = req.query.creator_id;
        console.log(creatorId)
        let user = await db.sequelize.query(
            `SELECT id, name, icon_url FROM campaign WHERE ${creatorId} = any (creator_id)`
        );
        res.send(user[0]);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

exports.media = async (req, res) => {
    try {
        const campaignId = req.query.campaign_id;
        let user = await db.sequelize.query(
            `SELECT id, media_type, media_url FROM media WHERE campaign_id = ${campaignId}`
        );
        res.send(user[0]);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }

};

exports.pricing = async (req, res) => {
    try {
        /*
            ran out of time, couldn't figure out the right query to get the appropriate data
            To calculate the pricing, I would have to add up the installs for each platform/country for each campaign for each creator
        */
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }

};