import { Router } from 'express';
import Calculation from './app/controllers/CalculationController';
import AllPlans from './app/controllers/AllPlansController';
import AllCodes from './app/controllers/AllCodesController';
const swaggerSpec = require('./app/swaggerConfig/config');

const routes = new Router();

/**
     * @swagger
     *
     * /plan:
     *   get:
     *     tags:
     *       - Plans Endpoint
     *     description: return to plan list
     *     summary: list all registered plans
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Returned to list of plans successfully
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/definitions/Plans'
     */
routes.get('/plan', AllPlans.findAllPlans);

/**
     * @swagger
     *
     * /code:
     *   get:
     *     tags:
     *       - Codes Endpoint
     *     description: return to code list
     *     summary: list all registered codes
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Returned to list of codes successfully
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/definitions/Codes'
     */
routes.get('/code', AllCodes.findAllCodes);

/**
   * @swagger
   *
   * /:
   *   post:
   *     tags:
   *       - Calculate Endpoint
   *     description: calculated the value of the minutes
   *     summary: calculates the value of the minutes referring to the ddd code and the time used
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: from
   *         description: from to origin
   *         example: '011'
   *         in: body
   *         required: true
   *         type: string
   *       - name: to
   *         description: to from destination
   *         example: '017'
   *         in: body
   *         required: true
   *         type: string
   *       - name: time
   *         description: time from minutes
   *         example: 40
   *         in: body
   *         required: true
   *         type: integer
   *       - name: service
   *         description: service from plan
   *         example: 'FaleMais 30'
   *         in: body
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: The calculation of the minutes referring to the ddd code was performed successfully!
   */
routes.post('/', Calculation.calculatePlan);

routes.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(swaggerSpec);
});


export default routes;
