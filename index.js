let wakeDog = function (dogName = "Bryon", dogBreed = "poodle") {
    const result = `Wake ${dogName} the ${dogBreed}`
    console.log(result)
    return result
}

let leashDog = function (dogName = "Bryon", dogBreed = "poodle") {
    const result = `Leash ${dogName} the ${dogBreed}`
    console.log(result)
    return result
}

let walkToPark = function (dogName = "Bryon", dogBreed = "poodle") {
    const result = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(result)
    return result
}

let throwFrisbee = function (dogName = "Bryon", dogBreed = "poodle") {
    const result = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(result)
    return result
}

let walkHome = function (dogName = "Bryon", dogBreed = "poodle") {
    const result = `Walk home with ${dogName} the ${dogBreed}`
    console.log(result)
    return result
}

let unleashDog = function (dogName = "Bryon", dogBreed = "poodle") {
    const result = `Unleash ${dogName} the ${dogBreed}`
    console.log(result)
    return result
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(dogAction => dogAction(dogName, dogBreed))
}