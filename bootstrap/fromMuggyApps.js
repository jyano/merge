BOOT3 = function () {
    z();
    $._d = function () {
        var g = G(arguments), d = $('<div>').A()
        g.e(function (q) {
            d.A(q)
        })
        return d
    }
    $._d(
        $._d(
            $.h4('Collapsed content'),
            $.sp('Toggleable  via  the  navbar  brand').K("test-muted")
        ).K("bg-inverse p-a")
    ).K('collapse').id('exCollapsingNavbar')
    $('<nav>').K("navbar navbar-light bg-faded").A(
        $.bt().A('&#9776;').K("navbar-toggler")
            .data('toggle', 'collapse')
            .data('target', '#exCollapsingNavbar'))
    $.h1('boot4')
    $('<button>').A('primary').A().K('btn btn-primary')
    $('<button>').A('warning large').A().K('btn btn-warning btn-lg')
}
BOOT4 = function () {
    z()
    $('<nav>').A().K("navbar navbar-light bg-faded").A(
        $.a(' Navbar').K("navbar-brand"),
        $.ul().K("nav navbar-nav").A(
            $.li().K("nav-item active").A($.a('Home').A($.sp('(current)').K('sr-only').K('nav-link'))),
            $.li().K("nav-item").A($.a('Features').K('nav-link')),
            $.li().K("nav-item").A($.a('Pricing').K('nav-link')),
            $.li().K("nav-item").A($.a('About').K('nav-link'))
        ),
        $.f().K("form-inline navbar-form pull-right").A(
            $.ip().K("form-control").at('placeholder', 'Search'),
            $.bt('Search').K("btn btn-success-outline")
        )
    )
}
