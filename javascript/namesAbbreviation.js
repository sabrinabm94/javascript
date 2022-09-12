let name = 'Daenerys Targaryen';
let limit = 10;

print(abbreviateName(name, limit));

function abbreviateName(name, limit) {
	if(name != undefined && name.length > 0) {
		if (name.length > limit) {
			return abbreviate(name);
		}
		return name;
	} else {
		print('Invalid name, try again');
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
    const worldsOfconnection = /\ dos|\ do|\ das|\ da|\ dos|\ das|\ de|\ d\'/gi;
    return name.replace(worldsOfconnection, '');
}

function print(string) {
	console.log(string);
}
