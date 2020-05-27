try {
    require('./errors.js');
} catch (err) {
    console.error('désolé le plugin a planté :(', err);
} finally {
    console.log('nettoyage des fichiers d\'installation du plugin');
}

try {
    fetch('mortel.com')
} catch (err) {
    console.error('le fetch a pas marché ', err)
}