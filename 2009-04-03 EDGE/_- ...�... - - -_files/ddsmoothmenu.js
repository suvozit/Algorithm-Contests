var ddsmoothmenu={


arrowimages: {down:['downarrowclass', 'down.gif', 23], right:['rightarrowclass', 'right.gif']},

transition: {overtime:300, outtime:300}, 
shadow: {enabled:true, offsetx:5, offsety:5},


detectwebkit: navigator.userAgent.toLowerCase().indexOf("applewebkit")!=-1, 

getajaxmenu:function($, setting){ 
	var $menucontainer=$('#'+setting.contentsource[0]) 
	$menucontainer.html("Loading Menu...")
	$.ajax({
		url: setting.contentsource[1],
		async: true,
		error:function(ajaxrequest){
			$menucontainer.html('Error fetching content. Server Response: '+ajaxrequest.responseText)
		},
		success:function(content){
			$menucontainer.html(content)
			ddsmoothmenu.buildmenu($, setting)
		}
	})
},

buildshadow:function($, $subul){
	
},

buildmenu:function($, setting){
	var smoothmenu=ddsmoothmenu
	var $mainmenu=$("#"+setting.mainmenuid+">ul")
	var $headers=$mainmenu.find("ul").parent()
	$headers.each(function(i){
		var $curobj=$(this).css({zIndex: 100-i})
		var $subul=$(this).find('ul:eq(0)').css({display:'block'})
		this._dimensions={w:this.offsetWidth, h:this.offsetHeight, subulw:$subul.outerWidth(), subulh:$subul.outerHeight()}
		this.istopheader=$curobj.parents("ul").length==1? true : false 
		$subul.css({top:this.istopheader? this._dimensions.h+"px" : 0})
		$curobj.children("a:eq(0)").css(this.istopheader? {paddingRight: smoothmenu.arrowimages.down[2]} : {}).append( //add arrow images
			'<img src="'+ (this.istopheader? smoothmenu.arrowimages.down[1] : smoothmenu.arrowimages.right[1])
			+'" class="' + (this.istopheader? smoothmenu.arrowimages.down[0] : smoothmenu.arrowimages.right[0])
			+ '" style="border:0;" />'
		)
		if (smoothmenu.shadow.enabled){
			this._shadowoffset={x:(this.istopheader?$subul.offset().left+smoothmenu.shadow.offsetx : this._dimensions.w), y:(this.istopheader? $subul.offset().top+smoothmenu.shadow.offsety : $curobj.position().top)} 
			if (this.istopheader)
				$parentshadow=$(document.body)
			else{
				var $parentLi=$curobj.parents("li:eq(0)")
				$parentshadow=$parentLi.get(0).$shadow
			}
			this.$shadow=$('<div class="ddshadow'+(this.istopheader? ' toplevelshadow' : '')+'"></div>').prependTo($parentshadow).css({left:this._shadowoffset.x+'px', top:this._shadowoffset.y+'px'})  
		}
		$curobj.hover(
			function(e){
				var $targetul=$(this).children("ul:eq(0)")
				this._offsets={left:$(this).offset().left, top:$(this).offset().top}
				var menuleft=this.istopheader? 0 : this._dimensions.w
				menuleft=(this._offsets.left+menuleft+this._dimensions.subulw>$(window).width())? (this.istopheader? -this._dimensions.subulw+this._dimensions.w : -this._dimensions.w) : menuleft 
				if ($targetul.queue().length<=1){ 
					$targetul.css({left:menuleft+"px", width:this._dimensions.subulw+'px'}).animate({height:'show',opacity:'show'}, ddsmoothmenu.transition.overtime)
					if (smoothmenu.shadow.enabled){
						var shadowleft=this.istopheader? $targetul.offset().left+ddsmoothmenu.shadow.offsetx : menuleft
						var shadowtop=this.istopheader?$targetul.offset().top+smoothmenu.shadow.offsety : this._shadowoffset.y
						if (!this.istopheader && ddsmoothmenu.detectwebkit){ 
							this.$shadow.css({opacity:1})
						}
						this.$shadow.css({overflow:'', width:this._dimensions.subulw+'px', left:shadowleft+'px', top:shadowtop+'px'}).animate({height:this._dimensions.subulh+'px'}, ddsmoothmenu.transition.overtime)
					}
				}
			},
			function(e){
				var $targetul=$(this).children("ul:eq(0)")
				$targetul.animate({height:'hide', opacity:'hide'}, ddsmoothmenu.transition.outtime)
				if (smoothmenu.shadow.enabled){
					if (ddsmoothmenu.detectwebkit){  
						this.$shadow.children('div:eq(0)').css({opacity:0})
					}
					this.$shadow.css({overflow:'hidden'}).animate({height:0}, ddsmoothmenu.transition.outtime)
				}
			}
		) //end hover
	}) //end $headers.each()
	$mainmenu.find("ul").css({display:'none', visibility:'visible'})
},

init:function(setting){
	if (typeof setting.customtheme=="object" && setting.customtheme.length==2){
		var mainmenuid='#'+setting.mainmenuid
		document.write('<style type="text/css">\n'
			+mainmenuid+', '+mainmenuid+' ul li a {background:'+setting.customtheme[0]+';}\n'
			+mainmenuid+' ul li a:hover {background:'+setting.customtheme[1]+';}\n'
		+'</style>')
	}
	jQuery(document).ready(function($){ //override default menu colors (default/hover) with custom set?
		if (typeof setting.contentsource=="object"){ //if external ajax menu
			ddsmoothmenu.getajaxmenu($, setting)
		}
		else{ //else if markup menu
			ddsmoothmenu.buildmenu($, setting)
		}
	})
}

} //end ddsmoothmenu variable

//Initialize Menu instance(s):

ddsmoothmenu.init({
	mainmenuid: "smoothmenu1", //menu DIV id
	//customtheme: ["#1c5a80", "#18374a"], //override default menu CSS background values? Uncomment: ["normal_background", "hover_background"]
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})