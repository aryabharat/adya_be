import express from 'express'
import {ILeaderBoard,Leaderboard} from '../../model/leaderboard'
const router = express.Router();

router.post('/', async (req, res) => {
    try {

        const score:ILeaderBoard = req.body

        const userScore: ILeaderBoard = await Leaderboard.create(score);

        res.status(200).json(userScore)

    } catch (err) {
        console.log(err)
        res.status(400).send({ 'msg': err });
    }
});

export  {router as user }
