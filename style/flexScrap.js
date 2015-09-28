
//http://jsfiddle.net/flyingsheep/gmeqm/
//http://jsfiddle.net/3zLRJ/4/    //http://stackoverflow.com/questions/11451638/drag-re-sizable-2-column-layout



o={
    'flex-direction':'row',
    'flex-wrap':'wrap',
    'justify-content':'space-around',
    'align-items':'stretch', 'align-content':'stretch'
}

i=['flex-grow','flex-shrink','flex-basis']

// Flex-grow is just a declaration of the items' size, but unlike pixels or ems,
// it refers to the item's size relative to the other flex items in the container.
// Go ahead and click the gear on any of the flex items and adjust their flex-grow value to see what I mean.


// "flex-shrink"   specs how much the flex item will shrink
// relative to other flex items in the flex container
// when the space on a row has been filled.

//Finally we come to "flex-basis", which is a very important one.
// It's a lot like "min-width", but for flex items only.
// Basically it says, "make this item fill the space it has and shrink as much as it needs to...
// buuuut the smallest it can be is "X pixels or ems".

o={
    $A:'align-self',
    $B:'basis',
    $C:'align-content',
    $D:'direction',
    $:'flex', $F:'flex',
    $G:'grow',
    $I:'align-items',
    $J:'justify-content',
    $O:'order',
    $S:'shrink',
    $W:'wrap'
}
/*



Web/CSS/align-content The CSS align-content property aligns a flex container's lines within the flex container when there ...
Web/CSS/align-items The CSS align-items property aligns flex items of the current flex line the same way as ...
Web/CSS/align-self The align-self CSS property aligns flex items of the current flex line overriding the align-items ...
    Web/CSS/CSS_Flexible_Box_Layout CSS Flexible is a module of CSS that defines a multi-column layout, allowing to express how content ...
    Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes The CSS3 Flexible Box, or flexbox, is a layout mode providing for the arrangement of elements on a ...
    Web/CSS/CSS_Flexible_Box_Layout/Using_flexbox_to_lay_out_web_applications Using flexbox can help you design compelling layouts in web applications that scale better from ...
    Web/CSS/flex The flex CSS property is a shorthand property specifying the ability of a flex item to alter its ...
    Web/CSS/flex-basis The flex-basis CSS property specifies the flex basis which is the initial main size of a flex item. ...
    Web/CSS/flex-direction The flex-direction CSS property specifies how flex items are placed in the flex container defining ...
    Web/CSS/flex-flow The flex-flow CSS property is a shorthand property for flex-direction and flex-wrap individual ...
    Web/CSS/flex-grow The flex-grow CSS property specifies the flex grow factor of a flex item. It specifies what amount ...
    Web/CSS/flex-shrink The flex-shrink CSS property specifies the flex shrink factor of a flex item.
    Web/CSS/flex-wrap The CSS flex-wrap property specifies whether flex items are forced into a single line or can be ...
    Web/CSS/justify-content The CSS justify-content property defines how the browser distributes space between and around flex ...
    Web/CSS/order The CSS order property specifies the order used to lay out flex items in their flex container. ...


    */