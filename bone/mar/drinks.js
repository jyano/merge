$CSS({

    h1: {
        'font-size' :'1.5em',
        'font-family':'Molle',
        cursive:true},

    '#out': {'margin-top':'50px'},
    'ul li': {margin:'5px', cursor:'pointer', border:'1px solid #CCC',padding:'10px'}

})
$.dK('container', [$.h1('Marionette 101'),
    $.a('Show Drinks').id('show-drinks'),
    $.p('Drink Menu'),
    $.dI('menu',[]),  //$.ul().id('menulist')
    $.dI('out',[ $.h2('Debug Log:') ])
])
//<script type="text/template" id="menu-item-template"> <%= n %>  Price: $<%= price %> </script>
MenuItCl = Bb.C.x({
    md: MenuItM = Bb.M.x()
})
MenuItVw = Bb.V.x({tagName: 'li',
    model: MenuItM,
    template: _.template($('#menu-item-template').html()),
    events: {'click':'itemClick'},
    render: function(){this.$el.html(
        this.template(this.model.j()))
        return this },
    itemClick: function(e){var vw=this
        $('#out').A(
            'Thanks for the '+vw.md.g('n')+' Jack!',
            $.br()
        )}
})
MenuItVw =  Ma.ItemView.x({
    model: MenuItM,
    template: '#menu-item-template',
    tagName: 'li',
    events: {'click':'itemClick'},
    itemClick: function(){
        $('#out').append('Thanks for the ' + this.model.g('n') + ' Jack! <br>');
    }
});
MenuView = Bb.V.x({
    el: "#menulist",
    r: function(){var vw=this, els=[]
        vw.cl.ea(function(md){
            els.push((new MenuItVw({md:md})).r().el)
        })
        $(vw.el).html(els)}
})
MenuView =  Ma.ClVw.x({ itemView: MenuItVw, tagName: 'ul' })
region = new Ma.Region({el: "#menu" })

$('#show-drinks').on('click',function(){
    region.show(
        new MenuVw({
            cl: new MenuItCl([
                {n: 'Margarita', price: '5.75'}, {n: 'Dos XX', price: '5.00'}, {n: 'Corona', price: '4.50'}
            ])
        })
    )
})

