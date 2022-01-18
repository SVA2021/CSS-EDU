interface featureElemType {
    id: number
    name: string
    min: number
    max: number
    unit: string
}

interface featuresType {
    image: {
        part1: {
            filter: Array<featureElemType>
        },
    },
    gradient: {
        part1: {
            gradient: Array<featureElemType>
        },
    },
}

export const features: featuresType = {
    image: {
        part1: {
            filter: [
                { id: 1, name: 'grayscale', min: 0, max: 100, unit: '%' },
                { id: 2, name: 'blur', min: 0, max: 10, unit: 'px' },
                { id: 3, name: 'brightness', min: 0, max: 200, unit: '%' },
                { id: 4, name: 'contrast', min: 0, max: 200, unit: '%' },
                { id: 5, name: 'drop-shadow', min: 0, max: 20, unit: 'px' },
                { id: 6, name: 'hue-rotate', min: 0, max: 360, unit: 'deg' },
                { id: 7, name: 'invert', min: 0, max: 100, unit: '%' },
                { id: 8, name: 'opacity', min: 0, max: 100, unit: '%' },
                { id: 9, name: 'saturate', min: 0, max: 200, unit: '%' },
                { id: 10, name: 'sepia', min: 0, max: 100, unit: '%' },
            ],
        },
    },
    gradient: {
        part1: {
            gradient: [
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