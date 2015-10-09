T = cjs.Ticker
T.t = cjs.t = cjs.tick = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		if (!g.n) {
			fn()
		}
		return T.on('tick', fn) // T.addEventListener? return T?
	}
	return g.n ? T.t('+') - T.t() :
			Number((T.getTime(g.p ? false : true) / 1000).toFixed(2))
}
T.p = function () {
	T.setPaused(false);
	return T
}
T.P = T.s = function () {
	T.setPaused(true);
	return T
}
T.s = cjs.xL = function () {
	T.removeAllEventListeners()
}
T.$ = function () {
	T.setPaused(T.getPaused() == false ? true : false)
	return T
}
T.i = function () {
	//indicates the target time (in ms) between ticks
	//default is 50 (20 fps)
	//Note: actual time between ticks may be more than specified,
	//  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
	return T.interval
}
T.f = function (numTicks) {
	var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
	if (N(numTicks)) {
		T.setFPS(numTicks);
		return T
	}
	return g.n ?
			T.getFPS() :
			T.getMeasuredFPS() //returns *ACTUAL* frames
	// / ticks per second//
	// Depending on performance,
	// this may differ from the target frames per second.
}
T.e = function (runTimePropReturnedInsteadOfTime) {
	//Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
	T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
}
T.m = function (ticks) {
	return T.getMeasuredTickTime(ticks)
} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
T.iP = function () {
	return T.getPaused()
}

alphold=function(){
	cjs.ticker = tt = function (a, b, c) {
		var g = G(arguments),
				t = true,
				f = false,
				a = g[0],
				b = g[1],
				c = g[2]
		if (F(a)) {
			return aEL(T$, 'tick',
					g.N ? a
							: function (e) {
						if (!e.paused) {
							a(e)
						}
					})
		}
		if (O(a)) {
			return aEL(T$, 'tick', a)
		}
		if (a == '?') {
			return !T$.getPaused()
		}
		if (a == 'p') {
			T$.setPaused(f);
			return tt('?')
		}
		if (a == 's') {
			T$.setPaused(t);
			return tt('?')
		}
		if (a == 'g') {
			return tt(
					tt('?') ? 's' : 'p'
			)
		}
		if (a == '@') {
			return T$.init()
		}
		if (a == '!') {
			return T$.reset()
		}
		if (a == 'e') {
			return T$.getEventTime(g.p ? t : f)
		}
		if (a == 't') {
			return T$.getTime(g.p ? t : f)
		}
		if (a == '#') {
			return T$.getTicks(g.n ? t : f)
		}
		if (a == 'md') {
			return t$.maxDelta
		}
		if (a == 'M') {
			return T$.timingMode
		}
		if (a == 'i') {
			if (N(b)) {
				T$.setInterval(g.m ? b * 1000 : b)
				return tt('i')
			}
			if (U(b)) {
				return T$.getInterval()
			}
		}
		if (a == 'f') {
			if (N(b)) {
				T$.setFPS(b);
				return tt
			}
			if (U(b)) {
				return T$.getFPS()
			}
		}
		if (a == 'r') {
			if (b > 10) {
				tt('f', b)
			} else {
				tt('i', b, '*')
			}
		}
		if (a == 'm') {
			return N(b) ? T$.getMeasuredFPS(b)
					: T$.getMeasuredFPS()
		}
		if (a == 'tk') {
			return Ed(T$)
		}
	}
}