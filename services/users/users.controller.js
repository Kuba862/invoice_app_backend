// miejsce na routy związane z użytkownikami - informacje z frontendu przechodzą przez ten controller i są przekazywane do serwisu
const bcrypt = require('bcrypt');
const User = require('./users.model');

const registerUser = async (app) => {
    app.post('/register', async (req, res) => {
        try {
            const { firstName, lastName, email, password } = req.body.params;
            // zaszyfruj hasło
            const hashedPassword = await bcrypt.hash(password, 10);

            // zapisz użytkownika w bazie danych
            const user = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword
            });

            await user.save();
            
            res.status(201).send({ registered: true, firstName });
        }
        catch(error) {
            console.log(error);
            res.status(500).send({ registered: false });
        }

    })
}

module.exports = registerUser;