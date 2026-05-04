import { generateContent } from "../services/ai.service.js";

export async function getResponse(req, res) {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).send("code is Required")
        }

        const response = await generateContent(code);

        res.json({
            result: response
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
}   