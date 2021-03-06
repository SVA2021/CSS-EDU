import { useEffect, useRef } from 'react';

export function usePrevious(value: any) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export function isEmpty(obj: any) {
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

export function getDiff(o1: any, o2: any) {
    let diff = {};
    if (isEmpty(o1) || isEmpty(o2)) return diff;
    diff = Object.keys(o2).reduce((diff, key) => {
        if (o1[key] === o2[key]) return diff
        return {
            ...diff,
            [key]: o2[key]
        }
    }, {});
    return diff;
}

export const propertyCopy = (obj: any) => {
    let result: any = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            result[key] = obj[key].name;
        }
    }
    return result;
}

export const setArray = (qty: number, array: Array<any>, item = '') => {
    array.length = 0;
    for (let i = 0; i < qty; i++) {
        array.push(i + item);
    }
    return array;
}

export const normalizeObjText = (str: any) => {
    return JSON.stringify(str, null, ' ').replace(/"/gm, '');
}