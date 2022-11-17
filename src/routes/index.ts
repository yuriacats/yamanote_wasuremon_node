import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(helmet());
app.use(cors());
// ルーティングする
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).send({message:'hello, nodejs'})
})
router.get('/last-update', (req, res)=>{
    res.status(200).send({message:'2022/11/17 00:00:00'})
})


app.use((req, res) => {
    res.status(404);
    res.render('error', {
      param: {
        status: 404,
        message: 'not found'
      },
    });
});

module.exports = router;