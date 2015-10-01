QUEUE = function () {
	z()
	s = $St(500)
	queue = new cjs.LoadQueue()
	queue.on("complete", handleComplete, this)
	queue.loadManifest([
		{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}
	])
	function handleComplete() {
		image = queue.getResult("myImage")
		s.A($Bm(image))
	}
}


 

QUEUEMUG = function () {
	z()
	s = $St(500, 500)
	qu = Ql().c(graphics, this).l([
		{id: "mug", src: "/getMug"},
		{id: "me", src: "/me.png"}
	])
	////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
	function graphics() {
		// mug= s.bData( qu.gR("mug") ).drag()
		me = cjs.bm(qu.gR("me")).drag()
		s.A(me)
	}
}
CONTMUG = function () {
	z()
	s = $St(1000).A(
			m = mugCont()
	)//.rgc('+')
	SL(m)
}
//example self explanatory :)
MF = function () {
	W().C('r')
	Q(['me', 'guy', 'chicks', 'sun'], function () {
		w.C('g')
		w.i.A(Q.b('me'), Q.b('guy')
		)
	})
}//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')

TXWQ = function () {
	WQ({}, worldRdy)
	function worldRdy() {
		var me, guy
		w.C('p') // <- WQ({C:'r'})
		w.i.A(Q.b('sun'), Q.b('guy'))
		me = w.i.qB("me")
		me.drag()
	}
}
//by calling W()._(fn)
// basic manifest will load and your function will get w passsed in
// when it is called (when ready)
// to get an image : // var me = w.i.qB("me")
QMUG = function () {
	W()._(function (w) {
	})
	function toPreloadSomeonesMugAsMug() {
		// its how i can preload someone's mug as 'mug' !
		//  mug= s.bData( qu.gR("mug") ).drag()
	}
}