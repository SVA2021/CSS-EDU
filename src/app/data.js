export const positionElem = {//pages
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
        }, //sectionOfOptions
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
    flex: { //final version
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
    grid: { // add some specific features
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

export const selectorsCSS = {
    CSSMainSelectors: {
        part1: {
            elementAndClass: [
                { style: `style1`, name: `class`, class: `.intro`, description: `Selects all elements with class='intro'` },
                { style: `style2`, name: `.class1.class2`, class: `.name1.name2`, description: `Selects all elements with both name1 and name2 set within its class attribute` },
                { style: `style3`, name: `.class1 .class2`, class: `.name1 .name2`, description: `Selects all elements with name2 that is a descendant of an element with name1` },
                { style: `style4`, name: `#id`, class: `#firstname`, description: `Selects the element with id="firstname"` },
                { style: `style5`, name: `*`, class: `*`, description: `Selects all elements` },
                { style: `style6`, name: `element`, class: `p`, description: `Selects all <p> elements` },
                { style: `style7`, name: `element.class`, class: `p.intro`, description: `Selects all <p> elements with class="intro"` },
                { style: `style8`, name: `element,element`, class: `div, p`, description: `Selects all <div> elements and all <p> elements` },
                { style: `style9`, name: `element element`, class: `div p`, description: `Selects all <p> elements inside <div> elements` },
                { style: `style10`, name: `element>element`, class: `div > p`, description: `Selects all <p> elements where the parent is a <div> element` },
                { style: `style11`, name: `element+element`, class: `div + p`, description: `Selects the first <p> element that is placed immediately after <div> elements` },
                { style: `style12`, name: `element1~element2`, class: `div ~ p`, description: `Selects every <p> element that is preceded by a <span> element` },
                { style: `style26`, name: `:empty`, class: `p:empty`, description: `Selects every <p> element that has no children (including text nodes)` },
                { style: `style28`, name: `:first-child`, class: `p:first-child`, description: `Selects every <p> element that is the first child of its parent` },
                { style: `style31`, name: `:first-of-type`, class: `p:first-of-type`, description: `Selects every <p> element that is the first <p> element of its parent` },
                { style: `style38`, name: `:last-child`, class: `p:last-child`, description: `Selects every <p> element that is the last child of its parent` },
                { style: `style39`, name: `:last-of-type`, class: `p:last-of-type`, description: `Selects every <p> element that is the last <p> element of its parent` },
                { style: `style42`, name: `:not(selector)`, class: `:not(p)`, description: `Selects every element that is not a <p> element` },
                { style: `style43`, name: `:nth-child(n)`, class: `p:nth-child(2)`, description: `Selects every <p> element that is the second child of its parent` },
                { style: `style44`, name: `:nth-last-child(n)`, class: `p:nth-last-child(2)`, description: `Selects every <p> element that is the second child of its parent, counting from the last child` },
                { style: `style45`, name: `:nth-last-of-type(n)`, class: `p:nth-last-of-type(2)`, description: `Selects every <p> element that is the second <p> element of its parent, counting from the last child` },
                { style: `style46`, name: `:nth-of-type(n)`, class: `p:nth-of-type(2)`, description: `Selects every <p> element that is the second <p> element of its parent` },
                { style: `style47`, name: `:only-of-type`, class: `p:only-of-type`, description: `Selects every <p> element that is the only <p> element of its parent` },
                { style: `style48`, name: `:only-child`, class: `p:only-child`, description: `Selects every <p> element that is the only child of its parent` },
                { style: `style13`, name: `[attribute]`, class: `[target]`, description: `Selects all elements with a target attribute` },
                { style: `style14`, name: `[attribute=value]`, class: `[href='#00']`, description: `Selects all elements with href='#00'` },
                { style: `style15`, name: `[attribute~=value]`, class: `[title~=flower]`, description: `Selects all elements with a title attribute containing the word "flower"` },
                { style: `style16`, name: `[attribute|=value]`, class: `[lang|=en]`, description: `Selects all elements with a lang attribute value equal to "en" or starting with "en-"` },
                { style: `style17`, name: `[attribute^=value]`, class: `a[href^="https"]`, description: `Selects every <a> element whose href attribute value begins with "https"` },
                { style: `style18`, name: `[attribute$=value]`, class: `a[href$=".pdf"]`, description: `Selects every <a> element whose href attribute value ends with ".pdf"` },
                { style: `style19`, name: `[attribute*=value]`, class: `a[href*="w3schools"]`, description: `Selects every <a> element whose href attribute value contains the substring "w3schools"` },
                { style: `style20`, name: `:active`, class: `a:active`, description: `Selects the active link (click on link to see effect)` },
                { style: `style21`, name: `::after`, class: `p::after`, description: `Insert something after the content of each <p> element` },
                { style: `style22`, name: `::before`, class: `p::before`, description: `Insert something before the content of each <p> element` },
                { style: `style23`, name: `:checked`, class: `input:checked`, description: `Selects every checked <input> element` },
                { style: `style24`, name: `:default`, class: `input:default`, description: `Selects the default checked <input> element` },
                { style: `style25`, name: `:disabled`, class: `input:disabled`, description: `Selects every disabled <input> element` },
                { style: `style27`, name: `:enabled`, class: `input:enabled`, description: `Selects every enabled <input> element` },
                { style: `style29`, name: `::first-letter`, class: `p::first-letter`, description: `Selects the first letter of every <p> element` },
                { style: `style30`, name: `::first-line`, class: `p::first-line`, description: `Selects the first line of every <p> element` },
                { style: `style32`, name: `:focus`, class: `input:focus`, description: `Selects the input element which has focus` },
                { style: `style33`, name: `:hover`, class: `a:hover`, description: `Selects links on mouse over` },
                { style: `style34`, name: `:in-range`, class: `input:in-range`, description: `Selects input elements with a value within a specified range` },
                // { style: `style35`, name: `:indeterminate`, class: `input:indeterminate`, description: `Selects input elements that are in an indeterminate state` },
                { style: `style36`, name: `:invalid`, class: `input:invalid`, description: `Selects all input elements with an invalid value` },
                { style: `style37`, name: `:lang(language)`, class: `p:lang(it)`, description: `Selects every <p> element with a lang attribute equal to "it" (Italian)` },
                { style: `style40`, name: `:link`, class: `a:link`, description: `Selects all unvisited links` },
                { style: `style41`, name: `::marker`, class: `::marker`, description: `Selects the markers of list items` },
                { style: `style49`, name: `:optional`, class: `input:optional`, description: `Selects input elements with no "required" attribute` },
                { style: `style50`, name: `:out-of-range`, class: `input:out-of-range`, description: `Selects input elements with a value outside a specified range` },
                { style: `style51`, name: `::placeholder`, class: `input::placeholder`, description: `Selects input elements with the "placeholder" attribute specified` },
                { style: `style52`, name: `:read-only`, class: `input:read-only`, description: `Selects input elements with the "readonly" attribute specified` },
                { style: `style53`, name: `:read-write`, class: `input:read-write`, description: `Selects input elements with the "readonly" attribute NOT specified` },
                { style: `style54`, name: `:required`, class: `input:required`, description: `Selects input elements with the "required" attribute specified` },
                { style: `style55`, name: `:root`, class: `:root`, description: `Selects the document's root element` },
                { style: `style56`, name: `::selection`, class: `::selection`, description: `Selects the portion of an element that is selected by a user` },
                { style: `style57`, name: `:target`, class: `#news:target`, description: `Selects the current active #news element (clicked on a URL containing that anchor name)` },
                { style: `style58`, name: `:valid`, class: `input:valid`, description: `Selects all input elements with a valid value` },
                { style: `style59`, name: `:visited`, class: `a:visited`, description: `Selects all visited links` },
                { style: `style60`, name: `:fullscreen`, class: `:fullscreen`, description: `Selects the element that is in full-screen mode` },
            ],
        }
    }
}

export const animations = {
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
                //not worked
                // { id: 23, name: `vertical-align`, initValue: `5px`, finalValue: `1500px` },
                // { id: 30, name: `object-position`, initValue: `0% 0%`, finalValue: `100% 100%` },
                // { id: 28, name: `grid`, initValue: `auto auto auto`, finalValue: `100px 100px 100px` },
            ]
        }
    }
}

export const features = {
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

export const js = {
    array: {
        part1: {
            arrayMethod: [
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