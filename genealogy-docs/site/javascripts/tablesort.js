document$.subscribe(function() {
    var tables = document.quearySelectorAll("article table:not([class])")
    tables.forEach(function(table) {
        new Tablesort(table)
    })
})