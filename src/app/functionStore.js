import { useEffect, useRef } from 'react';

export function usePrevious(value) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export function isEmpty(obj) {
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

export function getDiff(o1, o2) {
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