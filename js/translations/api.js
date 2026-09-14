import { translate } from "../translations";

const translateElement = (id, id2, lang) => {
    document.getElementById(id).innerHTML = translate(id2, lang)
}

export {
    translateElement
}