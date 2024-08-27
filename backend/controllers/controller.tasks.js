
const Task = require('../models/model.tasks');
const Completed = require('../models/model.completed');

// Controller pour créer une nouvelle tâche
// Importation du modèle de tâche (Task) et des autres dépendances nécessaires
exports.createTask = async (req, res) => {
    // Récupération de l'ID utilisateur depuis le middleware d'authentification
    const userId = req.auth.userId;

    try {
        // Création d'une nouvelle tâche avec les données fournies par le client
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            isDone: req.body.isDone || false,
            UserId: userId // Association de la tâche avec l'utilisateur authentifié
        });

        // Envoi d'une réponse avec les détails de la tâche créée
        res.status(201).json({
            message: 'Tâche créée avec succès',
            task: task
        });
    } catch (error) {
        // En cas d'erreur, envoi d'une réponse avec le statut 400 et un message d'erreur
        res.status(400).json({
            error: "Une erreur s'est produite lors de la création de la tâche",
            details: error.message
        });
    }
};


exports.getTask = async (req,res) =>{
    try{
    const showTask = await Task.findAll()
    res.status(200).json(showTask)
    }
    catch{(400).json({error: message.error})
        res.status(400).json({error: message.error})
    }
};

  
