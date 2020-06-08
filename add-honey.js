
const honeyInput = (name) => {
    // name must be unique but obscure enough that bots won't detect it
    // e.g. 'makeshift_website_url'
    const honey_inp = document.createElement("input");
    honey_inp.setAttribute("type", "text"); // default value of empty string
    honey_inp.setAttribute("name", name);
    honey_inp.setAttribute("style", "display: none !important");
    honey_inp.setAttribute("tabindex", "-1");
    honey_inp.setAttribute("autocomplete", "preferably not");
    // Clever spam bots might detect if 'autocomplete' is 'off'. 
    // But a browser won't fill-in the field if 'autocomplete' is not 'on'.
    return honey_inp;
}

function addHoney(formId, name) {
    const form = document.getElementById(formId);
    form.appendChild(honeyInput(name));
    // a name that suggests the input is a password will prevent
    // some spam bots from bothering with the form at all
}