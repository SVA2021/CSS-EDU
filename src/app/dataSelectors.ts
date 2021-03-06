interface selectorsElementType {
    style: string
    name: string
    class: string
    description: string
}

interface selectorsCSSType {
    CSSMainSelectors: {
        part1: {
            elementAndClass: Array<selectorsElementType>
        }
    }
}

export const selectorsCSS: selectorsCSSType = {
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
