export const positionElem = {
    float: {//final
        parent: {
            display: ["block", "inline", "inline-block", "none", "inherit", "initial"],
            float: ["left ", "right ", "none", "inherit"],
            clear: ["left ", "right ", "none", "inherit", "both"],
        },
        childItem: {
            display: ["block", "inline", "inline-block", "none", "inherit", "initial"],
            float: ["left ", "right ", "none", "inherit"],
            clear: ["left ", "right ", "none", "inherit", "both"],
        }
    },
    flex: { //final version
        parent: {
            display: "flex",
            flexDirection: ["row", "row-reverse", "column", "column-reverse", "initial", "inherit"],
            justifyContent: ["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "initial", "inherit"],
            flexWrap: ["nowrap", "wrap", "wrapReverse", "initial", "inherit"],
            alignItems: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"],
            alignContent: ["stretch", "center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "initial", "inherit"],
        },
        childItem: {
            alignSelf: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"]
        }
    },
    grid: { // add some specific features
        parent: {
            display: "grid",
            justifyContent: ["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "initial", "inherit"],
            alignItems: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"],
            alignContent: ["stretch", "center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "initial", "inherit"],
        },
        childItem: {
            alignSelf: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"]
        }
    },
    position: { // need to fill
        parent: {
            display: "grid",
            justifyContent: ["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "initial", "inherit"],
            alignItems: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"],
            alignContent: ["stretch", "center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "initial", "inherit"],
        },
        childItem: {
            alignSelf: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"]
        }
    }
}
export const selectorsCSS = {}
export const animations = {}
export const features = {}