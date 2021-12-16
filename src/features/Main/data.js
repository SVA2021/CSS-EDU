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
                { style: `style12`, id: `element1~element2`, class: `div ~ p`, description: `Selects every <p> element that is preceded by a <span> element` },
                { style: `style26`, id: `:empty`, class: `p:empty`, description: `Selects every <p> element that has no children (including text nodes)` },
                { style: `style28`, id: `:first-child`, class: `p:first-child`, description: `Selects every <p> element that is the first child of its parent` },
                { style: `style31`, id: `:first-of-type`, class: `p:first-of-type`, description: `Selects every <p> element that is the first <p> element of its parent` },
                { style: `style38`, id: `:last-child`, class: `p:last-child`, description: `Selects every <p> element that is the last child of its parent` },
                { style: `style39`, id: `:last-of-type`, class: `p:last-of-type`, description: `Selects every <p> element that is the last <p> element of its parent` },
                { style: `style42`, id: `:not(selector)`, class: `:not(p)`, description: `Selects every element that is not a <p> element` },
                { style: `style43`, id: `:nth-child(n)`, class: `p:nth-child(2)`, description: `Selects every <p> element that is the second child of its parent` },
                { style: `style44`, id: `:nth-last-child(n)`, class: `p:nth-last-child(2)`, description: `Selects every <p> element that is the second child of its parent, counting from the last child` },
                { style: `style45`, id: `:nth-last-of-type(n)`, class: `p:nth-last-of-type(2)`, description: `Selects every <p> element that is the second <p> element of its parent, counting from the last child` },
                { style: `style46`, id: `:nth-of-type(n)`, class: `p:nth-of-type(2)`, description: `Selects every <p> element that is the second <p> element of its parent` },
                { style: `style47`, id: `:only-of-type`, class: `p:only-of-type`, description: `Selects every <p> element that is the only <p> element of its parent` },
                { style: `style48`, id: `:only-child`, class: `p:only-child`, description: `Selects every <p> element that is the only child of its parent` },
                { style: `style13`, id: `[attribute]`, class: `[target]`, description: `Selects all elements with a target attribute` },
                { style: `style14`, id: `[attribute=value]`, class: `[target=_blank]`, description: `Selects all elements with target="_blank"` },
                { style: `style15`, id: `[attribute~=value]`, class: `[title~=flower]`, description: `Selects all elements with a title attribute containing the word "flower"` },
                { style: `style16`, id: `[attribute|=value]`, class: `[lang|=en]`, description: `Selects all elements with a lang attribute value equal to "en" or starting with "en-"` },
                { style: `style17`, id: `[attribute^=value]`, class: `a[href^="https"]`, description: `Selects every <a> element whose href attribute value begins with "https"` },
                { style: `style18`, id: `[attribute$=value]`, class: `a[href$=".pdf"]`, description: `Selects every <a> element whose href attribute value ends with ".pdf"` },
                { style: `style19`, id: `[attribute*=value]`, class: `a[href*="w3schools"]`, description: `Selects every <a> element whose href attribute value contains the substring "w3schools"` },
                { style: `style20`, id: `:active`, class: `a:active`, description: `Selects the active link` },
                { style: `style21`, id: `::after`, class: `p::after`, description: `Insert something after the content of each <p> element` },
                { style: `style22`, id: `::before`, class: `p::before`, description: `Insert something before the content of each <p> element` },
                { style: `style23`, id: `:checked`, class: `input:checked`, description: `Selects every checked <input> element` },
                { style: `style24`, id: `:default`, class: `input:default`, description: `Selects the default <input> element` },
                { style: `style25`, id: `:disabled`, class: `input:disabled`, description: `Selects every disabled <input> element` },
                { style: `style27`, id: `:enabled`, class: `input:enabled`, description: `Selects every enabled <input> element` },
                { style: `style29`, id: `::first-letter`, class: `p::first-letter`, description: `Selects the first letter of every <p> element` },
                { style: `style30`, id: `::first-line`, class: `p::first-line`, description: `Selects the first line of every <p> element` },
                { style: `style32`, id: `:focus`, class: `input:focus`, description: `Selects the input element which has focus` },
                { style: `style33`, id: `:hover`, class: `a:hover`, description: `Selects links on mouse over` },
                { style: `style34`, id: `:in-range`, class: `input:in-range`, description: `Selects input elements with a value within a specified range` },
                { style: `style35`, id: `:indeterminate`, class: `input:indeterminate`, description: `Selects input elements that are in an indeterminate state` },
                { style: `style36`, id: `:invalid`, class: `input:invalid`, description: `Selects all input elements with an invalid value` },
                { style: `style37`, id: `:lang(language)`, class: `p:lang(it)`, description: `Selects every <p> element with a lang attribute equal to "it" (Italian)` },
                { style: `style40`, id: `:link`, class: `a:link`, description: `Selects all unvisited links` },
                { style: `style41`, id: `::marker`, class: `::marker`, description: `Selects the markers of list items` },
                { style: `style49`, id: `:optional`, class: `input:optional`, description: `Selects input elements with no "required" attribute` },
                { style: `style50`, id: `:out-of-range`, class: `input:out-of-range`, description: `Selects input elements with a value outside a specified range` },
                { style: `style51`, id: `::placeholder`, class: `input::placeholder`, description: `Selects input elements with the "placeholder" attribute specified` },
                { style: `style52`, id: `:read-only`, class: `input:read-only`, description: `Selects input elements with the "readonly" attribute specified` },
                { style: `style53`, id: `:read-write`, class: `input:read-write`, description: `Selects input elements with the "readonly" attribute NOT specified` },
                { style: `style54`, id: `:required`, class: `input:required`, description: `Selects input elements with the "required" attribute specified` },
                { style: `style55`, id: `:root`, class: `:root`, description: `Selects the document's root element` },
                { style: `style56`, id: `::selection`, class: `::selection`, description: `Selects the portion of an element that is selected by a user` },
                { style: `style57`, id: `:target`, class: `#news:target`, description: `Selects the current active #news element (clicked on a URL containing that anchor name)` },
                { style: `style58`, id: `:valid`, class: `input:valid`, description: `Selects all input elements with a valid value` },
                { style: `style59`, id: `:visited`, class: `a:visited`, description: `Selects all visited links` },
                { style: `style60`, id: `:fullscreen`, class: `:fullscreen`, description: `Selects the element that is in full-screen mode` },
            ],
        }
    }
}

export const animations = {
    AnimationSelectors: { // need to fill
        part1: {
            mainAnimatedProperties: [
                { id: `border`, initValue: `1px`, finalValue: `20px` },
            ]
        }
    }
}
export const features = {};

// let newArray = positionElem.flex.childItem.map((item) => {
//     let i = 1;
//     return {id: i++, name: item}
// })

// console.log(newArray);