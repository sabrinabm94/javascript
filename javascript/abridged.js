console.log(abridgedControl('Sabrina Boing Moreira', 13)); //Sabrina B. M.

function abridgedControl(fullName, limit) {
    if (fullName.length > limit) {
        return toAbridged(fullName);
    }
    return fullName;
}


function toAbridged(fullName) { 
    const token = '.';
    const separator = ' ';
    const names = removePrepositions(fullName).split(separator);
    const firstName = names[0];
    let surnames = '';
    names
        .filter((name, index) => index)
        .map(name => surnames += `${separator}${name.charAt()}${token}`);
    return `${firstName}${surnames.toUpperCase()}`;
}

function removePrepositions(fullName) {
    return fullName.replace(/\ dos|\ das|\ dos|\ das|\ de|\ d\'/gi, '');
}