var DLQ = {};
DLQ.gitURL = "https://github.com/juzerali/Don-t-lose-your-query--Chrome-Extension";
var extension={};
 extension.getURL = chrome.extension?chrome.extension.getURL:require("self").data.url ;
DLQ.imgURL = extension.getURL("delete.gif");

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


DLQ.History = [];
DLQ.getHistoryArray = function (length){
	var history = JSON.parse(localStorage['DLQHistory']);
	if(!length) length = 2000;
	history.length = history.length>length?length:history.length;
	return history;
}
DLQ.Mash = [];
var queryArray=[];
(function(){
	if(!localStorage["DLQclear"]){
		console.log("Trying to move");
		var map = prepareQueryArray();
		$.each(map, function(key,value){
			DLQ.Mash.push(value);
		});
		$.each(DLQ.Mash, function(i, el){
			if($.inArray(el, DLQ.History) === -1) DLQ.History.push(el);
		});
		localStorage.clear();
		localStorage["DLQclear"] = "true";
		localStorage["DLQHistory"] = JSON.stringify(DLQ.History);
	}
})();

DLQ.History = DLQ.getHistoryArray();


$(document).ready(function(){
	
	$('form').submit(function(e){
		saveQuery();
		return true;
	});
	$('select[name="db"]').change(function(e){
		saveQuery();
		return true;
	});

	$("textarea").attr({tabindex : 4, placeholder: "Press CTRL+Enter to execute Query"})
		.autocomplete({minLength : 3, autoFocus : false, source : DLQ.getHistoryArray()});


	$('.delete').live('click',function(e){
		e.preventDefault();
		var tr = $(this).parent().parent('tr');
		tr.slideUp(1);
		DLQ.History = DLQ.getHistoryArray();
		DLQ.History.splice(tr.data('key'),1);
		localStorage["DLQHistory"] = JSON.stringify(DLQ.History);
		e.stopPropogation();
	});



	$('.queryText').live('click',function(e){
		e.preventDefault();
		var text=$(this).text();
		$('textarea').val(text).focus();
		if(e.ctrlKey) $('form').submit();
		scroll(0,0);
	});

	var combo = $('select[name="db"]').combobox({delay: 0, autoFocus: true});


	$("input.ui-autocomplete-input").attr({tabindex : '3'})
		.on("focus click", function(e){
			e.preventDefault();
			$(this).select();
	});

	$("table.res").wrap($('<div></div>', {id: 'tablewrap'}));
	//$('#tablewrap').attr({id : 'sqldr'});
	//$('.sqldr').attr('id', 'sqldr');
	$("#tablewrap").wrap($("<div></div>",{ id : 'tabbed'}))
   
	$("#tabbed").prepend(
            $("<ul>").append(
                    $("<li>").append($("<a>").attr({href : "#tablewrap"}).text("Result"))
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
	$('#tabbed').tabs({selected: !!$('#tablewrap > *').html()?0:1 }); //
	//insertIntoDOM(map);

	$('.delete').css('cursor','pointer');
	$('tr').toggleClass('e').toggleClass('o');
	
	$('select').val()=="*"?$('input.ui-autocomplete-input').focus():$('textarea').focus();

	$("input:submit").attr({tabindex : 5});
	$("input[name='Clear']").attr({tabindex : 6});
	
	insertArrayIntoDOM();

	$('.queryText').css('cursor','pointer');

	$('textarea').keydown(function (e) {
		  if (e.ctrlKey && e.keyCode == 13) {
			$('form').submit();
		  }
		});
	$('body').keypress(function(e){
		if(e.which == 47 && e.target.tagName.toLowerCase()!='textarea' && e.target.tagName.toLowerCase()!='input'){
			$('textarea').focus(); 
			return false;
		}
		return true;
	});
});


function prepareQueryArray(){
	var that = this;
	function sortNumber(a,b)
		{
			return b - a;
		}

	var sortedArray=[];
	for(var i=0, ii=localStorage.length; i< ii; i++){
		sortedArray.push(localStorage.key(i));
	}
	sortedArray.sort(sortNumber);

	var sortedMap={};

	$.each(sortedArray, function(index,value){
		sortedMap[value] = localStorage[value];
		queryArray.push(sortedMap[value]);
	});
	//removeOld(sortedMap);
	return sortedMap;
	
}


function insertIntoDOM(map){
	var i =0;
	var eoBool = false;
	var eo = 'o';
	$(".queryHolder").append($("<tr>", {"class" : "h"})
                        .append(
								//$("<th>").text("Time"),
								$("<th>").text("Recent Queries")
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
                                                        title : (function(){return new Date(key);})()
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
}




function removeOld(){
	var i=0;
	
	saveQuery();
}

function saveQuery(){
	var query = $('textarea').val();
	if(!query || !query.length>0 || query=='undefined') {return;}
	DLQ.History = JSON.parse(localStorage['DLQHistory']);
	if(DLQ.History.length > 2000) DLQ.History.length = 2000;
	$.each(DLQ.History, function(key,value){
		if(!!value && value.toLowerCase() == query.toLowerCase()){
			DLQ.History.splice(key,1);
		}
	});
	DLQ.History.unshift(query);
	try{
		localStorage["DLQHistory"] = JSON.stringify(DLQ.History);
	}catch(e){
		console.Error(e);
		if(!deleted) DLQ.History.splice(DLQ.History.length-1-25, 25);
		else alert("Cannot add queries anymore. Report a bug at "+DLQ.gitURL);
		deleted = true;
		arguments.callee();
	}
}

function insertArrayIntoDOM(){
	var i =0;
	var eoBool = false;
	var eo = 'o';
	DLQ.History = DLQ.getHistoryArray();
	$(".queryHolder").append($("<tr>", {"class" : "h"})
                        .append(
								//$("<th>").text("Time"),
								$("<th>").text("Recent Queries")
							)
                    );
		$.each(DLQ.History, function(key,value){
			eoBool = !eoBool;
			eo = eoBool?'e':'o';
			if(i==50) return;
			if(!!value && value!='undefined'){
				$(".queryHolder").append( $("<tr></tr>", {
                                                        "class" : eo,
                                                        "data-key" : key
				                })
                                .append(/*$("<td>").text(moment(parseInt(key)).fromNow())
                                                        , */
                                        
                                        $("<td>",{"class" : "queryText"})
                                        .text(value).prepend($("<img>",{
                                                                    "class" : "delete",
                                                                    src : DLQ.imgURL,
																	alt : 'delete'
                                                        }))
                                )
                      )
                ;
				i++;
			}
		});
}