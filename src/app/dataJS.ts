const allSameItemArray: Array<boolean> = [false, false, false, false, false, false, false,];
const notSameArray: Array<boolean> = [false, true, false, true, false, true, true];

interface jsMethod {
    array: {
        part1: {
            arrayMethod: Array<arrayMethodType>
        }
    }
    string: {
        part1: {
            stringFeatures: Array<stringFeaturesType>
        }
    }
}

interface arrayMethodType {
    id: number
    name: string
    description: string
    typeOfResult: 'array' | 'boolean' | 'index' | 'value'
    statusOfResult: null | 'new' | 'old'
    target: null | 'key' | 'value'
    initial: Array<boolean>
}

interface stringFeaturesType {
    id: number
    name: string
    description: string
}

export const js: jsMethod = {
    array: {
        part1: {
            arrayMethod: [
                {
                    id: 1,
                    name: 'push',
                    description: 'add items to end',
                    typeOfResult: 'array',
                    statusOfResult: 'old',
                    target: null,
                    initial: allSameItemArray
                },
                {
                    id: 2,
                    name: 'pop',
                    description: 'remove items from end',
                    typeOfResult: 'array',
                    statusOfResult: 'old',
                    target: null,
                    initial: allSameItemArray
                },
                {
                    id: 3,
                    name: 'shift',
                    description: 'remove items from start',
                    typeOfResult: 'array',
                    statusOfResult: 'old',
                    target: null,
                    initial: allSameItemArray
                },
                {
                    id: 4,
                    name: 'unshift',
                    description: 'add items to start',
                    typeOfResult: 'array',
                    statusOfResult: 'old',
                    target: null,
                    initial: allSameItemArray
                },
                {
                    id: 5,
                    name: 'splice',
                    description: 'at index pos deletes deleteCount elements and inserts items',
                    typeOfResult: 'array',
                    statusOfResult: 'old',
                    target: null,
                    initial: allSameItemArray
                },
                {
                    id: 6,
                    name: 'slice',
                    description: 'copies elements from index start till end (not inclusive) into it',
                    typeOfResult: 'array',
                    statusOfResult: 'new',
                    target: null,
                    initial: allSameItemArray
                },
                {
                    id: 7,
                    name: 'concat',
                    description: 'copies all members of the current one and adds items',
                    typeOfResult: 'array',
                    statusOfResult: 'new',
                    target: null,
                    initial: allSameItemArray
                },
                //searching in array
                {
                    id: 8,
                    name: 'indexOf',
                    description: 'look for item starting from position pos, return the index or -1 if not found',
                    typeOfResult: 'index',
                    statusOfResult: null,
                    target: 'key',
                    initial: notSameArray
                },
                {
                    id: 9,
                    name: 'lastIndexOf',
                    description: 'look for item starting from position pos, return the index or -1 if not found',
                    typeOfResult: 'index',
                    statusOfResult: null,
                    target: 'key',
                    initial: notSameArray
                },
                {
                    id: 10,
                    name: 'includes',
                    description: 'returns true if the array has value',
                    typeOfResult: 'boolean',
                    statusOfResult: null,
                    target: 'value',
                    initial: notSameArray
                },
                {
                    id: 11,
                    name: 'find',
                    description: 'filter elements through the function, return first values that make it return true',
                    typeOfResult: 'value',
                    statusOfResult: null,
                    target: 'value',
                    initial: notSameArray
                },
                {
                    id: 12,
                    name: 'filter',
                    description: 'filter elements through the function, return all values that make it return true',
                    typeOfResult: 'array',
                    statusOfResult: 'new',
                    target: 'value',
                    initial: notSameArray
                },
                {
                    id: 13,
                    name: 'findIndex',
                    description: 'is like find, but returns the index instead of a value',
                    typeOfResult: 'index',
                    statusOfResult: null,
                    target: 'key',
                    initial: notSameArray
                },
                {
                    id: 14,
                    name: 'some',
                    description: 'check the array, If any results are true, returns true',
                    typeOfResult: 'boolean',
                    statusOfResult: null,
                    target: 'key',
                    initial: notSameArray
                },
                {
                    id: 15,
                    name: 'every',
                    description: 'check the array, If all results are true, returns true',
                    typeOfResult: 'boolean',
                    statusOfResult: null,
                    target: 'key',
                    initial: notSameArray
                },
                //transforming methods
                {
                    id: 16,
                    name: 'forEach',
                    description: 'calls func for every element, does not return anything',
                    typeOfResult: 'array',
                    statusOfResult: 'old',
                    target: null,
                    initial: notSameArray
                },
                {
                    id: 17,
                    name: 'map',
                    description: 'creates a new array from results of calling func for every element',
                    typeOfResult: 'array',
                    statusOfResult: 'new',
                    target: null,
                    initial: allSameItemArray
                },
                {
                    id: 18,
                    name: 'sort',
                    description: 'sorts the array in-place, then returns it',
                    typeOfResult: 'array',
                    statusOfResult: 'old',
                    target: null,
                    initial: notSameArray
                },
                {
                    id: 19,
                    name: 'reverse',
                    description: 'reverses the array in-place, then returns it',
                    typeOfResult: 'array',
                    statusOfResult: 'old',
                    target: null,
                    initial: notSameArray
                },
                {
                    id: 20,
                    name: 'reduce',
                    description: 'calculate a single value over the array by calling func for each element',
                    typeOfResult: 'value',
                    statusOfResult: null,
                    target: null,
                    initial: notSameArray
                },

            ],
        },
    },
    string: {
        part1: {
            stringFeatures: [
                {
                    id: 6, name: 'getChar',
                    description: 'To get a character, use: []'
                },
                {
                    id: 1, name: 'toLowerCase',
                    description: 'To lowercase a string'
                },
                {
                    id: 2, name: 'toUpperCase',
                    description: 'To uppercase a string'
                },
                {
                    id: 7, name: 'repeat',
                    description: 'repeats the string'
                },
                {
                    id: 3, name: 'trim',
                    description: 'removes (“trims”) spaces from the beginning and end of the string'
                },
                {
                    id: 10, name: 'substring',
                    description: 'Returns the part of the string between start and end'
                },
                {
                    id: 11, name: 'substr',
                    description: 'Returns the part of the string from start, with the given length'
                },
                {
                    id: 12, name: 'slice',
                    description: 'Returns the part of the string from start to (but not including) end'
                },
                {
                    id: 9, name: 'indexOf',
                    description: 'To look for a substring, returns the position where the match was found or -1'
                },
                {
                    id: 8, name: 'includes',
                    description: 'It is the right choice if we need to test for the match, but dont need its position'
                },
                {
                    id: 4, name: 'startsWith',
                    description: 'To look for a substring at start'
                },
                {
                    id: 5, name: 'endsWith',
                    description: 'To look for a substring at end'
                },
            ],
        },
    },

};

export const arrayHandle = (method: string, array: Array<boolean>) => {
    let result = [];

    switch (method) {
        case 'push':
            result = [...array];
            result.push(true);
            return result;
        case 'pop':
            result = [...array];
            result.pop();
            return result;
        case 'shift':
            result = [...array];
            result.shift();
            return result;
        case 'unshift':
            result = [...array];
            result.unshift(true);
            return result;
        case 'splice':
            result = [...array];
            result.splice(1, 2, true, true, true);
            return result;
        case 'slice':
            result = array.slice(1, 3);
            return result;
        case 'concat':
            result = [...array];
            return result;
        case 'indexOf':
            result = [...array];
            return result.indexOf(true);
        case 'lastIndexOf':
            result = [...array];
            return result.lastIndexOf(true);
        case 'findIndex':
            result = [...array];
            return result.findIndex(item => item === true);
        case 'includes':
            result = [...array];
            return result.includes(true);
        case 'find':
            result = [...array];
            return result.find(item => item === true);
        case 'filter':
            result = [...array];
            return result.filter(item => item === true);
        case 'some':
            result = [...array];
            return result.some(item => item === true);
        case 'every':
            result = [...array];
            return result.every(item => item === true);
        case 'forEach':
            result = [...array];
            result.forEach(item => (!item));
            return result;
        case 'map':
            result = [...array];
            return result.map(item => item = true);
        case 'sort':
            result = [...array];
            return result.sort();
        case 'reverse':
            result = [...array];
            return result.reverse();
        case 'reduce':
            result = [...array];
            return result.reduce((sum, current) => sum + Number(current), 0);
        default:
            break;
    }
}

export const stringHandle = (
    str: string,
    method: string,
    start: number | null | undefined,
    end: number | null | undefined,
    subStr: string ) => {
    switch (method) {
        case 'trim':
            return str.trim();
        case 'toLowerCase':
            return str.toLowerCase();
        case 'toUpperCase':
            return str.toUpperCase();
        case 'getChar':
            return (start) ? str[start] : ' '; //start = index
        case 'repeat':
            return (start) ? str.repeat(start) : ' ';
        case 'substr':
            return (start && end) ? str.substr(start, end) : ' ';//end = length
        case 'substring':
            return (start && end) ? str.substring(start, end) : ' ';
        case 'slice':
            return (start && end) ? str.slice(start, end) : ' ';
        case 'indexOf':
            return (start && subStr) ? str.indexOf(subStr, start) : ' '; //pos
        case 'includes':
            return (start && subStr) ? str.includes(subStr, start) : ' '; //bool
        case 'startsWith':
            return str.startsWith(' start'); //bool
        case 'endsWith':
            return str.endsWith('end '); //bool
        default:
            break;
    }
}