import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { paramMissingError } from '@shared/constants';
import * as UserModel from '../model/Users';
import logger from '@shared/Logger';
// Init shared
const router = Router();


/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    // const users = await userDao.getAll();
    // return res.status(OK).json({users});
});


/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
    const { firstName, lastName, email } = req.body;

    logger.info(JSON.stringify(req.body))
    if (!firstName) {
        logger.error('juice ')
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    UserModel.default.create({
        firstName,
        lastName,
        email
    }).then(result =>{
        return result;
    }).catch(err =>{
        logger.error(err);
    })
    return res.status(CREATED).end();
});


/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

// router.put('/update', async (req: Request, res: Response) => {
//     const { user } = req.body;
//     if (!user) {
//         return res.status(BAD_REQUEST).json({
//             error: paramMissingError,
//         });
//     }
//     user.id = Number(user.id);
//     // await userDao.update(user);
//     return res.status(OK).end();
// });


/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

// router.delete('/delete/:id', async (req: Request, res: Response) => {
//     const { id } = req.params as ParamsDictionary;
//     // await userDao.delete(Number(id));
//     return res.status(OK).end();
// });


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
