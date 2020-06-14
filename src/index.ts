import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import {connect} from 'mongoose';

// Start the server
const port = Number(process.env.PORT || 3000);

const MONGO_URL = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

connect(MONGO_URL,{ useNewUrlParser: true } ).then(res=>{
    logger.info('database connected');
    app.listen(port, () => {
        logger.info('Express server started on port: ' + port);
    });
}).catch(err=>{
    logger.info('error in connecting databse',err);
})


