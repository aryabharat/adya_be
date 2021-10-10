import { model, Schema, Model, Document } from 'mongoose';

export interface ILeaderBoard extends Document {
  username: String;
  score: Number;
}

const LeaderboardSchema: Schema = new Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true },
});

export const Leaderboard: Model<ILeaderBoard> = model('leaderboard', LeaderboardSchema);



