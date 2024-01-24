function editElement(element,match,replacer) {
    // TODO
let content = element.textContent;
element.textContent = content.split(match).join(replacer)
}