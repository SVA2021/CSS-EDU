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
            stringFeatures: any
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
                { id: 1, name: 'linear-gradient', min: 0, max: 100, unit: '%' },
                { id: 2, name: 'repeating-linear-gradient', min: 0, max: 100, unit: '%' },
                { id: 3, name: 'radial-gradient', min: 0, max: 10, unit: 'px' },
                { id: 4, name: 'repeating-radial-gradient', min: 0, max: 10, unit: 'px' },
                { id: 5, name: 'conic-gradient', min: 0, max: 200, unit: '%' },
                { id: 6, name: 'repeating-conic-gradient', min: 0, max: 200, unit: '%' },
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
