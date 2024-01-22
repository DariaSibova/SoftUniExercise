function factory(library, orders) {
    const result = [];
    for (let order of orders) {
    // Create a copy of the 'template' object from the current order
    const current = Object.assign({}, order.template);
    for (let part of order.parts) {
    current[part] = library[part];
    }
    result.push(current);
    }
    return result;
    }