let name = 'Sabrina Boing Moreira';
let limit = 13;

print(abbreviateName(name, limit));

function abbreviateName(name, limit) {
	if(name != undefined && name.length > 0) {
		if (name.length > limit) {
			return abbreviate(name);
		}
		return name;
	} else {
		print('Nome inválido, tente novamente!');
	}
}

function abbreviate(name) { 
    let token = '.';
    let separator = ' ';
    let nameList = removePrepositions(name).split(separator);
    let firstName = nameList[0];
    let surnames = '';
    nameList
        .filter((name, index) => index)
        .map(name => surnames += `${separator}${name.charAt()}${token}`);
    return `${firstName}${surnames.toUpperCase()}`;
}

function removePrepositions(name) {
    return name.replace(/\ dos|\ do|\ das|\ da|\ dos|\ das|\ de|\ d\'/gi, '');
}

function print(string) {
	console.log(string);
}
