
$.tree = function () {$.x(); var s = 200;
    d = $.dK('container')($.p().K('tree_controls')(
        $.a('expand all').K('expand_all'),
        $.a('collapse all').K('collapse_all')))
    quas = "<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>";
    ter = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>" + quas + "</ul></li>";
    sec = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec" + ter + "</ul></li>";
    pri = "<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>" + sec + "</ul></li></ul>";
    q = $(pri);
    //d(q)
    if (_.size($('ul.tree'))) {

        $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function () {

            if ($(this).hasClass('expand_all')) {
                $l('ex_all');
                $(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded');
                return false
            }

            else {
                $l('!ex_all');

                $(this).parent('p').next('ul').find('a.tree_trigger')

                    .removeClass('trigger_expanded').end()

                    .find('ul').removeClass('tree_expanded')
            }

            this.blur();
            return false

        });


        $(document).on('click', function () {
            if ($(this).hasClass('tree_trigger')) {
                if ($(this).next('ul').is(':hidden')) {
                    $(this).K('trigger_expanded').next('ul').K('tree_expanded')
                }
                else {
                    $(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')
                }
                this.blur();
                return false
            }
        });


        $('ul.tree li:last-child').K('last');

        $('ul.tree_expanded').prev('a').K('trigger_expanded')

    }
}

