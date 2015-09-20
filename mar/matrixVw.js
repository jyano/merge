$CSS({
    '#content': {width: '500px', 'margin-left': 'auto', 'margin-right': 'auto'},
    table: {'border-collapse': 'collapse'},
    td: {border: '5px solid #000', width: '100px', height: '100px', 'line-height': '100px', 'text-align': 'center', 'font-size': '70px' },
    'body:nth-of-type(1) .unicode:after':  {color:'#008000', 'font-weight':900, 'text-shadow':'1px 1px 2px #000'},
    'body:nth-of-type(1) .large-circle:after' : '{content:"\25EF"}',
    'body:nth-of-type(1) .multiplication-x:after':  '{content:"\2715"}'
})
$.dI('content',[])
//<script type="text/template" id="matrix-template">
//<tbody> </tbody>
//<script type="text/template" id="row-template">
//<td class="a"><%= row[0] %></td> <td class="b"><%= row[1] %></td> <td class="c"><%= row[2] %></td>z
MyApp = new Ma.Ap()
MyApp.addRegions({
    mainRegion: "#content"
})
Row = Bb.M.x({

    defaults: {turn: ["player1"] }, //(static variable)
    i: function() { this.s("row", ["", "", ""]) },
    set_piece: function(pos) {var row = this.g('row'),
            piece = "<span class=\"unicode large-circle\"></span>",
            turn = this.g("turn");
        if (turn[0] == "player1") {turn[0] = "player2"
            piece = "<span class=\"unicode multiplication-x\"></span>"}
        else {turn[0] = "player1"}
        row[pos] = piece; this.s('row', row); //not needed
    }
})
Matrix = Bb.C.x({ md: Row
})
RowView = Ma.IV.x({tagName: 'tr', className: 'row',template: "#row-template",
    ev: {'click td': "make_move"},
    make_move: function(e){var vw=this
        if ($(e.target).html() == "") {
            vw.md.set_piece({a:0, b:1, c:2}[e.target.className])
            vw.r()
        }
    }
})
MatrixView = Ma.CmV.x({
    template: "#matrix-template",
    tagName: 'table',
    id: "matrix",
    className: 'table-striped table-bordered',
    itemView: RowView,
    appendHtml: function(clVw, itVw){
        clVw.$("tbody").A(itVw.el)
    }
})
MyApp.addInitializer(function(op){
    MyApp.mainRegion.show(
        new MatrixView({ collection: op.matrix })
    )
})


$(function(){

    MyApp.start({

        matrix:  new Matrix([ {}, {}, {} ])
    })

})