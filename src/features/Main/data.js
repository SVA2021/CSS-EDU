export const positionElem = {//pages
    float: {//mainOption
        parent: {//optionList // groupName
            display: ["initial", "block", "inline", "inline-block", "none", "inherit",],
            float: ["none", "left ", "right ", "inherit"],//optionItem
            clear: ["none", "left ", "right ", "inherit", "both"],
        }, //sectionOfOptions
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

export const selectorsCSS = {
    CSSMainSelectors: { // need to fill
        part1: {
            elementAndClass: [
                { style: `style1`, id: `class`, class: `.intro`, description: `Selects all elements with class='intro'` },
                { style: `style2`, id: `.class1.class2`, class: `.name1.name2`, description: `Selects all elements with both name1 and name2 set within its class attribute` },
                { style: `style3`, id: `.class1 .class2`, class: `.name1 .name2`, description: `Selects all elements with name2 that is a descendant of an element with name1` },
                { style: `style4`, id: `#id`, class: `#firstname`, description: `Selects the element with id="firstname"` },
                { style: `style5`, id: `*`, class: `*`, description: `Selects all elements` },
                { style: `style6`, id: `element`, class: `p`, description: `Selects all <p> elements` },
                { style: `style7`, id: `element.class`, class: `p.intro`, description: `Selects all <p> elements with class="intro"` },
                { style: `style8`, id: `element,element`, class: `div, p`, description: `Selects all <div> elements and all <p> elements` },
                { style: `style9`, id: `element element`, class: `div p`, description: `Selects all <p> elements inside <div> elements` },
                { style: `style10`, id: `element>element`, class: `div > p`, description: `Selects all <p> elements where the parent is a <div> element` },
                { style: `style11`, id: `element+element`, class: `div + p`, description: `Selects the first <p> element that is placed immediately after <div> elements` },
                { style: `style12`, id: `element1~element2`, class: `p ~ ul`, description: `Selects every <ul> element that is preceded by a <p> element` },
            ]
        },
        part2: {
            attributes: [
                { style: `style13`, id: `[attribute]`, class: `[target]`, description: `Selects all elements with a target attribute` },
                { style: `style14`, id: `[attribute=value]`, class: `[target=_blank]`, description: `Selects all elements with target="_blank"` },
                { style: `style15`, id: `[attribute~=value]`, class: `[title~=flower]`, description: `Selects all elements with a title attribute containing the word "flower"` },
                { style: `style16`, id: `[attribute|=value]`, class: `[lang|=en]`, description: `Selects all elements with a lang attribute value equal to "en" or starting with "en-"` },
                { style: `style17`, id: `[attribute^=value]`, class: `a[href^="https"]`, description: `Selects every <a> element whose href attribute value begins with "https"` },
                { style: `style18`, id: `[attribute$=value]`, class: `a[href$=".pdf"]`, description: `Selects every <a> element whose href attribute value ends with ".pdf"` },
                { style: `style19`, id: `[attribute*=value]`, class: `a[href*="w3schools"]`, description: `Selects every <a> element whose href attribute value contains the substring "w3schools"` },
            ],
        },
        part3: {
            pseudo: [
                { style: `style20`, id: `sfdg`, class: ``, description: `` },

            ],
        }
    }
}

export const animations = {
    AnimationSelectors: { // need to fill
        elementAndClass: {
            chooseOne: [
                { style: `style1`, id: `class`, class: `.intro`, description: `Selects all elements with class='intro'` },
                { style: `style2`, id: `.class1.class2`, class: `.name1.name2`, description: `Selects all elements with both name1 and name2 set within its class attribute` },
                { style: `style3`, id: `.class1 .class2`, class: `.name1 .name2`, description: `Selects all elements with name2 that is a descendant of an element with name1` },
                { style: `style4`, id: `#id`, class: `#firstname`, description: `Selects the element with id="firstname"` },
                { style: `style5`, id: `*`, class: `*`, description: `Selects all elements` },
                { style: `style6`, id: `element`, class: `p`, description: `Selects all <p> elements` },
                { style: `style7`, id: `element.class`, class: `p.intro`, description: `Selects all <p> elements with class="intro"` },
                { style: `style8`, id: `element,element`, class: `div, p`, description: `Selects all <div> elements and all <p> elements` },
                { style: `style9`, id: `element element`, class: `div p`, description: `Selects all <p> elements inside <div> elements` },
                { style: `style10`, id: `element>element`, class: `div > p`, description: `Selects all <p> elements where the parent is a <div> element` },
                { style: `style11`, id: `element+element`, class: `div + p`, description: `Selects the first <p> element that is placed immediately after <div> elements` },
                { style: `style12`, id: `element1~element2`, class: `p ~ ul`, description: `Selects every <ul> element that is preceded by a <p> element` },
            ]
        },
        attributes: {
            chooseOne: [
                { style: `style13`, id: `[attribute]`, class: `[target]`, description: `Selects all elements with a target attribute` },
                { style: `style14`, id: `[attribute=value]`, class: `[target=_blank]`, description: `Selects all elements with target="_blank"` },
                { style: `style15`, id: `[attribute~=value]`, class: `[title~=flower]`, description: `Selects all elements with a title attribute containing the word "flower"` },
                { style: `style16`, id: `[attribute|=value]`, class: `[lang|=en]`, description: `Selects all elements with a lang attribute value equal to "en" or starting with "en-"` },
                { style: `style17`, id: `[attribute^=value]`, class: `a[href^="https"]`, description: `Selects every <a> element whose href attribute value begins with "https"` },
                { style: `style18`, id: `[attribute$=value]`, class: `a[href$=".pdf"]`, description: `Selects every <a> element whose href attribute value ends with ".pdf"` },
                { style: `style19`, id: `[attribute*=value]`, class: `a[href*="w3schools"]`, description: `Selects every <a> element whose href attribute value contains the substring "w3schools"` },
            ],
        },
        pseudo: {
            chooseOne: [
                { style: `style20`, id: ``, class: ``, description: `` },

            ],
        }
    }
}
export const features = {}