const session = require('express-session');
const express= require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../users/users.model');

const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({ secret: 'mysecretkey', resave: true, saveUninitialized: true }));
    app.use(passport.initialize());
    app.use(passport.session());

const login = (app) => {
    app.post('/login', async (req, res) => {
        const { email, password } = req.body.params;
         try {
            // znajdź uzytkownika w bazie danych
            const user = await User.findOne({email});

            if(!user) {
                return res.status(401).json({ message: 'Nieprawidłowy email lub hasło' });
            }

            // porównaj hasło podane przez użytkownika z zaszyfrowanym hasłem z bazy danych
            const passwordMatch = await bcrypt.compare(password, user.password);

            if(!passwordMatch) {
                return res.status(401).json({ message: 'Nieprawidłowy email lub hasło' });
            }
            // jezeli hasło jest poprawne, zaloguj użytkownika
            // tu mozna utworzyć i przesłać token JWT, ustawić sesję lub cookie lub cokolwiek innego co jest związane z autentykacją

            res.status(200).json({ message: 'Zalogowano pomyślnie' })

         } catch(error) {
            console.log(error);
            res.status(500).json({ message: "wystąpił błąd serwera" })
         }
    })
}

module.exports = {login};