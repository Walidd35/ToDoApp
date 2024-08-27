const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/model.users');
const Completed = require('../models/model.completed');
const SafetyKeyJwt = 'Allo';


// Controller pour GET tout les users .
exports.getAllUser = async (req,res) => {
    try{
      const showUser = await User.findAll()
      res.status(200).json(showUser)
    }
    catch(error){
     res.status(404).json({error: error.message})
    }
} 

// Controller  pour Get un user en particulier
exports.getById = async (req,res) => {
  try{
  // La commmande "FINDBYPK" cherche via la PrimaryKey l'User .
  const showOneUser = await User.findByPk(req.params.id);
  if (User) {
   res.status(200).json(showOneUser);
  }
  else {
   res.status(404).json({ error: error.message });
  }
}
catch ( error ) {
   res.status(500).json({ error: error.message });
}
}

// Controller pour creer un user .
exports.signup = async (req, res) => {
  try {
    // Const qui utilise la fonction hash a réeutiliser .
    const passwordHash = await bcrypt.hash(req.body.password, 8);
    console.log('mdp crypté avec succés');

    // Je crée l'utilisateur avec le mot de passe haché .
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: passwordHash
    });
    console.log('Compte créer avec succés :', newUser.id);

    // Je génere le token .
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      SafetyKeyJwt,
      { expiresIn: '100h' }
    );

    // Response qui nous renvoi le compte créer .
    res.status(201).json({
      message: `Bienvenue a toi ${req.body.username}. Ton compte a été créer avec succés `,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
      },
      token: token
    });
  } catch (error) {
    console.error('Erreur lors de l inscription :', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: "Email déjà utlisé . Veuillez utlisé un email different ."});
    }
    res.status(500).json({ error: "Une erreur s'est produite lors de la creation !!", details: error.message });
  }
};

// Controller pour se login .
exports.login = async (req,res) => {
  try {
    // Ici on définis le req.body .
    const{ email, password } = req.body;   
      // On cherche l'email dans la bdd .
    const user = await User.findOne({ where: { email } });
    // Si l'email n'est pas trouver statut 404 .
    if ( !user ) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect !'});
    }
    // On compare le motdp tappé par l'user avec le mot de passe stocker dans la bdd hashé .
    const passwordCorrect =  bcrypt.compare( password, user.password );
    // Si le mdp n'est pas le bon status 404 .
    if ( !passwordCorrect ) {
      return res.status(400).json({ message: ' Email ou mot de passe incorrect !'})
    }
    // Sinon grâce la fonction "sign" de JWT on assigne un token au user qui vient de se connecter .
    const token =  jwt.sign({ userId: user.id }, SafetyKeyJwt, { expiresIn: '48h' });
      return res.status(200).json({ token });
 }
 catch ( error ) {
    res.status(500).json({ error: error.message });
 }
}

exports.delete = async(req,res) => {
  try {

    // La commande "DESTROY" suivit de l'argument ({where: { id: req.params.id }}) cherche grace au "where" l'Id et et le suprimme grace au destroy .
 const deletUser = await User.destroy({where: { id: req.params.id }});
 if(deletUser){
    res.status(204).send();
 }
 else{
    res.status(404).json({ error: error.message })
 }
 }
 catch (error) {
  res.status(500).json({ error: error.message })
 }
}
