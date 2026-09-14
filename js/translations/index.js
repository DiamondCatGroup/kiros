import { translate } from "../translations.js";
import { translateElement } from "./api.js";

if (!localStorage.getItem("sosirsOS-language")) localStorage.setItem("sosirsOS-language", "ru")

translateElement("pageTitle", "main.title", localStorage.getItem("sosirsOS-language"))
translateElement("desctiption", "main.description", localStorage.getItem("sosirsOS-language"))