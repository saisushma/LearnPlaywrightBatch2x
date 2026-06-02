function normalizeJsBasicsLabel(label) {
    let normalizedLabel = label
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    if (normalizedLabel === "") {
        return "js-basic";
    }

    return "js-basic-" + normalizedLabel;
}

// console.log(normalizeJsBasicsLabel(" Login Button "));
// console.log(normalizeJsBasicsLabel("User Profile: Edit!"));
// console.log(normalizeJsBasicsLabel("---Search@@Box---"));
console.log(normalizeJsBasicsLabel(" "));
