
(function( $ ) {
		$.widget( "ui.combobox", {
			_create: function() {
				var self = this,
					select = this.element.hide(),
					selected = select.children( ":selected" ),
					value = selected.val() ? selected.text() : "";
				var input = this.input = $( "<input>" )
					.insertAfter( select )
					.val( value )
					.autocomplete({
						delay: 0,
						minLength: 0,
						source: function( request, response ) {
							var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
							response( select.children( "option" ).map(function() {
								var text = $( this ).text();
								if ( this.value && ( !request.term || matcher.test(text) ) )
									return {
										label: text.replace(
											new RegExp(
												"(?![^&;]+;)(?!<[^<>]*)(" +
												$.ui.autocomplete.escapeRegex(request.term) +
												")(?![^<>]*>)(?![^&;]+;)", "gi"
											), "<strong>$1</strong>" ),
										value: text,
										option: this
									};
							}) );
						},
						select: function( event, ui ) {
							ui.item.option.selected = true;
							self._trigger( "selected", event, {
								item: ui.item.option
							});
						},
						change: function( event, ui ) {
							if ( !ui.item ) {
								var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" ),
									valid = false;
								select.children( "option" ).each(function() {
									if ( $( this ).text().match( matcher ) ) {
										this.selected = valid = true;
										return false;
									}
								});
								if ( !valid ) {
									// remove invalid value, as it didn't match anything
									$( this ).val( "" );
									select.val( "" );
									input.data( "autocomplete" ).term = "";
									return false;
								}
							}
						}
					})
					.addClass( "ui-widget ui-widget-content ui-corner-left" );

				input.data( "autocomplete" )._renderItem = function( ul, item ) {
					return $( "<li></li>" )
						.data( "item.autocomplete", item )
						.append( "<a>" + item.label + "</a>" )
						.appendTo( ul );
				};

				this.button = $( "<button type='button'>&nbsp;</button>" )
					.attr( "tabIndex", -1 )
					.attr( "title", "Show All Items" )
					.insertAfter( input )
					.button({
						icons: {
							primary: "ui-icon-triangle-1-s"
						},
						text: false
					})
					.removeClass( "ui-corner-all" )
					.addClass( "ui-corner-right ui-button-icon" )
					.click(function() {
						// close if already visible
						if ( input.autocomplete( "widget" ).is( ":visible" ) ) {
							input.autocomplete( "close" );
							return;
						}

						// work around a bug (likely same cause as #5265)
						$( this ).blur();

						// pass empty string as value to search for, displaying all results
						input.autocomplete( "search", "" );
						input.focus();
					});
			},

			destroy: function() {
				this.input.remove();
				this.button.remove();
				this.element.show();
				$.Widget.prototype.destroy.call( this );
			}
		});
	})( jQuery );

var DLQ = {};

var extension={};
 extension.getURL = chrome.extension?chrome.extension.getURL:require("self").data.url ;
DLQ.imgURL = extension.getURL("delete.gif");
var map = prepareQueryArray();


$(document).ready(function(){
	console.log("documnet Loaded Starting...");
	//window.DOM_LOADED = true;
	
	$('form[name="DF"]').submit(function(e){
		saveQuery();
	});
	$('select[name="db"]').change(function(e){
		saveQuery();
	});

	$("textarea").attr({tabindex : 4});


	$('.delete').live('click',function(e){
		var tr = $(this).parent().parent('tr');
		tr.slideUp(1);
		localStorage.removeItem(tr.data('key'));
	});



	$('.queryText').live('click',function(e){
		e.preventDefault();
		var text=$(this).text();
		$('textarea').val(text);
		scroll(0,0);
	});

	var combo = $('select[name="db"]').combobox({delay: 0});


	$("input.ui-autocomplete-input").attr({tabindex : '3'})
		.on("focus click", function(e){
			e.preventDefault();
			$(this).select();
		});

	$('.sqldr').attr({id : 'sqldr'});
	//$('.sqldr').attr('id', 'sqldr');
	$("#sqldr").wrap($("<div></div>",{ id : 'tabbed'}))
   
	$("#tabbed").prepend(
            $("<ul>").append(
                    $("<li>").append($("<a>").attr({href : "#sqldr"}).text("Result"))
                    .after($("<li>").append($("<a>").attr({href : "#recent"}).text("Recent")))
                    .after($("<li>").append($("<a>").attr({href : "#saved"}).text("Saved")))
                )
        );
                        
	$('#tabbed').append($("<div>", {id : "recent"})
                            .append($("<table>",{
                                border: "0",
                                cellpadding : "1",
                                cellspacing : "1",
                                width : "100%",
                                "class" : "res queryHolder"
                            } ))
    );

	$('#tabbed').append($("<div>", {id : 'saved'})
                        .append($("<b>")
                                .text("Coming Soon...")
                                )
                        );
             
	//$('#tabbed').wrap("<div class='demo'/>");
	$('#tabbed').tabs({selected: !!$('#sqldr > *').html()?0:1 }); //
	insertIntoDOM(map);
	$('.queryText').css('cursor','pointer');
	$('.delete').css('cursor','pointer');
	$('tr').toggleClass('e').toggleClass('o');
	
	$('select').val()=="*"?$('input.ui-autocomplete-input').focus():$('textarea').focus();

	$("input:submit").attr({tabindex : 5});
	$("input[name='Clear']").attr({tabindex : 6});
});


function prepareQueryArray(){
	var that = this;
	function sortNumber(a,b)
		{
			return b - a;
		}

	var sortedArray=[];
	for(var i=0; i<localStorage.length ; i++){
		sortedArray.push(localStorage.key(i));
	}
	sortedArray.sort(sortNumber);

	var sortedMap={};

	$.each(sortedArray, function(index,value){
		sortedMap[value] = localStorage[value];
	});
	//removeOld(sortedMap);
	return sortedMap;
	
}


function insertIntoDOM(map){
	console.log("IID"+map);
	var img = 
	//if(!window.DOM_LOADED){ return;}
	console.log("DOM LOADED");
	console.log("Will try to append");
	var i =1;
	var eoBool = false;
	var eo = 'o';
	$(".queryHolder").append($("<tr>", {"class" : "h"})
                        .append(
								$("<th>").text("Time"),
								$("<th>").text("Query")
							)
                    );
		$.each(map, function(key,value){
			eoBool = !eoBool;
			eo = eoBool?'e':'o';
			if(i==50) return;
			if(!!value && value!='undefined'){
				$(".queryHolder").append( $("<tr></tr>", {
                                                        "class" : eo,
                                                        "data-key" : key,
                                                        title : (new Date(key))
				                })
                                .append($("<td>").text(moment(parseInt(key)).fromNow())
                                                .prepend($("<img>",{
                                                                    "class" : "delete",
                                                                    src : DLQ.imgURL,
																	alt : 'delete'
                                                        }))
                                                        , 
                                        
                                        $("<td>",{"class" : "queryText"})
                                        .text(value)
                                )
                      )
                ;
				i++;
			}
		});
		removeOld(map);
}




function removeOld(array){
	var i=0;
	$.each(array, function(key,val){
		i++;
		if(i>100){
			try{
				localStorage.removeItem(key);
				
			}catch(e){}
		}
	});
}

function saveQuery(){
	var query = $('textarea[name="q"]').val();
	if(!query || !query.length>0 || query=='undefined')return;
	localStorage[new Date().getTime()] = query;
}