import express from 'express'
import {ILeaderBoard,Leaderboard} from '../../model/leaderboard'
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const userScore: ILeaderBoard[] = await Leaderboard.find({}).limit(25).sort({'score': 'desc'});;
        res.status(200).json(userScore)
    } catch (err) {
        console.log(err)
        res.status(400).send({ 'msg': err });
    }
});

export {router as leaderboard};
