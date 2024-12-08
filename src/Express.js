app.delete('/checklists/:id', (req, res) => {
    const { id } = req.params;
    // Logique pour supprimer la checklist dans ta base de données
    const index = checklists.findIndex(item => item.id === parseInt(id));
    if (index > -1) {
      checklists.splice(index, 1); // Suppression dans la base
      res.status(200).json({ message: 'Checklist supprimée avec succès' });
    } else {
      res.status(404).json({ message: 'Checklist introuvable' });
    }
  });
  