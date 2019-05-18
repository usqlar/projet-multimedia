# Projet Développement Multimédia

1 – Présentation :

Nous nous intéressons au développement d’un module permettant de capturer la photo de l’utilisateur pour pouvoir l’ajouter à son profile. Ce module sera utilisable dans les applications Web, Mobiles hybrides et Desktop basées sur les technologies WEB.

Le module sera développé en utilisant une approche incrémentale en trois versions successives :

Version 1 :

Cette version doit comporter :
1. Etape 1 : Une interface pour les actions de la capture
2. Etape 2 : Enregistrement de l’image encodée

Version 2 :

Cette version va améliorer l’interface de la version 1 en ajoutant :
1. Etape 1 : Ajouter à l’interface des composants permettant d’ajuster la qualité de l’image en ajoutant des effets à l’image (contraste, luminosité, teinte, etc…)

Version 3 :

Dans cette version, nous permettrons aux utilisateur de recadrer et de pivoter l’image (cropping). Pour cela, l’interface doit présenter un rectangle (Outline) avec des poignets permettant de guider l’utilisateur dans ses actions.
1. Etape 1 : Tracer l’Outline avec ses poignets de recadrage
2. Etape 2 : Rendre l’Outline et ses poignets sensibles aux mouvements de la sourie (Evénements)
3. Etape 3 : Gérer le recadrage (en largeur et en hauteur) et le pivotement selon les événements de la sourie
4. Etape 4 : Enregistrement de l’image recadrer

2 – Description des versions :

2 – 1 – Version 1

1. L’utilisateur appuie sur le bouton « photo »
2. On affiche l’interface qui contient une « vidéo » et le bouton « capturer ». La vidéo affiche la sortie de la caméra de l’utilisateur. Si le dispositif de l’utilisateur n’a pas de caméra, on affiche et on démarre une petite video en boucle.
3. Quand l’utilisateur appuie sur le bouton « capturer », on affiche un compte à rebour (Count down) de 3 secondes au terme duquel on capture l’image. (On l’affiche)
4. L’image est ensuite encodée soous format Base64

2 – 2 – Version 2

Dans cette version l’interface contiendra en plus des éléments décrits dans la version 1, un ensemble de boutons permettant d’ajuster les réglages de l’image capturée. Un bouton « enregistrer » permettra l’enregistrement de l’image finalisée.

2 – 3 – Version 3

Ajouter un dispositif de recadrage de l’image capturée :

Le rectangle de recadrage doit permettre comporte 8 poignets nommées en utilisant les quatre cardinalités : N pour Nord, E pour Est, O pour Ouest et S pour Sud. Les quatre poignets sont donc : NN, NE, NO, EE, OO, SE, SS et SO :
- Les poignets EE et OO sont sensibles uniquement au recadrage en largeur,
- Les poignets NN et SS sont sensibles uniquement au recadrage en hauteur,
- Les poignets NE, NO, SE et SO sont sensibles uniquement au recadrage en hauteur et en largeur de manière proportionnelle.
Une bande en L extérieure à chacune des poignets NE, NO, SE et SO non affichée dans l’image, permettra de pivoter l’Outline de recadrage.

Quand le recadrage est effectué, l’utilisateur appuie sur le bouton « enregistrer » et obtient l’image recadrée.

2 – 4 – Version 4

Ça sera la version 3, mais hébergée dans npmjs.org de façon à ce que tout le monde pourra l’utiliser. La même version sera déposée au terme du projet dans un dépôt Github et comportera sa description et les modes de son utilisation dans un fichier « readme.md ».

# L'Application de l'Editeur de Photos
![3](https://user-images.githubusercontent.com/49000243/57970007-16fb8a00-797c-11e9-9039-2e10afff5a3c.jpg)
