
HOLY=function(){z()



    //en.wikipedia.org/wiki/Holy_Grail_(web_design)) is a classic CSS problem with various solutions presented over time. If you're unfamiliar with the history of the Holy Grail layout, this [A List Apart article](http://alistapart.com/article/holygrail) offers a pretty good summary and links to a few of the more well-known solutions.

    //At its core, the Holy Grail Layout is a page with a header,
    //    footer, and three columns.
    // The center column contains the main content
    // , and the left and right columns contain supplemental content like ads or navigation.
    //
    //    Most CSS solutions to this problem aim to meet a few goals:
    //    - They should have a fluid center with fixed-width sidebars.
    //- The center column (main content) should appear first in the HTML source.
    //- All columns should be the same height, regardless of which column is actually the tallest.
    //- They should require minimal markup.
    //- The footer should "stick" to the bottom of the page when content is sparse.






    $.bd().K('HolyGrail').A(
        $('<header>'),
        $.d().K('HolyGrail-body').A(
            $('<main>').K('HolyGrail-content'),
            $('<nav>').K('HolyGrail-nav'),
            $('<aside>').K('HolyGrail-ads')
        ),
        $('<footer>')



    //  Getting the center content row to stretch and the footer to stick to the bottom is solved
    // with the same technique shown in the [Sticky Footer](../sticky-footer/) example.
    // The only difference is the center row of the Holy Grail layout (`.HolyGrail-body`)
    // needs to be `display:flex` in order to properly arrange its children.


    $CSS({

        _HolyGrail: {display: 'flex', 'min-height': '100vh', 'flex-direction': 'column'},
        '_HolyGrail-body': {display: 'flex', flex: 1},
//Styling three equal-height columns with a fluid center and fixed-width sidebars is just as easy:
        '.HolyGrail-content': {flex: 1},
        '.HolyGrail-nav, .HolyGrail-ads': {flex: '0 0 12em'},   /* 12em is the width of the columns */
        '.HolyGrail-nav': {order: -1 }  /* put the nav on the left */

        //<aside class="Notice"><strong>Note:</strong>&nbsp; the CSS required to make this demo work cross-browser is slightly different from the CSS shown in the examples above, which assume a fully spec-compliant browser. See the <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css">comments in the source</a> for more details.</aside>
        //  example:  responsive, mobile-first.
        // mobile-first and mobile-friendly version of the Holy Grail layout is easy:

        // make the center section `flex-direction:
        // column` by default and then `flex-direction:row` for larger screens.
        // You can also resize this browser window to see it in action.
        '.HolyGrail,.HolyGrail-body': {display: 'flex', 'flex-direction': 'column'},
        '.HolyGrail-nav': {order: -1},
        '@media (min-width: 768px)': {
            '.HolyGrail-body': {'flex-direction': row, flex: 1},
            '.HolyGrail-content': {flex: 1},
            '.HolyGrail-nav, .HolyGrail-ads':
            {flex: '0 0 12em'}}




    })
    //github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css) for the `HolyGrail` component used in this demo on Github.

}
