# Contribution 🫱🏾‍🫲🏾

Les contributions sont les bienvenues, veuillez suivre les bonnes pratiques, respectez les conventions du projet.

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feat/Name`)
3. Committez vos changements (`git commit -m 'Add your contribution'`)
4. Pushez vers la branche (`git push origin feat/Name`)
5. Ouvrez une Pull Request

## Bonnes pratiques

- Respectez la configuration ESLint
- Utilisez TypeScript pour le typage strict
- Maintenez la compatibilité des standards d'accessibilité
- Testez vos modifications avant de soumettre votre Pull Request

### Sécurité

Le projet implémente plusieurs mesures de sécurité :

- **Content Security Policy (CSP)** configurée
- **Headers de sécurité** (X-Frame-Options, X-Content-Type-Options, etc.)
- **Protection XSS** intégrée
- **Validation TypeScript** stricte
- **ESLint** pour la qualité du code

### Accessibilité

L'application respecte les standards d'accessibilité :

- **Attributs ARIA** appropriés
- **Navigation clavier** complète
- **Contraste des couleurs** suffisant
- **Labels descriptifs** pour tous les éléments interactifs
- **Structure sémantique** HTML
