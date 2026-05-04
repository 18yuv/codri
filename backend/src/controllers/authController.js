export default function authController(req, res) {
    return (
        res.json({
            uid: req.user.uid,
            email: req.user.email,
            name: req.user.name || null,
            picture: req.user.picture || null
        })
    )
}