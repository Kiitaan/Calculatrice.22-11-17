function my_max(array) {
  var max = array[0];
  for (i = 1; i < array.length; i++) {
    (array[i] > max) && (max = array[i])
  }
  return max
}

console.log(my_max([11,18,3,49,7,6,5,4,12,99,20,17]));


function reverse(mot) {
    var motInverse = "";

    for (var i = 0; i < mot.length; i++) {
            motInverse = mot[i] + motInverse;
        }
        return motInverse;
}

console.log(reverse("Christian"));


function vowel_count(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

console.log(vowel_count("Python"));
console.log(vowel_count("Christian"));
