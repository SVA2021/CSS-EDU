export const positionElem = {//pages
    float: {//mainOption
        parent: {//optionList
            display: ["initial", "block", "inline", "inline-block", "none", "inherit",],
            float: ["none", "left ", "right ", "inherit"],//optionItem
            clear: ["none", "left ", "right ", "inherit", "both"],
        },
        childItem: {
            display: ["block", "inline", "inline-block", "none", "inherit", "initial"],
            float: ["left ", "right ", "none", "inherit"],
            clear: ["left ", "right ", "none", "inherit", "both"],
        }
    },
    flex: { //final version
        parent: {
            display: ["flex"],
            flexDirection: ["initial", "row", "row-reverse", "column", "column-reverse", "inherit"],
            justifyContent: ["initial", "flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "inherit"],
            flexWrap: ["initial", "nowrap", "wrap", "wrapReverse", "inherit"],
            alignItems: ["initial", "stretch", "center", "flexStart", "flexEnd", "baseline", "inherit"],
            alignContent: ["initial", "stretch", "center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "inherit"],
        },
        childItem: {
            alignSelf: ["initial", "stretch", "center", "flexStart", "flexEnd", "baseline", "inherit"]
        }
    },
    grid: { // add some specific features
        parent: {
            display: ["grid"],
            justifyContent: ["initial", "flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "inherit"],
            alignItems: ["initial", "stretch", "center", "flexStart", "flexEnd", "baseline", "inherit"],
            alignContent: ["initial", "stretch", "center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "inherit"],
        },
        childItem: {
            alignSelf: ["initial", "stretch", "center", "flexStart", "flexEnd", "baseline", "inherit"]
        }
    },
    position: { // need to fill
        parent: {
            justifyContent: ["initial", "flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "inherit"],
            alignItems: ["initial", "stretch", "center", "flexStart", "flexEnd", "baseline", "inherit"],
            alignContent: ["initial", "stretch", "center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "inherit"],
        },
        childItem: {
            alignSelf: ["initial", "stretch", "center", "flexStart", "flexEnd", "baseline", "inherit"]
        }
    }
}
export const selectorsCSS = {}
export const animations = {}
export const features = {}

// let array = Object.keys(positionElem);
// console.log(array);