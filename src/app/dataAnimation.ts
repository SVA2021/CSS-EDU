interface animationElemType {
    id: number
    name: string
    initValue: string
    finalValue: string
    description: string
}

interface animationsType {
    AnimationSelectors: {
        part1: {
            properties: Array<animationElemType>
        }
    }
}

export const animations: animationsType = {
    AnimationSelectors: {
        part1: {
            properties: [
                {
                    id: 1, name: `border`, initValue: `1px solid black`, finalValue: `10px dotted red`,
                    description: `any sub-options and sub-sub-options can be also animated individually`
                },
                {
                    id: 2, name: `background`, initValue: `red top left/5px 5px`, finalValue: `blue bottom right/50px 50px`,
                    description: `any sub-options and sub-sub-options can be also animated individually`
                },
                {
                    id: 3, name: `bottom`, initValue: `0px`, finalValue: `50px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 4, name: `left`, initValue: `0px`, finalValue: `50px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 5, name: `top`, initValue: `0px`, finalValue: `50px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 6, name: `right`, initValue: `0px`, finalValue: `50px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 7, name: `color`, initValue: `#F5F5F5`, finalValue: `#19283F`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 8, name: `columns`, initValue: `1`, finalValue: `5`,
                    description: `can be set in any available measure untits, some additional sub-options available`
                },
                {
                    id: 9, name: `font`, initValue: `14px normal`, finalValue: `32px bold`,
                    description: `any sub-options and sub-sub-options can be also animated individually`
                },
                {
                    id: 10, name: `height`, initValue: `100px`, finalValue: `350px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 20, name: `width`, initValue: `150px`, finalValue: `500px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 11, name: `letterSpacing`, initValue: `2px`, finalValue: `12px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 12, name: `lineHeight`, initValue: `2px`, finalValue: `20px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 13, name: `margin`, initValue: `5px`, finalValue: `50px`,
                    description: `can be set in any available measure untits, any sub-options and sub-sub-options can be also animated individually`
                },
                {
                    id: 14, name: `padding`, initValue: `5px`, finalValue: `50px`,
                    description: `can be set in any available measure untits, any sub-options and sub-sub-options can be also animated individually`
                },
                {
                    id: 15, name: `maxHeight`, initValue: `150px`, finalValue: `350px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 16, name: `minHeight`, initValue: `500px`, finalValue: `50px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 17, name: `maxWidth`, initValue: `250px`, finalValue: `500px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 18, name: `minWidth`, initValue: `750px`, finalValue: `500px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 19, name: `opacity`, initValue: `1`, finalValue: `0`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 21, name: `outline`, initValue: `0px solid black`, finalValue: `10px dotted red`,
                    description: `can be set in any available measure untits, any sub-options and sub-sub-options can be also animated individually`
                },
                {
                    id: 22, name: `text-shadow`, initValue: `1px 1px 1px black`, finalValue: `10px 20px 30px blue`,
                    description: `can be set in any available measure untits, any sub-options and sub-sub-options can be also animated individually`
                },
                {
                    id: 24, name: `word-spacing`, initValue: `5px`, finalValue: `15px`,
                    description: `can be set in any available measure untits`
                },
                {
                    id: 25, name: `text-indent`, initValue: `5px`, finalValue: `50px`,
                    description: `can be set in any available measure untits, any sub-options and sub-sub-options can be also animated individually`
                },
                {
                    id: 26, name: `z-index`, initValue: `0`, finalValue: `-1`,
                    description: `can be set in any available measure untits, effect depends on same options of elements on page`
                },
                {
                    id: 27, name: `transform`, initValue: `rotate(0deg)`, finalValue: `rotate(180deg)`,
                    description: `another transformable options also allowed`
                },
                {
                    id: 29, name: `box-shadow`, initValue: `1px 1px 1px black`, finalValue: `10px 20px 30px blue`,
                    description: `can be set in any available measure untits, any sub-options and sub-sub-options can be also animated individually`
                },
                {
                    id: 30, name: `filter`, initValue: `grayscale(0%)`, finalValue: `grayscale(100%)`,
                    description: `another sub-options for filter property also animatable`
                },
            ]
        }
    }
}
