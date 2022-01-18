interface positionOption {
    id: number
    name: string
}

interface positionElemType {
    float: {
        parent: {
            display: Array<positionOption>
            float: Array<positionOption>
            clear: Array<positionOption>
        },
        childItem: {
            display: Array<positionOption>
            float: Array<positionOption>
            clear: Array<positionOption>
        }
    },
    flex: {
        parent: {
            display: Array<positionOption>
            flexDirection: Array<positionOption>
            justifyContent: Array<positionOption>
            flexWrap: Array<positionOption>
            alignItems: Array<positionOption>
            alignContent: Array<positionOption>
        },
        childItem: {
            alignSelf: Array<positionOption>
        }
    },
    grid: {
        parent: {
            display: Array<positionOption>
            justifyContent: Array<positionOption>
            alignContent: Array<positionOption>
            gridTemplateColumns: Array<positionOption>
            gridAutoRows: Array<positionOption>
            gridGap: Array<positionOption>
        },
        childItem: {
            alignSelf: Array<positionOption>
        }
    },
}
export const positionElem: positionElemType = {
    float: {
        parent: {
            display: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'block' },
                { id: 3, name: 'inline' },
                { id: 4, name: 'inline-block' },
                { id: 5, name: 'none' },
                { id: 6, name: 'inherit' }
            ],
            float: [
                { id: 1, name: 'none' },
                { id: 2, name: 'left ' },
                { id: 3, name: 'right ' },
                { id: 4, name: 'inherit' }
            ],
            clear: [
                { id: 1, name: 'none' },
                { id: 2, name: 'left ' },
                { id: 3, name: 'right ' },
                { id: 4, name: 'inherit' },
                { id: 5, name: 'both' }
            ],
        }, 
        childItem: {
            display: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'block' },
                { id: 3, name: 'inline' },
                { id: 4, name: 'inline-block' },
                { id: 5, name: 'none' },
                { id: 6, name: 'inherit' }
            ],
            float: [
                { id: 1, name: 'none' },
                { id: 2, name: 'left ' },
                { id: 3, name: 'right ' },
                { id: 4, name: 'inherit' }
            ],
            clear: [
                { id: 1, name: 'none' },
                { id: 2, name: 'left ' },
                { id: 3, name: 'right ' },
                { id: 4, name: 'inherit' },
                { id: 5, name: 'both' }
            ],
        }
    },
    flex: { 
        parent: {
            display: [{ id: 1, name: 'flex' }],
            flexDirection: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'row' },
                { id: 3, name: 'row-reverse' },
                { id: 4, name: 'column' },
                { id: 5, name: 'column-reverse' },
                { id: 6, name: 'inherit' }
            ],
            justifyContent: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'flexStart' },
                { id: 3, name: 'flexEnd' },
                { id: 4, name: 'center' },
                { id: 5, name: 'spaceBetween' },
                { id: 6, name: 'spaceAround' },
                { id: 7, name: 'spaceEvenly' },
                { id: 8, name: 'inherit' }
            ],
            flexWrap: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'nowrap' },
                { id: 3, name: 'wrap' },
                { id: 4, name: 'wrapReverse' },
                { id: 5, name: 'inherit' }
            ],
            alignItems: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'stretch' },
                { id: 3, name: 'center' },
                { id: 4, name: 'flexStart' },
                { id: 5, name: 'flexEnd' },
                { id: 6, name: 'baseline' },
                { id: 7, name: 'inherit' }
            ],
            alignContent: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'stretch' },
                { id: 3, name: 'center' },
                { id: 4, name: 'flexStart' },
                { id: 5, name: 'flexEnd' },
                { id: 6, name: 'spaceBetween' },
                { id: 7, name: 'spaceAround' },
                { id: 8, name: 'inherit' }
            ],
        },
        childItem: {
            alignSelf: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'stretch' },
                { id: 3, name: 'center' },
                { id: 4, name: 'flexStart' },
                { id: 5, name: 'flexEnd' },
                { id: 6, name: 'baseline' },
                { id: 7, name: 'inherit' }
            ],
        }
    },
    grid: { 
        parent: {
            display: [{ id: 1, name: 'grid' }],
            justifyContent: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'flexStart' },
                { id: 3, name: 'flexEnd' },
                { id: 4, name: 'center' },
                { id: 5, name: 'spaceBetween' },
                { id: 6, name: 'spaceAround' },
                { id: 7, name: 'spaceEvenly' },
                { id: 8, name: 'inherit' }
            ],
            alignContent: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'stretch' },
                { id: 3, name: 'center' },
                { id: 4, name: 'flexStart' },
                { id: 5, name: 'flexEnd' },
                { id: 6, name: 'spaceBetween' },
                { id: 7, name: 'spaceAround' },
                { id: 8, name: 'inherit' }
            ],
            gridTemplateColumns: [
                { id: 1, name: '100px 100px 100px' },
                { id: 2, name: '1fr 1fr 1fr' },
                { id: 3, name: '100px 200px 100px' },
                { id: 4, name: '1fr 2fr 1fr' },
                { id: 5, name: '20% 20% 20%' },
                { id: 6, name: '20% 50% 20%' },
                { id: 7, name: 'repeat(3, 1fr)' },
            ],
            gridAutoRows: [
                { id: 1, name: '100px' },
                { id: 2, name: '1fr' },
                { id: 3, name: '20%' },
                { id: 4, name: 'minmax(100px, auto)' },
            ],
            gridGap: [
                { id: 1, name: '10px' },
                { id: 2, name: '5%' },
                { id: 3, name: 'revert' },
                { id: 4, name: 'unset' },
                { id: 5, name: 'inherit' },
                { id: 6, name: 'initial' },
            ],
        },
        childItem: {
            alignSelf: [
                { id: 1, name: 'initial' },
                { id: 2, name: 'stretch' },
                { id: 3, name: 'center' },
                { id: 4, name: 'flexStart' },
                { id: 5, name: 'flexEnd' },
                { id: 6, name: 'baseline' },
                { id: 7, name: 'inherit' }
            ],
        }
    },
}