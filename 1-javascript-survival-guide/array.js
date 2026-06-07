const bahasa = ['PHP', 'Dart','Javascript']

const renderList = bahasa.map((item)=> {
    return `'<li>${item}</li>'`
})
console.log(renderList);


