MFIIL = function () {
	W()._(function () {
		b = $H()
		b.graphics.beginLinearGradientFill(["#000000",
			"rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 100, 100)
		b.graphics.drawRect(0, 0, 100, 100);
		b.cache(0, 0, 100, 100);
		bm = Q.b("me")
		bm.filters = [
			new cjs.AlphaMaskFilter(b.cacheCanvas)
		]
		bm.cache(0, 0, 100, 100);
	})
}
