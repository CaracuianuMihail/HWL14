// Creati o functie care va calcula suma a 3 cifre si va intoarce radicalul ei. //

    var first_number = 8;
    var second_number = 23;
    var third_number = 4;

    function squarerootSum(first_number, second_number, third_number)
    {
        var sum = first_number + second_number + third_number;
        var squareroot = Math.sqrt(sum);
        return squareroot;
    }

    var result = squarerootSum(first_number, second_number, third_number);
    console.log("Radicalul sumei este:", result);

// Creati o functie care primeste un string si de fiecare data cand este chemata, va intoarce o litera aleatoriu din string. //

    function randomStringCharacter(text) {
        if (text.length === 0) {
        return "Șirul este gol.";
        }
        var randomIndex = Math.floor(Math.random() * text.length);
        return text.charAt(randomIndex);
    }

    var textExample = "Hello World!!))";

    var randomCharacter = randomStringCharacter(textExample);
    console.log("Litera aleatoare din șir: ", randomCharacter);

// Creati o functie care primeste 2 stringuri si le intoarce concatenate. //
    
    function stringConcat(string1, string2) {
        return string1 + string2;
    }

    var first_string = "Hello";
    var second_string = " World!";
    
    var concatResult = stringConcat(first_string, second_string);
    console.log("Rezultatul concatenarii: ", concatResult);

  