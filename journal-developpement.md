# Journal de Développement - Projet Preflight

## 17 Octobre 2024 - Début du projet
### Objectif
Commencer un projet de checklist pour gérer des tâches de manière simple.

### Tâches réalisées
- Mise en place des bases du projet en HTML et CSS.
- Création de la structure du composant Checklist avec un design simple.
  - Liste des tâches avec des cases à cocher.
  - Mise en forme basique des éléments (utilisation de Flexbox).

---

## 22 Octobre 2024 - Premiers exercices de logique
### Objectif
Développer une logique JavaScript pour gérer les états des tâches (complétées/incomplètes).

### Tâches réalisées
- Création d’un tableau représentant les tâches.
- Ajout d’une boucle pour itérer sur les tâches sans utiliser `split()`.
- Discussion sur la manière d’intégrer la logique avec React à l’avenir.

---

## 24 Octobre 2024 - Conversion en React
### Objectif
Commencer à utiliser React pour structurer les fonctionnalités.

### Tâches réalisées
- Installation de React sans Vite (`npx create-react-app preflight`).
- Découpage du projet en trois composants principaux :
  1. **Dashboard** (pour lister toutes les checklists).
  2. **Checklist** (pour afficher et gérer les tâches).
  3. **Formulaire** (pour ajouter de nouvelles checklists).
- Conversion du design HTML/CSS initial en JSX dans React.

---

## 12 Novembre 2024 - Développement du formulaire
### Objectif
Permettre aux utilisateurs d’ajouter de nouvelles checklists.

### Tâches réalisées
- Création d’un composant Formulaire avec un champ texte et un bouton.
- Ajout d’une fonction pour envoyer les données saisies au composant parent (Dashboard).
- Mise à jour dynamique de l’état des checklists avec `useState`.

---

## 24 Novembre 2024 - Checklist interactive
### Objectif
Gérer les états des tâches dans une checklist.

### Tâches réalisées
- Ajout de la logique pour marquer une tâche comme "complète" au clic.
- Utilisation de `useState` pour gérer l’état des tâches dans le composant Checklist.
- Ajout d’une logique pour détecter si toutes les tâches d’une checklist sont complètes.

---

## 2 Décembre 2024 - Stylisation avec Styled-components
### Objectif
Améliorer l’apparence du projet avec Styled-components tout en conservant le CSS initial pour la Checklist.

### Tâches réalisées
- Introduction de `styled-components` pour styliser les composants React.
- Conversion des styles de certains composants (Formulaire et Dashboard) vers Styled-components.
- Checklist : maintien des styles en CSS pur comme demandé.

---

## 5 Décembre 2024 - État global et suppression des checklists
### Objectif
Implémenter la suppression des checklists et discuter des outils pour simplifier la gestion des états globaux.

### Tâches réalisées
- Création d’une fonction pour supprimer une checklist.
- Discussion sur l’introduction potentielle de Redux pour la gestion de l’état global (non implémenté pour l’instant).

---

## 6 Décembre 2024 - API Backend pour la suppression
### Objectif
Permettre la suppression définitive des checklists, même après un rafraîchissement de la page.

### Tâches réalisées
- Création d’une API backend avec Express.js.
- Mise en place d’une route `DELETE /api/delete-checklist`.
- Test de l’API avec Postman.
- Intégration de l’API dans l’application React : suppression des checklists et actualisation de l’état après interaction.

---

## Tâches restantes
- Ajouter une boîte de dialogue pour confirmer la suppression.
- Améliorer l’interface utilisateur (animations, messages de succès/erreur).
- Introduire une authentification pour sauvegarder des checklists par utilisateur.
- Exporter les checklists en PDF.
