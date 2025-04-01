import express, { Request, Response } from "express";
import { units } from "../data/units";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
    res.json(units);
});

router.get("/tier/:tier", (req: Request, res: Response) => {
    const tier = req.params.tier.toUpperCase();
    res.json(units.filter(u => u.tier === tier));
});

router.get("/element/:element", (req: Request, res: Response) => {
    const element = req.params.element.toLowerCase();
    res.json(units.filter(u => u.element.toLowerCase() === element));
});

router.get("/name/:name", (req: Request, res: Response) => {
    const name = req.params.name.toLowerCase();
    const unit = units.find(u => u.unit.toLowerCase() === name);
    unit ? res.json(unit) : res.status(404).send("Unit not found");
});

export default router;
