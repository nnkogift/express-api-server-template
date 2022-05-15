import {Router} from "express";


const router = Router();


router.get("/", (req, res) => {
    const {name} = req.query ?? {};

    if (name) {
        res.send(`Hello ${name}`);
        return;
    }

    res.send("Hello World");
})

export default router;
