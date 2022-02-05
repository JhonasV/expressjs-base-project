import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.set('PORT', process.env.SERVER_PORT);




app.get('/:id', (req: Request, res: Response, next: NextFunction) => {

    const params = req.params;

    res.json({'name': params.id});
});

app.listen(app.get('PORT'),() => console.log(`Server listen on port `, app.get('PORT')))
