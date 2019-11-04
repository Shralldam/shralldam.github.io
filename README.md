# Découverte des langages du web (2018-2019)

Ce dépôt est réservé aux extraits de code utilisés dans le cadre du cours de découverte des langages du web de l'option Graphisme de l'ESA Saint-Luc Tournai.

> Ces fichiers servent à titre d'exemple uniquement, et ne doivent pas être considérés comme des modèles réutilisables.

## Pour cloner (et mettre à jour) le projet via le Terminal (macOS)

### 1. Cloner le projet

Lancez l'application **Terminal** (dans le dossier Applications > Utilitaires).

Dans l'exemple qui suit, nous allons faire en sorte que le projet soit cloné dans un nouveau dossier sur le *Bureau*.

#### Avant de commencer

1. Les lignes précédées d'un caractère `#` représentent des commentaires : il n'est pas nécessaire de les écrire
2. Pour exécuter une commande, appuyez sur la touche `Entrée`, symbolisée dans les exemples ci-dessous avec le glyphe `↩`
3. Assurez-vous de respecter scrupuleusement la manière dont les commandes sont écrites : une faute de frappe peut créer des effets inattendus ; dans le doute, effectuez des copier-coller (en omettant le caractère `↩`)

Tout d'abord, accédons au dossier *Bureau* avec la commande `cd` (*change directory*) :

```bash
# Accéder au dossier Bureau de l'utilisateur actuel
cd ~/Desktop ↩
```

*Remarque : sur Mac, pour obtenir le caractère `~`, effectuez la combinaison de touches `Alt` + `n`. Sous UNIX (macOS en est une déclinaison), le caractère `~` symbolise le dossier d'accueil de l'utilisateur (la petite maison).*

---

Ensuite, créons un dossier intitulé **web2019** avec la commande `mkdir` (*make directory*) et plaçons-nous à l'intérieur avec la commande `cd` :

```bash
# Créer un dossier intitulé web2019
mkdir web2019 ↩

# Accéder au dossier créé (se placer à l'intérieur)
cd web2019 ↩
```

---

Puis, à l'aide de la commande `git clone`, clonons le projet :

```bash
git clone https://github.com/damienmathe/gweb.github.io.git ↩
```

Plusieurs lignes devraient apparaître, affichant la progression de la récupération du projet :

```bash
Cloning into 'gweb.github.io'...
remote: Enumerating objects: 27, done.
remote: Counting objects: 100% (27/27), done.
remote: Compressing objects: 100% (27/27), done.
remote: Total 46 (delta 5), reused 0 (delta 0), pack-reused 19
Unpacking objects: 100% (46/46), done.
```

---

Une fois le tout terminé, pour vérifier que tout s'est bien déroulé, vous pouvez afficher la liste des fichiers présents dans le dossier **web2019** avec la commande `ls` (avec l'option `-l` pour un affichage ligne par ligne) :

```bash
# Afficher la liste des fichiers présents dans le dossier
ls -l ↩

# Résultat de la commande
drwxrwxrwx 1 you you 4096 nov.   4 18:53  gweb.github.io

# Rentrer dans le dossier
cd gweb.github.io ↩
```

*Remarque : le propriétaire (ici "you") et les dates seront certainement différents chez vous, ce qui est tout à fait normal !*

---

Lancez à nouveau la commande `ls -l`. Vous devriez obtenir à peu près ceci :

```bash
total 0
-rwxrwxrwx 1 you you  197 oct.  31 23:21 README.md
drwxrwxrwx 1 you you 4096 oct.  31 23:21 webdesign
```

Le fichier `README.md` est la présente fiche explicative. Le dossier `webdesign` contient le code des leçons, classées par date (au format `AAAA-MM-JJ`).

### 2. Mettre à jour le projet

Si de nouveaux éléments sont ajoutés et/ou des modifications sont apportées à ce projet, vous pouvez rapatrier ces modifications en utilisant la commande `git pull`. **Vérifiez bien que vous êtes dans le dossier du projet avant de lancer cette commande !**

```bash
# Se rendre dans le dossier du projet (selon l'exemple développé plus haut)
cd ~/Desktop/web2019/gweb.github.io ↩

# Vérifier le dossier dans lequel on se trouve avec la commande pwd (Present Working Directory)
# Vous devriez obtenir un résultat pratiquement similaire à la 2e ligne
# (sauf "you" qui sera remplacé par votre nom d'utilisateur)
pwd ↩
/Users/you/Desktop/web2019/gweb.github.io

# Retrouver une copie exactement conforme au projet présent sur ce site
git pull origin master ↩
```

## Pour cloner (et mettre à jour) le projet via l'invite de commandes (Windows)

Contrairement à macOS, les outils `git` ne sont pas préinstallés sous Windows.

> Explications à venir

## Récupérer le projet via ce site web (toutes les plateformes)

En haut de cette page, cliquez sur le bouton vert **Clone or download**, et choisissez l'option **Download ZIP**.
