const { User, Task ,Completed} = require('../backend/models/relation');

async function testAssoc() {
    try {
        // Créer un utilisateur
        // Exemple d'insertion
await User.create({
    username: "Django",
    email: "Djanjo@gmail.com",
    password: "Django"
});

    } catch (error) {
        console.error('Erreur lors du test :', error);
    }
}

testAssoc();
