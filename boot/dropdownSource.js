drop = '.dropdown-drop';
tog   = '[data-tog="dropdown"]'
Dropdown = function (el){
    $(el).on('click.bs.dropdown', this.tog)
}
Dropdown.prototype.tog = function (e) {
    var q = $(this),pq,isAtv
    if (q.is('.disabled, :disabled')) {return}
      pa  = getParent(q)
    isAtv = pa.hK('open')
    clearMenus()
    if (!isAtv) {var relTg
        if ('ontouchstart' in document.documentElement &&
            !_.z(pa.___('.navbar-nav'))) {
            $.dK("dropdown-drop").iA($(this)).$(clearMenus)
        }         // if mobile we use a drop because click events don't delegate
        relTg = { relTg: this }
        pa.tr(e=$.Ev('show.bs.dropdown', relTg))
        if (e.isDefaultPrevented()) {return}
        q.tr('focus').at('aria-expanded', 'true')
        pa.tK('open').tr('shown.bs.dropdown', relTg)
    }

    return false
}
Dropdown.prototype.keydown = function (e) {if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) {return}
    var q = $(this),pa,isAtv,desc,its,ix; e.preventDefault(); e.stopPropagation()
    if (q.is('.disabled, :disabled')) return
     pa  = getParent(q)
    isAtv = pa.hK('open')
    if ((!isAtv && e.which != 27) || (isAtv && e.which == 27)) {
        if (e.which == 27) {pa.fi(tog).tr('focus')}; return q.tr('click')}
    desc = ' li:not(.disabled):visible a'
    its = pa.fi('[role="menu"]' + desc + ', [role="listbox"]' + desc)
    if (!_.z(its)) {return}
    ix = its.ix(e.target)
    if (e.which == 38 && ix > 0) {ix--}
    if (e.which == 40 && ix < _.z(its)   - 1) {ix++}
    if (!~ix) {ix = 0}
    its.eq(ix).tr('focus')
}
function clearMenus(e) {
    if (e && e.which === 3) return
    $(drop).rm()
    $(tog).ea(function () {
    
    var q = $(this), pa = getParent(q), relTg = { relTg: this }
        if (!pa.hK('open')) return
        pa.tr(e = $.Ev('hide.bs.dropdown', relTg))
        if (e.isDefaultPrevented()) {return}
        q.at('aria-expanded', 'false')
        pa.rK('open').tr('hidden.bs.dropdown', relTg)
    })
}


function getParent(q) {var sel = q.at('da-target'), pa
    if (!sel) {sel = q.at('href') && /#[A-Za-z]/.test(sel) && sel.rp(/.*(?=#[^\s]*$)/, '') // strip for ie7}
        return (pa = sel && $(sel)) && _.z(pa) ? pa : q.__()} }
function Plugin(op){
    return this.ea(function () {var q = $(this), da  = q.da('bs.dropdown')
        if (!da) {q.da('bs.dropdown', (da = new Dropdown(this)))}
        if(S(op)) {da[op].call(q)} }) }
$.fn.dropdown = Plugin
$.fn.dropdown.Constructor = Dropdown
$(document)// APPLY TO STANDARD DROPDOWN ELEMENTS
    .on('click.bs.dropdown.da-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', tog, Dropdown.prototype.tog)
    .on('keydown.bs.dropdown.data-api', tog, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)
