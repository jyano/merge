$l('jquryplus')
$load=function(metNames){
	var fun
	metNames=A(metNames)?metNames:[metNames]
	_.e(metNames,function(fn){
		fun=window[fn]
		//test=1
		if(F(fun)){
			if(window['test']){
				$l('running met: "'+fn+'"')
			}
			fun()
		}
		else{
			$l('met "'+fn+'" not found !!!!!!!!!!!!!!!!')
		}
	})
}

$load([
	'loadSerJLib ','letterng' 
])

function letterng(){
	letteringPlug=function(){
		var methods={
			init:function(){return this.each(function(){injector($(this),'','char','')})},
			words:function(){return this.each(function(){injector($(this),' ','word',' ')})},
			lines:function(){
				return this.each(function(){
					var r="eefec303079ad17405c889e092e105b0" // Because it's hard to split a <br/> tag consistently across browsers,
					// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
					// (of the word "split").  If you're trying to use this plugin on that
					// md5 hash string, it will fail because you're being ridiculous.
					injector($(this).children("br").replaceWith(r).end(),r,'line','')
				})
			}
		}
		$.fn.lettering=function(method){
			if(method&&methods[method]){return methods[method].apply(this,[].slice.call(arguments,1))}
			else if(method==='letters'|| !method){return methods.init.apply(this,[].slice.call(arguments,0)) } // always pass an array
			$.error('Method '+method+' does not exist on jQuery.lettering');
			return this
		}
		function injector(t,splitter,klass,after){
			var text=t.text(),a=text.split(splitter),inject='';
			if(a.length){
				$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;})
				t.attr('aria-label',text).empty().append(inject)
			}
		}
	};
	letteringPlug()
	LETTERINGPLUG=function(){
		function injector(t,splitter,klass,after){
			var text=t.text()
				,a=text.split(splitter)
				,inject='';
			if(a.length){
				$(a).each(function(i,item){
					inject+='<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
				});
				t.attr('aria-label',text)
					.empty()
					.append(inject)
			}
		}
		
		var methods={
			init:function(){
				return this.each(function(){
					injector($(this),'','char','');
				});
			},
			words:function(){
				return this.each(function(){
					injector($(this),' ','word',' ');
				});
			},
			lines:function(){
				return this.each(function(){
					var r="eefec303079ad17405c889e092e105b0";
					// Because it's hard to split a <br/> tag consistently across browsers,
					// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
					// (of the word "split").  If you're trying to use this plugin on that
					// md5 hash string, it will fail because you're being ridiculous.
					injector($(this).children("br").replaceWith(r).end(),r,'line','');
				});
			}
		};
		$.fn.lettering=function(method){
			// Method calling logic
			if(method&&methods[method]){
				return methods[method].apply(this,[].slice.call(arguments,1));
			}else if(method==='letters'|| !method){
				return methods.init.apply(this,[].slice.call(arguments,0)); // always pass an array
			}
			$.error('Method '+method+' does not exist on jQuery.lettering');
			return this;
		};
	};
	LETTERINGPLUG()
	LETTERING=function(){
		$.x()
		sp=$.sp('hello').A()
		sp.lettering(); // wrap <span class="charx"/ > around each character within header
		$spans=sp.fi('span')
		$('.dropped span')
			.css({
				transition:'all 0.3s ease-in'
			})
	}
	LETTERING=function(){
		z()
		span=$.sp('hello').A()
		span.lettering() // wrap <span class="charx"/ > around each character within header
		$spans=span.find('span')
		$('.dropped span').css({transition:'all 0.3s ease-in'})
	}
	FALLING=function(){
		z()
		//this goes in css
		$header2=$.sp('hello').A()
		$header2.lettering() // wrap <span class="charx"/ > around each character within header
		$spans=$header2.find('span')
		delay=0
		$header2.on('click',function(){
			$spans.each(function(){
				$(this).css({transitionDelay:delay+'s'}) // apply sequential trans delay to each character
				delay+=0.1
			})
			$header2.K('dropped') // Add "dropped" class to header to apply transition
			setTimeout(function(){ // reset header code
				$spans.each(
					function(){
						$(this).css({
							transitionDelay:'0ms'
						})
					})
				// set transition delay to 0 so when 'dropped' class is removed,
				// letter appears instantly
				$header2.removeClass('dropped') // remove class at the "end" to reset header.
				delay=0
			},1800) // 1800 is just rough estimate of time transition will finish, not the best way
		})
	}
	function lettering(){
		LETTERING=function(){
			z()
			LETTERINGPLUG=function(){
				function injector(t,splitter,klass,after){
					var text=t.text()
						,a=text.split(splitter)
						,inject='';
					if(a.length){
						$(a).each(
							function(i,item){
								inject+='<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
							}
						);
						t.attr('aria-label',text)
							.empty()
							.append(inject)
					}
				}
				
				var methods={
					init:function(){
						return this.each(
							function(){
								injector($(this),'','char','');
							}
						);
					},
					words:function(){
						return this.each(
							function(){
								injector($(this),' ','word',' ');
							}
						);
					},
					lines:function(){
						return this.each(
							function(){
								var r="eefec303079ad17405c889e092e105b0";
								// Because it's hard to split a <br/> tag consistently across browsers,
								// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
								// (of the word "split").  If you're trying to use this plugin on that
								// md5 hash string, it will fail because you're being ridiculous.
								injector($(this).children("br").replaceWith(r).end(),r,'line','');
							}
						);
					}
				};
				$.fn.lettering=function(method){
					// Method calling logic
					if(method&&methods[method]){
						return methods[method].apply(this,[].slice.call(arguments,1));
					}else if(method==='letters'|| !method){
						return methods.init.apply(this,[].slice.call(arguments,0)); // always pass an array
					}
					$.error('Method '+method+' does not exist on jQuery.lettering');
					return this;
				};
			};
			LETTERINGPLUG()
			span=$.span('hello').A()
			span.lettering() // wrap <span class="charx"/ > around each character within header
			$spans=span.find('span')
			$('.dropped span').css({transition:'all 0.3s ease-in'})
		}
		LETTERING=function(){
			$.x()
			sp=$.sp('hello').A()
			sp.lettering(); // wrap <span class="charx"/ > around each character within header
			$spans=sp.fi('span')
			$('.dropped span')
				.css(
				{
					transition:'all 0.3s ease-in'
				}
			)
		}
		FALLING=function(){
			z();
			//this goes in css
			$header2=$.sp('hello').A();
			$header2.lettering(); // wrap <span class="charx"/ > around each character within header
			$spans=$header2.fi('span');
			delay=0;
			$header2.$(
				function(){
					$spans.e(
						function(){
							$(this).css({transitionDelay:delay+'s'}); // apply sequential trans delay to each character
							delay+=0.1
						}
					);
					$header2.K('dropped'); // Add "dropped" class to header to apply transition
					setTimeout(
						function(){ // reset header code
							$spans.e(
								function(){
									$(this).css({transitionDelay:'0ms'})
								}
							);
							// set transition delay to 0 so when 'dropped' class is removed,
							// letter appears instantly
							$header2.removeClass('dropped'); // remove class at the "end" to reset header.
							delay=0
						},1800
					); // 1800 is just rough estimate of time transition will finish, not the best way
				}
			)
		}
		FALLING=function(){
			z()
			//this goes in css
			$header2=$.span('hello').A()
			$header2.lettering() // wrap <span class="charx"/ > around each character within header
			$spans=$header2.find('span')
			delay=0
			$header2.on(
				'click',function(){
					$spans.each(
						function(){
							$(this).css({transitionDelay:delay+'s'}) // apply sequential trans delay to each character
							delay+=0.1
						}
					)
					$header2.K('dropped') // Add "dropped" class to header to apply transition
					setTimeout(
						function(){ // reset header code
							$spans.each(
								function(){
									$(this).css(
										{
											transitionDelay:'0ms'
										}
									)
								}
							)
							// set transition delay to 0 so when 'dropped' class is removed,
							// letter appears instantly
							$header2.removeClass('dropped') // remove class at the "end" to reset header.
							delay=0
						},1800
					) // 1800 is just rough estimate of time transition will finish, not the best way
				}
			)
		}
	}
}
function loadSerJLib(){
	// jQuery('form').serializeJSON()
	$.fn.serializeJSON=function(options){
		var serializedObject,formAsArray,keys,value,f,opts;
		f=$.serializeJSON;
		formAsArray=this.serializeArray(); // array of objects {name, value}
		opts=f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}
		serializedObject={};
		$.each(
			formAsArray,function(i,input){
				keys=f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
				value=f.parseValue(input.value,opts); // string, number, boolean or null
				if(opts.parseWithFunction) value=opts.parseWithFunction(value); // allow for custom parsing
				f.deepSet(serializedObject,keys,value,opts);
			}
		);
		return serializedObject;
	}
	// Use $.serializeJSON as namespace for the auxiliar functions
	// and to define defaults
	$.serializeJSON={
		defaultOptions:{
			parseNumbers:false, // convert values like "1", "-2.33" to 1, -2.33
			parseBooleans:false, // convert "true", "false" to true, false
			parseNulls:false, // convert "null" to null
			parseAll:false, // all of the above
			parseWithFunction:null, // to use custom parser, use a function like: function (val) => parsed_val
			useIntKeysAsArrayIndex:false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
		},
		// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
		optsWithDefaults:function(options){
			var f,parseAll;
			if(options==null) options={}; // arg default value = {}
			f=$.serializeJSON;
			parseAll=f.optWithDefaults('parseAll',options);
			return {
				parseNumbers:parseAll||f.optWithDefaults('parseNumbers',options),
				parseBooleans:parseAll||f.optWithDefaults('parseBooleans',options),
				parseNulls:parseAll||f.optWithDefaults('parseNulls',options),
				parseWithFunction:f.optWithDefaults('parseWithFunction',options),
				useIntKeysAsArrayIndex:f.optWithDefaults('useIntKeysAsArrayIndex',options)
			}
		},
		optWithDefaults:function(key,options){
			return (options[key]!==false)&&(options[key]||$.serializeJSON.defaultOptions[key]);
		},
		// Convert the string to a number, boolean or null, depending on the enable option and the string format.
		parseValue:function(str,opts){
			var value,f;
			f=$.serializeJSON;
			if(opts.parseNumbers&&f.isNumeric(str)) return Number(str); // number
			if(opts.parseBooleans&&(str==="true"||str==="false")) return str==="true"; // boolean
			if(opts.parseNulls&&str=="null") return null; // null
			return str; // otherwise, keep same string
		},
		isObject:function(obj){ return obj===Object(obj); }, // is this variable an object?
		isUndefined:function(obj){ return obj=== void 0; }, // safe check for undefined values
		isValidArrayIndex:function(val){ return /^[0-9]+$/.test(String(val)); }, // 1,2,3,4 ... are valid array indexes
		isNumeric:function(obj){ return obj-parseFloat(obj)>=0; }, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
		// Split the input name in programatically readable keys
		// "foo" => ['foo']
		// "[foo]" => ['foo']
		// "foo[inn][bar]" => ['foo', 'inn', 'bar']
		// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
		// "arr[][val]" => ['arr', '', 'val']
		splitInputNameIntoKeysArray:function(name){
			var keys,last,f;
			f=$.serializeJSON;
			if(f.isUndefined(name)){
				throw new Error("ArgumentError: param 'name' expected to be a string, found undefined");
			}
			keys=$.map(
				name.split('['),function(key){
					last=key[key.length-1];
					return last===']'?key.substring(0,key.length-1):key;
				}
			);
			if(keys[0]===''){
				keys.shift();
			} // "[foo][inn]" should be same as "foo[inn]"
			return keys;
		},
		// Set a value in an object or array, using multiple keys to set in a nested object or array:
		//
		// deepSet(obj, ['foo'], v) // obj['foo'] = v
		// deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
		// deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
		//
		// deepSet(obj, ['0'], v) // obj['0'] = v
		// deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
		// deepSet(arr, [''], v) // arr.push(v)
		// deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
		//
		// arr = [];
		// deepSet(arr, ['', v] // arr => [v]
		// deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
		// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
		// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
		//
		deepSet:function(o,keys,value,opts){
			var key,nextKey,tail,lastIdx,lastVal,f;
			if(opts==null) opts={};
			f=$.serializeJSON;
			if(f.isUndefined(o)){
				throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");
			}
			if(!keys||keys.length===0){
				throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");
			}
			key=keys[0];
			// Only one key, then it's not a deepSet, just assign the value.
			if(keys.length===1){
				if(key===''){
					o.push(value); // '' is used to push values into the array (assume o is an array)
				}else{
					o[key]=value; // other keys can be used as object keys or array indexes
				}
				// With more keys is a deepSet. Apply recursively.
			}else{
				nextKey=keys[1];
				// '' is used to push values into the array,
				// with nextKey, set the value into the same object, in object[nextKey].
				// Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
				if(key===''){
					lastIdx=o.length-1; // asume o is array
					lastVal=o[lastIdx];
					if(f.isObject(lastVal)&&(f.isUndefined(lastVal[nextKey])||keys.length>2)){ // if nextKey is not present in the last object element, or there are more keys to deep set
						key=lastIdx; // then set the new value in the same object element
					}else{
						key=lastIdx+1; // otherwise, point to set the next index in the array
					}
				}
				// o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
				if(f.isUndefined(o[key])){
					if(nextKey===''){ // '' is used to push values into the array.
						o[key]=[]
					}else if(opts.useIntKeysAsArrayIndex&&f.isValidArrayIndex(nextKey)){ // if 1, 2, 3 ... then use an array, where nextKey is the index
						o[key]=[]
					}else{ // for anything else, use an object, where nextKey is going to be the attribute name
						o[key]={}
					}
				}
				// Recursively set the inner object
				tail=keys.slice(1)
				f.deepSet(o[key],tail,value,opts)
			}
		}
	}
}
