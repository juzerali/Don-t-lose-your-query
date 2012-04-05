var DLQ = {};
DLQ.imgURL = "http://docs.colabolo.com/docs/download/attachments/2065185/icon_delete_small.png";
// For Mozilla only

$("head").prepend($("<style>").text(".ui-helper-hidden-accessible{position:absolute!important;clip:rect(1px,1px,1px,1px)}."+
"ui-helper-reset{border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none;margin:0;"+
"padding:0}.ui-helper-clearfix:before,.ui-helper-clearfix:after{content:'';display:table}.ui-helper-clearfix:after"+
"{clear:both}.ui-helper-clearfix{zoom:1}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;"+
"opacity:0;filter:Alpha(Opacity=0)}.ui-state-disabled{cursor:default!important}.ui-icon{display:block;"+
"text-indent:-99999px;overflow:hidden;background-repeat:no-repeat;width:16px;height:16px;"+
"background-image:url(images/ui-icons_999999_256x240.png)}.ui-widget-overlay{position:absolute;top:0;left:0;"+
"width:100%;height:100%;background:#eee url(images/ui-bg_flat_0_eeeeee_40x100.png) 50% 50% repeat-x;opacity:.80;"+
"filter:Alpha(Opacity=80)}.ui-widget{font-family:Trebuchet MS, Helvetica, Arial, sans-serif;font-size:1.1em}"+
".ui-widget .ui-widget{font-size:1em}.ui-widget input,.ui-widget select,.ui-widget textarea,.ui-widget button"+
"{font-family:Trebuchet MS, Helvetica, Arial, sans-serif;font-size:1em}.ui-widget-content{border:1px "+
"solid #aaa;background:#c9c9c9 url(images/ui-bg_inset-soft_50_c9c9c9_1x100.png) 50% bottom repeat-x;color:#333}."+
"ui-widget-content a{color:#333}.ui-widget-header{border:1px solid #bbb;background:#ddd url(images/"+
"ui-bg_glass_35_dddddd_1x400.png) 50% 50% repeat-x;color:#444;font-weight:700}.ui-state-default,.ui-widget-content "+
".ui-state-default,.ui-widget-header .ui-state-default{border:1px solid #ccc;background:#eee url"+
"(images/ui-bg_glass_60_eeeeee_1x400.png) 50% 50% repeat-x;font-weight:700;color:#3383bb}.ui-state-default"+
" a,.ui-state-default a:link,.ui-state-default a:visited{color:#3383bb;text-decoration:none}.ui-state-hover,"+
".ui-widget-content .ui-state-hover,.ui-widget-header .ui-state-hover,.ui-state-focus,.ui-widget-content .ui-state-focus,"+
".ui-widget-header .ui-state-focus{border:1px solid #bbb;background:#f8f8f8 url(images/ui-bg_glass_100_f8f8f8_1x400.png)"+
" 50% 50% repeat-x;font-weight:700;color:#599fcf}.ui-state-hover a,.ui-state-hover a:hover{color:#599fcf;text-decoration:"+
"none}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active{border:1px solid #999;"+
"background:#999 url(images/ui-bg_inset-hard_75_999999_1x100.png) 50% 50% repeat-x;font-weight:700;color:#fff}."+
"ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited{color:#fff;text-decoration:none}.ui-widget"+
" :active{outline:none}.ui-state-highlight,.ui-widget-content .ui-state-highlight,.ui-widget-header"+
" .ui-state-highlight{border:1px solid #fff;background:#eee url(images/ui-bg_flat_55_eeeeee_40x100.png)"+
" 50% 50% repeat-x;color:#444}.ui-state-error,.ui-widget-content .ui-state-error,.ui-widget-header"+
" .ui-state-error{border:1px solid #c0402a;background:#c0402a url(images/ui-bg_flat_55_c0402a_40x100.png)"+
" 50% 50% repeat-x;color:#fff}.ui-priority-primary,.ui-widget-content .ui-priority-primary,.ui-widget-header"+
" .ui-priority-primary{font-weight:700}.ui-priority-secondary,.ui-widget-content .ui-priority-secondary,"+
".ui-widget-header .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:400}.ui-state-disabled,"+
".ui-widget-content .ui-state-disabled,.ui-widget-header .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);"+
"background-image:none}.ui-state-default .ui-icon{background-image:url(images/ui-icons_70b2e1_256x240.png)}"+
".ui-state-active .ui-icon{background-image:url(images/ui-icons_454545_256x240.png)}.ui-state-error .ui-icon,"+
".ui-state-error-text .ui-icon{background-image:url(images/ui-icons_fbc856_256x240.png)}.ui-icon-carat-1-n{"+
"background-position:0 0}.ui-icon-carat-1-ne{background-position:-16px 0}.ui-icon-carat-1-e{background-position:-32px 0}"+
".ui-icon-carat-1-se{background-position:-48px 0}.ui-icon-carat-1-s{background-position:-64px 0}.ui-icon-carat-1-sw"+
"{background-position:-80px 0}.ui-icon-carat-1-w{background-position:-96px 0}.ui-icon-carat-1-nw{background-position:"+
"-112px 0}.ui-icon-carat-2-n-s{background-position:-128px 0}.ui-icon-carat-2-e-w{background-position:-144px 0}"+
".ui-icon-triangle-1-n{background-position:0 -16px}.ui-icon-triangle-1-ne{background-position:-16px -16px}"+
".ui-icon-triangle-1-e{background-position:-32px -16px}.ui-icon-triangle-1-se{background-position:-48px -16px}"+
".ui-icon-triangle-1-s{background-position:-64px -16px}.ui-icon-triangle-1-sw{background-position:-80px -16px}"+
".ui-icon-triangle-1-w{background-position:-96px -16px}.ui-icon-triangle-1-nw{background-position:-112px -16px}"+
".ui-icon-triangle-2-n-s{background-position:-128px -16px}.ui-icon-triangle-2-e-w{background-position:-144px -16px}"+
".ui-icon-arrow-1-n{background-position:0 -32px}.ui-icon-arrow-1-ne{background-position:-16px -32px}.ui-icon-arrow-1"+
"-e{background-position:-32px -32px}.ui-icon-arrow-1-se{background-position:-48px -32px}.ui-icon-arrow-1-s{"+
"background-position:-64px -32px}.ui-icon-arrow-1-sw{background-position:-80px -32px}.ui-icon-arrow-1-w{"+
"background-position:-96px -32px}.ui-icon-arrow-1-nw{background-position:-112px -32px}.ui-icon-arrow-2-n-s{"+
"background-position:-128px -32px}.ui-icon-arrow-2-ne-sw{background-position:-144px -32px}.ui-icon-arrow-2-e-w{"+
"background-position:-160px -32px}.ui-icon-arrow-2-se-nw{background-position:-176px -32px}.ui-icon-arrowstop-1-n{"+
"background-position:-192px -32px}.ui-icon-arrowstop-1-e{background-position:-208px -32px}.ui-icon-arrowstop-1-s{"+
"background-position:-224px -32px}.ui-icon-arrowstop-1-w{background-position:-240px -32px}.ui-icon-arrowthick-1-n{"+
"background-position:0 -48px}.ui-icon-arrowthick-1-ne{background-position:-16px -48px}.ui-icon-arrowthick-1-e{"+
"background-position:-32px -48px}.ui-icon-arrowthick-1-se{background-position:-48px -48px}.ui-icon-arrowthick-1-s{"+
"background-position:-64px -48px}.ui-icon-arrowthick-1-sw{background-position:-80px -48px}.ui-icon-arrowthick-1-w{"+
"background-position:-96px -48px}.ui-icon-arrowthick-1-nw{background-position:-112px -48px}.ui-icon-arrowthick-2-n-s{"+
"background-position:-128px -48px}.ui-icon-arrowthick-2-ne-sw{background-position:-144px -48px}.ui-icon-arrowthick-2-e-w"+
"{background-position:-160px -48px}.ui-icon-arrowthick-2-se-nw{background-position:-176px -48px}.ui-icon-arrowthickstop-1-"+
"n{background-position:-192px -48px}.ui-icon-arrowthickstop-1-e{background-position:-208px -48px}.ui-icon-arrowthickstop-"+
"1-s{background-position:-224px -48px}.ui-icon-arrowthickstop-1-w{background-position:-240px -48px}.ui-icon-"+
"arrowreturnthick-1-w{background-position:0 -64px}.ui-icon-arrowreturnthick-1-n{background-position:-16px -64px}"+
".ui-icon-arrowreturnthick-1-e{background-position:-32px -64px}.ui-icon-arrowreturnthick-1-s{background-position:-48px "+
"-64px}.ui-icon-arrowreturn-1-w{background-position:-64px -64px}.ui-icon-arrowreturn-1-n{background-position:-80px -64px}"+
".ui-icon-arrowreturn-1-e{background-position:-96px -64px}.ui-icon-arrowreturn-1-s{background-position:-112px -64px}"+
".ui-icon-arrowrefresh-1-w{background-position:-128px -64px}.ui-icon-arrowrefresh-1-n{background-position:-144px -64px}"+
".ui-icon-arrowrefresh-1-e{background-position:-160px -64px}.ui-icon-arrowrefresh-1-s{background-position:-176px -64px}"+
".ui-icon-arrow-4{background-position:0 -80px}.ui-icon-arrow-4-diag{background-position:-16px -80px}.ui-icon-extlink{"+
"background-position:-32px -80px}.ui-icon-newwin{background-position:-48px -80px}.ui-icon-refresh{background-position:"+
"-64px -80px}.ui-icon-shuffle{background-position:-80px -80px}.ui-icon-transfer-e-w{background-position:-96px -80px}"+
".ui-icon-transferthick-e-w{background-position:-112px -80px}.ui-icon-folder-collapsed{background-position:0 -96px}"+
".ui-icon-folder-open{background-position:-16px -96px}.ui-icon-document{background-position:-32px -96px}"+
".ui-icon-document-b{background-position:-48px -96px}.ui-icon-note{background-position:-64px -96px}.ui-icon-mail-closed{"+
"background-position:-80px -96px}.ui-icon-mail-open{background-position:-96px -96px}.ui-icon-suitcase{background-position:"+
"-112px -96px}.ui-icon-comment{background-position:-128px -96px}.ui-icon-person{background-position:-144px -96px}"+
".ui-icon-print{background-position:-160px -96px}.ui-icon-trash{background-position:-176px -96px}.ui-icon-locked{"+
"background-position:-192px -96px}.ui-icon-unlocked{background-position:-208px -96px}.ui-icon-bookmark{background-position:"+
"-224px -96px}.ui-icon-tag{background-position:-240px -96px}.ui-icon-home{background-position:0 -112px}.ui-icon-flag{"+
"background-position:-16px -112px}.ui-icon-calendar{background-position:-32px -112px}.ui-icon-cart{background-position"+
":-48px -112px}.ui-icon-pencil{background-position:-64px -112px}.ui-icon-clock{background-position:-80px -112px}"+
".ui-icon-disk{background-position:-96px -112px}.ui-icon-calculator{background-position:-112px -112px}"+
".ui-icon-zoomin{background-position:-128px -112px}.ui-icon-zoomout{background-position:-144px -112px}.ui-icon-search{"+
"background-position:-160px -112px}.ui-icon-wrench{background-position:-176px -112px}.ui-icon-gear{background-position:"+
"-192px -112px}.ui-icon-heart{background-position:-208px -112px}.ui-icon-star{background-position:-224px -112px}.ui-icon-link{"+
"background-position:-240px -112px}.ui-icon-cancel{background-position:0 -128px}.ui-icon-plus{background-position:-16px -128px}.ui-icon-plusthick{background-position:-32px -128px}.ui-icon-minus{background-position:-48px -128px}.ui-icon-minusthick{background-position:-64px -128px}.ui-icon-close{background-position:-80px -128px}.ui-icon-closethick{background-position:-96px -128px}.ui-icon-key{background-position:-112px -128px}.ui-icon-lightbulb{background-position:-128px -128px}.ui-icon-scissors{background-position:-144px -128px}.ui-icon-clipboard{background-position:-160px -128px}.ui-icon-copy{background-position:-176px -128px}.ui-icon-contact{background-position:-192px -128px}.ui-icon-image{background-position:-208px -128px}.ui-icon-video{background-position:-224px -128px}.ui-icon-script{background-position:-240px -128px}.ui-icon-alert{background-position:0 -144px}.ui-icon-info{background-position:-16px -144px}.ui-icon-notice{background-position:-32px -144px}.ui-icon-help{background-position:-48px -144px}.ui-icon-check{background-position:-64px -144px}.ui-icon-bullet{background-position:-80px -144px}.ui-icon-radio-off{background-position:-96px -144px}.ui-icon-radio-on{background-position:-112px -144px}.ui-icon-pin-w{background-position:-128px -144px}.ui-icon-pin-s{background-position:-144px -144px}.ui-icon-play{background-position:0 -160px}.ui-icon-pause{background-position:-16px -160px}.ui-icon-seek-next{background-position:-32px -160px}.ui-icon-seek-prev{background-position:-48px -160px}.ui-icon-seek-end{background-position:-64px -160px}.ui-icon-stop{background-position:-96px -160px}.ui-icon-eject{background-position:-112px -160px}.ui-icon-volume-off{background-position:-128px -160px}.ui-icon-volume-on{background-position:-144px -160px}.ui-icon-power{background-position:0 -176px}.ui-icon-signal-diag{background-position:-16px -176px}.ui-icon-signal{background-position:-32px -176px}.ui-icon-battery-0{background-position:-48px -176px}.ui-icon-battery-1{background-position:-64px -176px}.ui-icon-battery-2{background-position:-80px -176px}.ui-icon-battery-3{background-position:-96px -176px}.ui-icon-circle-plus{background-position:0 -192px}.ui-icon-circle-minus{background-position:-16px -192px}.ui-icon-circle-close{background-position:-32px -192px}.ui-icon-circle-triangle-e{background-position:-48px -192px}.ui-icon-circle-triangle-s{background-position:-64px -192px}.ui-icon-circle-triangle-w{background-position:-80px -192px}.ui-icon-circle-triangle-n{background-position:-96px -192px}.ui-icon-circle-arrow-e{background-position:-112px -192px}.ui-icon-circle-arrow-s{background-position:-128px -192px}.ui-icon-circle-arrow-w{background-position:-144px -192px}.ui-icon-circle-arrow-n{background-position:-160px -192px}.ui-icon-circle-zoomin{background-position:-176px -192px}.ui-icon-circle-zoomout{background-position:-192px -192px}.ui-icon-circle-check{background-position:-208px -192px}.ui-icon-circlesmall-plus{background-position:0 -208px}.ui-icon-circlesmall-minus{background-position:-16px -208px}.ui-icon-circlesmall-close{background-position:-32px -208px}.ui-icon-squaresmall-plus{background-position:-48px -208px}.ui-icon-squaresmall-minus{background-position:-64px -208px}.ui-icon-squaresmall-close{background-position:-80px -208px}.ui-icon-grip-dotted-vertical{background-position:0 -224px}.ui-icon-grip-dotted-horizontal{background-position:-16px -224px}.ui-icon-grip-solid-vertical{background-position:-32px -224px}.ui-icon-grip-solid-horizontal{background-position:-48px -224px}.ui-icon-gripsmall-diagonal-se{background-position:-64px -224px}.ui-icon-grip-diagonal-se{background-position:-80px -224px}.ui-corner-all,.ui-corner-top,.ui-corner-left,.ui-corner-tl{-moz-border-radius-topleft:6px;-webkit-border-top-left-radius:6px;-khtml-border-top-left-radius:6px;border-top-left-radius:6px}.ui-corner-all,.ui-corner-top,.ui-corner-right,.ui-corner-tr{-moz-border-radius-topright:6px;-webkit-border-top-right-radius:6px;-khtml-border-top-right-radius:6px;border-top-right-radius:6px}.ui-corner-all,.ui-corner-bottom,.ui-corner-left,.ui-corner-bl{-moz-border-radius-bottomleft:6px;-webkit-border-bottom-left-radius:6px;-khtml-border-bottom-left-radius:6px;border-bottom-left-radius:6px}.ui-corner-all,.ui-corner-bottom,.ui-corner-right,.ui-corner-br{-moz-border-radius-bottomright:6px;-webkit-border-bottom-right-radius:6px;-khtml-border-bottom-right-radius:6px;border-bottom-right-radius:6px}.ui-widget-shadow{background:#aaa url(images/ui-bg_flat_0_aaaaaa_40x100.png) 50% 50% repeat-x;opacity:.60;filter:Alpha(Opacity=60);-moz-border-radius:0;-khtml-border-radius:0;-webkit-border-radius:0;border-radius:0;margin:-4px 0 0 -4px;padding:4px}.ui-resizable{position:relative}.ui-resizable-handle{position:absolute;font-size:.1px;z-index:99999;display:block}.ui-resizable-n{cursor:n-resize;height:7px;width:100%;top:-5px;left:0}.ui-resizable-s{cursor:s-resize;height:7px;width:100%;bottom:-5px;left:0}.ui-resizable-e{cursor:e-resize;width:7px;right:-5px;top:0;height:100%}.ui-resizable-w{cursor:w-resize;width:7px;left:-5px;top:0;height:100%}.ui-resizable-se{cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.ui-resizable-sw{cursor:sw-resize;width:9px;height:9px;left:-5px;bottom:-5px}.ui-resizable-nw{cursor:nw-resize;width:9px;height:9px;left:-5px;top:-5px}.ui-resizable-ne{cursor:ne-resize;width:9px;height:9px;right:-5px;top:-5px}.ui-selectable-helper{position:absolute;z-index:100;border:1px dotted #000}.ui-accordion .ui-accordion-header{cursor:pointer;position:relative;margin-top:1px;zoom:1}.ui-accordion .ui-accordion-li-fix{display:inline}.ui-accordion .ui-accordion-header-active{border-bottom:0!important}.ui-accordion .ui-accordion-header a{display:block;font-size:1em;padding:.5em .5em .5em .7em}.ui-accordion-icons .ui-accordion-header a{padding-left:2.2em}.ui-accordion .ui-accordion-header .ui-icon{position:absolute;left:.5em;top:50%;margin-top:-8px}.ui-accordion .ui-accordion-content{border-top:0;margin-top:-2px;position:relative;top:1px;margin-bottom:2px;overflow:auto;display:none;zoom:1;padding:1em 2.2em}.ui-accordion .ui-accordion-content-active{display:block}.ui-autocomplete{position:absolute;cursor:default}* html .ui-autocomplete{width:1px}.ui-menu{list-style:none;display:block;float:left;margin:0;padding:2px}.ui-menu .ui-menu{margin-top:-3px}.ui-menu .ui-menu-item{zoom:1;float:left;clear:left;width:100%;margin:0;padding:0}.ui-menu .ui-menu-item a{text-decoration:none;display:block;line-height:1.5;zoom:1;padding:.2em .4em}.ui-menu .ui-menu-item a.ui-state-hover,.ui-menu .ui-menu-item a.ui-state-active{font-weight:400;margin:-1px}.ui-button{display:inline-block;position:relative;margin-right:.1em;text-decoration:none!important;cursor:pointer;text-align:center;zoom:1;overflow:visible;padding:0}.ui-button-icon-only{width:2.2em}button.ui-button-icon-only{width:2.4em}.ui-button-icons-only{width:3.4em}button.ui-button-icons-only{width:3.7em}.ui-button .ui-button-text{display:block;line-height:1.4}.ui-button-icon-only .ui-button-text,.ui-button-icons-only .ui-button-text{text-indent:-9999999px;padding:.4em}.ui-button-text-icon-primary .ui-button-text,.ui-button-text-icons .ui-button-text{padding:.4em 1em .4em 2.1em}.ui-button-text-icon-secondary .ui-button-text,.ui-button-text-icons .ui-button-text{padding:.4em 2.1em .4em 1em}.ui-button-text-icons .ui-button-text{padding-left:2.1em;padding-right:2.1em}.ui-button-icon-only .ui-icon,.ui-button-text-icon-primary .ui-icon,.ui-button-text-icon-secondary .ui-icon,.ui-button-text-icons .ui-icon,.ui-button-icons-only .ui-icon{position:absolute;top:50%;margin-top:-8px}.ui-button-icon-only .ui-icon{left:50%;margin-left:-8px}.ui-button-text-icon-primary .ui-button-icon-primary,.ui-button-text-icons .ui-button-icon-primary,.ui-button-icons-only .ui-button-icon-primary{left:.5em}.ui-buttonset{margin-right:7px}.ui-buttonset .ui-button{margin-left:0;margin-right:-.3em}button.ui-button::-moz-focus-inner{border:0;padding:0}.ui-dialog{position:absolute;width:300px;overflow:hidden;padding:.2em}.ui-dialog .ui-dialog-titlebar{position:relative;padding:.4em 1em}.ui-dialog .ui-dialog-title{float:left;margin:.1em 16px .1em 0}.ui-dialog .ui-dialog-titlebar-close{position:absolute;right:.3em;top:50%;width:19px;height:18px;margin:-10px 0 0;padding:1px}.ui-dialog .ui-dialog-titlebar-close span{display:block;margin:1px}.ui-dialog .ui-dialog-titlebar-close:hover,.ui-dialog .ui-dialog-titlebar-close:focus{padding:0}.ui-dialog .ui-dialog-content{position:relative;border:0;background:none;overflow:auto;zoom:1;padding:.5em 1em}.ui-dialog .ui-dialog-buttonpane{text-align:left;background-image:none;border-width:1px 0 0;margin:.5em 0 0;padding:.3em 1em .5em .4em}.ui-dialog .ui-dialog-buttonpane button{cursor:pointer;margin:.5em .4em .5em 0}.ui-dialog .ui-resizable-se{width:14px;height:14px;right:3px;bottom:3px}.ui-draggable .ui-dialog-titlebar{cursor:move}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;z-index:2;width:1.2em;height:1.2em;cursor:default}.ui-slider .ui-slider-range{position:absolute;z-index:1;font-size:.7em;display:block;border:0;background-position:0 0}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:-.3em;margin-left:-.6em}.ui-slider-horizontal .ui-slider-range{top:0;height:100%}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.ui-slider-vertical{width:.8em;height:100px}.ui-slider-vertical .ui-slider-handle{left:-.3em;margin-left:0;margin-bottom:-.6em}.ui-slider-vertical .ui-slider-range{left:0;width:100%}.ui-slider-vertical .ui-slider-range-min{bottom:0}.ui-slider-vertical .ui-slider-range-max{top:0}.ui-tabs{position:relative;zoom:1;padding:.2em}.ui-tabs .ui-tabs-nav{margin:0;padding:.2em .2em 0}.ui-tabs .ui-tabs-nav li{list-style:none;float:left;position:relative;top:1px;border-bottom:0!important;white-space:nowrap;margin:0 .2em 1px 0;padding:0}.ui-tabs .ui-tabs-nav li a{float:left;text-decoration:none;padding:.5em 1em}.ui-tabs .ui-tabs-nav li.ui-tabs-selected{margin-bottom:0;padding-bottom:1px}.ui-tabs .ui-tabs-nav li.ui-tabs-selected a,.ui-tabs .ui-tabs-nav li.ui-state-disabled a,.ui-tabs .ui-tabs-nav li.ui-state-processing a{cursor:text}.ui-tabs .ui-tabs-nav li a,.ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-selected a{cursor:pointer}.ui-tabs .ui-tabs-panel{display:block;background:none;border-width:0;padding:1em 1.4em}.ui-tabs .ui-tabs-hide{display:none!important}.ui-datepicker{width:17em;display:none;padding:.2em .2em 0}.ui-datepicker .ui-datepicker-header{position:relative;padding:.2em 0}.ui-datepicker .ui-datepicker-prev,.ui-datepicker .ui-datepicker-next{position:absolute;top:2px;width:1.8em;height:1.8em}.ui-datepicker .ui-datepicker-prev-hover,.ui-datepicker .ui-datepicker-next-hover{top:1px}.ui-datepicker .ui-datepicker-prev{left:2px}.ui-datepicker .ui-datepicker-next{right:2px}.ui-datepicker .ui-datepicker-prev-hover{left:1px}.ui-datepicker .ui-datepicker-next-hover{right:1px}.ui-datepicker .ui-datepicker-prev span,.ui-datepicker .ui-datepicker-next span{display:block;position:absolute;left:50%;margin-left:-8px;top:50%;margin-top:-8px}.ui-datepicker .ui-datepicker-title{line-height:1.8em;text-align:center;margin:0 2.3em}.ui-datepicker .ui-datepicker-title select{font-size:1em;margin:1px 0}.ui-datepicker select.ui-datepicker-month,.ui-datepicker select.ui-datepicker-year{width:49%}.ui-datepicker table{width:100%;font-size:.9em;border-collapse:collapse;margin:0 0 .4em}.ui-datepicker th{text-align:center;font-weight:700;border:0;padding:.7em .3em}.ui-datepicker td{border:0;padding:1px}.ui-datepicker td span,.ui-datepicker td a{display:block;text-align:right;text-decoration:none;padding:.2em}.ui-datepicker .ui-datepicker-buttonpane{background-image:none;border-left:0;border-right:0;border-bottom:0;margin:.7em 0 0;padding:0 .2em}.ui-datepicker .ui-datepicker-buttonpane button{float:right;cursor:pointer;width:auto;overflow:visible;margin:.5em .2em .4em;padding:.2em .6em .3em}.ui-datepicker.ui-datepicker-multi{width:auto}.ui-datepicker-multi .ui-datepicker-group table{width:95%;margin:0 auto .4em}.ui-datepicker-multi-2 .ui-datepicker-group{width:50%}.ui-datepicker-multi-3 .ui-datepicker-group{width:33.3%}.ui-datepicker-multi-4 .ui-datepicker-group{width:25%}.ui-datepicker-multi .ui-datepicker-buttonpane{clear:left}.ui-datepicker-row-break{clear:both;width:100%;font-size:0}.ui-datepicker-rtl{direction:rtl}.ui-datepicker-rtl .ui-datepicker-prev{right:2px;left:auto}.ui-datepicker-rtl .ui-datepicker-next{left:2px;right:auto}.ui-datepicker-rtl .ui-datepicker-prev:hover{right:1px;left:auto}.ui-datepicker-rtl .ui-datepicker-next:hover{left:1px;right:auto}.ui-datepicker-rtl .ui-datepicker-buttonpane{clear:right}.ui-datepicker-cover{display:block;position:absolute;z-index:-1;filter:mask();top:-4px;left:-4px;width:200px;height:200px}.ui-progressbar{height:2em;text-align:left;overflow:hidden}.ui-progressbar .ui-progressbar-value{height:100%;margin:-1px}.ui-helper-hidden,.ui-resizable-disabled .ui-resizable-handle,.ui-resizable-autohide .ui-resizable-handle{display:none}.ui-widget-header a,.ui-state-highlight a,.ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a{color:#444}.ui-state-error a,.ui-widget-content .ui-state-error a,.ui-widget-header .ui-state-error a,.ui-state-error-text,.ui-widget-content .ui-state-error-text,.ui-widget-header .ui-state-error-text{color:#fff}.ui-widget-content .ui-icon,.ui-widget-header .ui-icon{background-image:url(images/ui-icons_999999_256x240.png)}.ui-state-hover .ui-icon,.ui-state-focus .ui-icon,.ui-state-highlight .ui-icon{background-image:url(images/ui-icons_3383bb_256x240.png)}.ui-icon-seek-start,.ui-icon-seek-first{background-position:-80px -160px}.ui-accordion,.ui-datepicker select.ui-datepicker-month-year{width:100%}.ui-button-text-only .ui-button-text,input.ui-button{padding:.4em 1em}.ui-button-text-icon-secondary .ui-button-icon-secondary,.ui-button-text-icons .ui-button-icon-secondary,.ui-button-icons-only .ui-button-icon-secondary,.ui-button-text-icons .ui-button-icon-secondary,.ui-button-icons-only .ui-button-icon-secondary{right:.5em}.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset,.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,.ui-datepicker-rtl .ui-datepicker-group{float:right}.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current,.ui-datepicker-multi .ui-datepicker-group,.ui-datepicker-rtl .ui-datepicker-buttonpane button{float:left}.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header{border-left-width:0}.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-rtl .ui-datepicker-group-middle"+
" .ui-datepicker-header{border-right-width:0;border-left-width:1px}</style>"));

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
DLQ.Mash = [];
var extension={};
 //extension.getURL = chrome.extension?chrome.extension.getURL:require("self").data.url ;
//DLQ.imgURL = extension.getURL("delete.gif");
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

	try{
		DLQ.History = JSON.parse(localStorage["DLQHistory"]);
		if(DLQ.History.length > 2000) DLQ.History.length = 2000;
	}catch(e){
		console.log(e);
	}

$(document).ready(function(){
	
	$('form[name="DF"]').submit(function(e){
		saveQuery();
		return true;
	});
	$('select[name="db"]').change(function(e){
		saveQuery();
		return true;
	});

	$("textarea").attr({tabindex : 4, placeholder: "Type substring from your previous queries to get auto suggestion"})
		.autocomplete({minLength : 4, autoFocus : true, source : DLQ.History});


	$('.delete').live('click',function(e){
		e.preventDefault();
		var tr = $(this).parent().parent('tr');
		tr.slideUp(1);
		DLQ.History.splice(tr.data('key'),1);
		localStorage["DLQHistory"] = JSON.stringify(DLQ.History);
		e.stopPropogation();
	});



	$('.queryText').live('click',function(e){
		e.preventDefault();
		var text=$(this).text();
		$('textarea').val(text);
		scroll(0,0);
	});

	var combo = $('select[name="db"]').combobox({delay: 0, autoFocus: true});


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
	//insertIntoDOM(map);

	$('.delete').css('cursor','pointer');
	$('tr').toggleClass('e').toggleClass('o');
	
	$('select').val()=="*"?$('input.ui-autocomplete-input').focus():$('textarea').focus();

	$("input:submit").attr({tabindex : 5});
	$("input[name='Clear']").attr({tabindex : 6});
	
	insertArrayIntoDOM();

	$('.queryText').css('cursor','pointer');
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
	DLQ.History.reverse();
	$.each(DLQ.History, function(key,val){
		i++;
		if(i<50){
			try{
				DLQ.History.pop();
			}catch(e){
				console.Error(e);
			}
		}
	});
	DLQ.History.reverse();
	saveQuery();
}

function saveQuery(){
	var query = $('textarea').val();
	if(!query || !query.length>0 || query=='undefined') {return;}
	
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
		removeOld();
	}
}

function insertArrayIntoDOM(){
	var i =0;
	var eoBool = false;
	var eo = 'o';
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