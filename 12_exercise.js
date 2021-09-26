let com = "com";
let a = document.links;

Array.from(a).forEach(function (element) {
    if (String(element).includes(com)) {
        console.log(element);
    }
});