let html = `
<!doctype html>
<html lang="en-US" class="no-js" itemtype="https://schema.org/Blog" itemscope>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<title>Node.js From Scratch &#8211; Cloud Native Base Camp</title>
<meta name='robots' content='max-image-preview:large' />

		<!-- Meta Tag Manager -->
		<meta property="og:title" content="Node.js From Scratch" />
		<meta property="og:description" content="The complete guide for JavaScript Language and Node.js runtime." />
		<meta property="og:image" content="https://cloudnativebasecamp.com/wp-content/uploads/2023/12/nodejsfromscratch-bg2.jpg" />
		<meta property="og:url" content="https://cloudnativebasecamp.com/courses/node-js-from-scratch/" />
		<!-- / Meta Tag Manager -->
<script>window._wca = window._wca || [];</script>
<link rel='dns-prefetch' href='//stats.wp.com' />
<link rel="alternate" type="application/rss+xml" title="Cloud Native Base Camp &raquo; Feed" href="https://cloudnativebasecamp.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Cloud Native Base Camp &raquo; Comments Feed" href="https://cloudnativebasecamp.com/comments/feed/" />
			<script>document.documentElement.classList.remove( 'no-js' );</script>
			<script>
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/cloudnativebasecamp.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.5"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
</script>
<style id='wp-emoji-styles-inline-css'>

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
</style>
<link rel='stylesheet' id='wp-block-library-css' href='https://cloudnativebasecamp.com/wp-includes/css/dist/block-library/style.min.css?ver=6.4.5' media='all' />
<style id='kevinbatdorf-code-block-pro-style-inline-css'>
.wp-block-kevinbatdorf-code-block-pro{direction:ltr!important;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;-webkit-text-size-adjust:100%!important;box-sizing:border-box!important;position:relative!important}.wp-block-kevinbatdorf-code-block-pro *{box-sizing:border-box!important}.wp-block-kevinbatdorf-code-block-pro pre,.wp-block-kevinbatdorf-code-block-pro pre *{font-size:inherit!important;line-height:inherit!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre{background-image:none!important;border:0!important;border-radius:0!important;border-style:none!important;border-width:0!important;color:inherit!important;font-family:inherit!important;margin:0!important;overflow:auto!important;overflow-wrap:normal!important;padding:16px 0 16px 16px!important;text-align:left!important;white-space:pre!important;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.wp-block-kevinbatdorf-code-block-pro.padding-disabled:not(.code-block-pro-editor) pre{padding:0!important}.wp-block-kevinbatdorf-code-block-pro.padding-bottom-disabled pre{padding-bottom:0!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre code{background:none!important;background-color:transparent!important;border:0!important;border-radius:0!important;border-style:none!important;border-width:0!important;color:inherit!important;display:block!important;font-family:inherit!important;margin:0!important;overflow-wrap:normal!important;padding:0!important;text-align:left!important;white-space:pre!important;width:100%!important;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre code .line{display:inline-block!important;min-width:var(--cbp-block-width,100%)!important;vertical-align:top!important}.wp-block-kevinbatdorf-code-block-pro.cbp-has-line-numbers:not(.code-block-pro-editor) pre code .line{padding-left:calc(12px + var(--cbp-line-number-width, auto))!important}.wp-block-kevinbatdorf-code-block-pro.cbp-has-line-numbers:not(.code-block-pro-editor) pre code{counter-increment:step calc(var(--cbp-line-number-start, 1) - 1)!important;counter-reset:step!important}.wp-block-kevinbatdorf-code-block-pro pre code .line{position:relative!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre code .line:before{content:""!important;display:inline-block!important}.wp-block-kevinbatdorf-code-block-pro.cbp-has-line-numbers:not(.code-block-pro-editor) pre code .line:not(.cbp-line-number-disabled):before{color:var(--cbp-line-number-color,#999)!important;content:counter(step)!important;counter-increment:step!important;left:0!important;opacity:.5!important;position:absolute!important;text-align:right!important;transition-duration:.5s!important;transition-property:opacity!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important;width:var(--cbp-line-number-width,auto)!important}.wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover .line{min-height:var(--cbp-block-height,100%)!important}.wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,.wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,.wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter{background:var(--cbp-line-highlight-color,rgb(14 165 233/.2))!important;left:-16px!important;min-height:var(--cbp-block-height,100%)!important;min-width:calc(var(--cbp-block-width, 100%) + 16px)!important;pointer-events:none!important;position:absolute!important;top:0!important;width:100%!important}[data-code-block-pro-font-family="Code-Pro-Comic-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,[data-code-block-pro-font-family="Code-Pro-Comic-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,[data-code-block-pro-font-family="Code-Pro-Comic-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter{top:-.125rem!important}[data-code-block-pro-font-family=Code-Pro-Fira-Code].wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Fira-Code].wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Fira-Code].wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter{top:-1.5px!important}[data-code-block-pro-font-family="Code-Pro-Deja-Vu-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,[data-code-block-pro-font-family="Code-Pro-Deja-Vu-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,[data-code-block-pro-font-family="Code-Pro-Deja-Vu-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Cozette].wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Cozette].wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Cozette].wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter{top:-1px!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor).padding-disabled pre .line.cbp-line-highlight:after{left:0!important;width:100%!important}.wp-block-kevinbatdorf-code-block-pro.cbp-blur-enabled pre .line:not(.cbp-no-blur){filter:blur(1px)!important;opacity:.4!important;pointer-events:none!important;transition-duration:.2s!important;transition-property:all!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.wp-block-kevinbatdorf-code-block-pro.cbp-blur-enabled.cbp-unblur-on-hover:hover pre .line:not(.cbp-no-blur){opacity:1!important;pointer-events:auto!important;--tw-blur:blur(0);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre *{font-family:inherit!important}.cbp-see-more-simple-btn-hover{transition-property:none!important}.cbp-see-more-simple-btn-hover:hover{box-shadow:inset 0 0 100px 100px hsla(0,0%,100%,.1)!important}.code-block-pro-copy-button{border:0!important;border-style:none!important;border-width:0!important;cursor:pointer!important;left:auto!important;line-height:1!important;opacity:.1!important;padding:6px!important;position:absolute!important;right:0!important;top:0!important;transition-duration:.2s!important;transition-property:opacity!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;z-index:10!important}.code-block-pro-copy-button:focus{opacity:.4!important}.code-block-pro-copy-button:not([data-has-text-button]){background:none!important;background-color:transparent!important}.wp-block-kevinbatdorf-code-block-pro.padding-disabled .code-block-pro-copy-button{padding:0!important}.wp-block-kevinbatdorf-code-block-pro:hover .code-block-pro-copy-button{opacity:.5!important}.wp-block-kevinbatdorf-code-block-pro .code-block-pro-copy-button:hover{opacity:.9!important}.code-block-pro-copy-button[data-has-text-button],.wp-block-kevinbatdorf-code-block-pro:hover .code-block-pro-copy-button[data-has-text-button]{opacity:1!important}.wp-block-kevinbatdorf-code-block-pro .code-block-pro-copy-button[data-has-text-button]:hover{opacity:.8!important}.code-block-pro-copy-button[data-has-text-button]{border-radius:.75rem!important;display:block!important;margin-right:.75rem!important;margin-top:.7rem!important;padding:.125rem .375rem!important}.code-block-pro-copy-button[data-inside-header-type=headlightsMuted],.code-block-pro-copy-button[data-inside-header-type^=headlights]{margin-top:.85rem!important}.code-block-pro-copy-button[data-inside-header-type=headlightsMutedAlt]{margin-top:.65rem!important}.code-block-pro-copy-button[data-inside-header-type=simpleString]{margin-top:.645rem!important}.code-block-pro-copy-button[data-inside-header-type=pillString]{margin-top:1rem!important}.code-block-pro-copy-button[data-inside-header-type=pillString] .cbp-btn-text{position:relative!important;top:1px!important}.cbp-btn-text{font-size:.75rem!important;line-height:1rem!important}.code-block-pro-copy-button .without-check{display:block!important}.code-block-pro-copy-button .with-check{display:none!important}.code-block-pro-copy-button.cbp-copying{opacity:1!important}.code-block-pro-copy-button.cbp-copying .without-check{display:none!important}.code-block-pro-copy-button.cbp-copying .with-check{display:block!important}.cbp-footer-link:hover{text-decoration-line:underline!important}@media print{.wp-block-kevinbatdorf-code-block-pro pre{max-height:none!important}.wp-block-kevinbatdorf-code-block-pro:not(#x) .line:before{background-color:transparent!important;color:inherit!important}.wp-block-kevinbatdorf-code-block-pro:not(#x) .cbp-line-highlighter,.wp-block-kevinbatdorf-code-block-pro:not(#x)>span{display:none!important}}

</style>
<link rel='stylesheet' id='mediaelement-css' href='https://cloudnativebasecamp.com/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css?ver=4.2.17' media='all' />
<link rel='stylesheet' id='wp-mediaelement-css' href='https://cloudnativebasecamp.com/wp-includes/js/mediaelement/wp-mediaelement.min.css?ver=6.4.5' media='all' />
<style id='jetpack-sharing-buttons-style-inline-css'>
.jetpack-sharing-buttons__services-list{display:flex;flex-direction:row;flex-wrap:wrap;gap:0;list-style-type:none;margin:5px;padding:0}.jetpack-sharing-buttons__services-list.has-small-icon-size{font-size:12px}.jetpack-sharing-buttons__services-list.has-normal-icon-size{font-size:16px}.jetpack-sharing-buttons__services-list.has-large-icon-size{font-size:24px}.jetpack-sharing-buttons__services-list.has-huge-icon-size{font-size:36px}@media print{.jetpack-sharing-buttons__services-list{display:none!important}}.editor-styles-wrapper .wp-block-jetpack-sharing-buttons{gap:0;padding-inline-start:0}ul.jetpack-sharing-buttons__services-list.has-background{padding:1.25em 2.375em}
</style>
<style id='pdfemb-pdf-embedder-viewer-style-inline-css'>
.wp-block-pdfemb-pdf-embedder-viewer{max-width:none}

</style>
<link rel='stylesheet' id='wc-blocks-vendors-style-css' href='https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-vendors-style.css?ver=10.2.3' media='all' />
<link rel='stylesheet' id='wc-blocks-style-css' href='https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-style.css?ver=10.2.3' media='all' />
<style id='classic-theme-styles-inline-css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id='global-styles-inline-css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--theme-palette-1: var(--global-palette1);--wp--preset--color--theme-palette-2: var(--global-palette2);--wp--preset--color--theme-palette-3: var(--global-palette3);--wp--preset--color--theme-palette-4: var(--global-palette4);--wp--preset--color--theme-palette-5: var(--global-palette5);--wp--preset--color--theme-palette-6: var(--global-palette6);--wp--preset--color--theme-palette-7: var(--global-palette7);--wp--preset--color--theme-palette-8: var(--global-palette8);--wp--preset--color--theme-palette-9: var(--global-palette9);--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: var(--global-font-size-small);--wp--preset--font-size--medium: var(--global-font-size-medium);--wp--preset--font-size--large: var(--global-font-size-large);--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--larger: var(--global-font-size-larger);--wp--preset--font-size--xxlarge: var(--global-font-size-xxlarge);--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='learndash_quiz_front_css-css' href='//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_quiz_front.min.css?ver=4.3.1.3' media='all' />
<link rel='stylesheet' id='jquery-dropdown-css-css' href='//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/assets/css/jquery.dropdown.min.css?ver=4.3.1.3' media='all' />
<link rel='stylesheet' id='learndash_lesson_video-css' href='//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_lesson_video.min.css?ver=4.3.1.3' media='all' />
<style id='woocommerce-inline-inline-css'>
.woocommerce form .form-row .required { visibility: visible; }
</style>
<link rel='stylesheet' id='kadence-global-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/global.min.css?ver=1.2.7' media='all' />
<style id='kadence-global-inline-css'>
/* Kadence Base CSS */
:root{--global-palette1:#02d05f;--global-palette2:#01c89f;--global-palette3:#eceaea;--global-palette4:#999898;--global-palette5:#deddeb;--global-palette6:#c2d6c2;--global-palette7:#514d7c;--global-palette8:#2d2a30;--global-palette9:#272330;--global-palette9rgb:39, 35, 48;--global-palette-highlight:var(--global-palette1);--global-palette-highlight-alt:var(--global-palette2);--global-palette-highlight-alt2:var(--global-palette9);--global-palette-btn-bg:var(--global-palette1);--global-palette-btn-bg-hover:var(--global-palette2);--global-palette-btn:#ffffff;--global-palette-btn-hover:#ffffff;--global-body-font-family:'Work Sans', var(--global-fallback-font);--global-heading-font-family:'Work Sans', var(--global-fallback-font);--global-primary-nav-font-family:inherit;--global-fallback-font:sans-serif;--global-display-fallback-font:sans-serif;--global-content-width:1200px;--global-content-narrow-width:900px;--global-content-edge-padding:1.5rem;--global-content-boxed-padding:2rem;--global-calc-content-width:calc(1200px - var(--global-content-edge-padding) - var(--global-content-edge-padding) );--wp--style--global--content-size:var(--global-calc-content-width);}.wp-site-blocks{--global-vw:calc( 100vw - ( 0.5 * var(--scrollbar-offset)));}body{background:var(--global-palette8);}body, input, select, optgroup, textarea{font-style:normal;font-weight:normal;font-size:17px;line-height:1.6;font-family:var(--global-body-font-family);color:var(--global-palette4);}.content-bg, body.content-style-unboxed .site{background:var(--global-palette9);}h1,h2,h3,h4,h5,h6{font-family:var(--global-heading-font-family);}h1{font-style:normal;font-weight:700;font-size:40px;line-height:1.5;color:var(--global-palette3);}h2{font-weight:700;font-size:28px;line-height:1.5;color:var(--global-palette3);}h3{font-weight:700;font-size:24px;line-height:1.5;color:var(--global-palette3);}h4{font-style:normal;font-weight:normal;font-size:22px;line-height:1.5;color:var(--global-palette4);}h5{font-style:normal;font-weight:normal;font-size:20px;line-height:1.5;color:var(--global-palette4);}h6{font-style:normal;font-weight:normal;font-size:18px;line-height:1.5;color:var(--global-palette5);}.entry-hero .kadence-breadcrumbs{max-width:1200px;}.site-container, .site-header-row-layout-contained, .site-footer-row-layout-contained, .entry-hero-layout-contained, .comments-area, .alignfull > .wp-block-cover__inner-container, .alignwide > .wp-block-cover__inner-container{max-width:var(--global-content-width);}.content-width-narrow .content-container.site-container, .content-width-narrow .hero-container.site-container{max-width:var(--global-content-narrow-width);}@media all and (min-width: 1430px){.wp-site-blocks .content-container  .alignwide{margin-left:-115px;margin-right:-115px;width:unset;max-width:unset;}}@media all and (min-width: 1160px){.content-width-narrow .wp-site-blocks .content-container .alignwide{margin-left:-130px;margin-right:-130px;width:unset;max-width:unset;}}.content-style-boxed .wp-site-blocks .entry-content .alignwide{margin-left:calc( -1 * var( --global-content-boxed-padding ) );margin-right:calc( -1 * var( --global-content-boxed-padding ) );}.content-area{margin-top:5rem;margin-bottom:5rem;}@media all and (max-width: 1024px){.content-area{margin-top:3rem;margin-bottom:3rem;}}@media all and (max-width: 767px){.content-area{margin-top:2rem;margin-bottom:2rem;}}@media all and (max-width: 1024px){:root{--global-content-boxed-padding:2rem;}}@media all and (max-width: 767px){:root{--global-content-boxed-padding:1.5rem;}}.entry-content-wrap{padding:2rem;}@media all and (max-width: 1024px){.entry-content-wrap{padding:2rem;}}@media all and (max-width: 767px){.entry-content-wrap{padding:1.5rem;}}.entry.single-entry{box-shadow:0px 15px 15px -10px rgba(0,0,0,0.05);}.entry.loop-entry{box-shadow:0px 15px 15px -10px rgba(0,0,0,0.05);}.loop-entry .entry-content-wrap{padding:2rem;}@media all and (max-width: 1024px){.loop-entry .entry-content-wrap{padding:2rem;}}@media all and (max-width: 767px){.loop-entry .entry-content-wrap{padding:1.5rem;}}button, .button, .wp-block-button__link, input[type="button"], input[type="reset"], input[type="submit"], .fl-button, .elementor-button-wrapper .elementor-button{box-shadow:0px 0px 0px -7px rgba(0,0,0,0);}button:hover, button:focus, button:active, .button:hover, .button:focus, .button:active, .wp-block-button__link:hover, .wp-block-button__link:focus, .wp-block-button__link:active, input[type="button"]:hover, input[type="button"]:focus, input[type="button"]:active, input[type="reset"]:hover, input[type="reset"]:focus, input[type="reset"]:active, input[type="submit"]:hover, input[type="submit"]:focus, input[type="submit"]:active, .elementor-button-wrapper .elementor-button:hover, .elementor-button-wrapper .elementor-button:focus, .elementor-button-wrapper .elementor-button:active{box-shadow:0px 15px 25px -7px rgba(0,0,0,0.1);}.kb-button.kb-btn-global-outline.kb-btn-global-inherit{padding-top:calc(px - 2px);padding-right:calc(px - 2px);padding-bottom:calc(px - 2px);padding-left:calc(px - 2px);}@media all and (min-width: 1025px){.transparent-header .entry-hero .entry-hero-container-inner{padding-top:110px;}}@media all and (max-width: 1024px){.mobile-transparent-header .entry-hero .entry-hero-container-inner{padding-top:110px;}}@media all and (max-width: 767px){.mobile-transparent-header .entry-hero .entry-hero-container-inner{padding-top:75px;}}
/* Kadence Header CSS */
@media all and (max-width: 1024px){.mobile-transparent-header #masthead{position:absolute;left:0px;right:0px;z-index:100;}.kadence-scrollbar-fixer.mobile-transparent-header #masthead{right:var(--scrollbar-offset,0);}.mobile-transparent-header #masthead, .mobile-transparent-header .site-top-header-wrap .site-header-row-container-inner, .mobile-transparent-header .site-main-header-wrap .site-header-row-container-inner, .mobile-transparent-header .site-bottom-header-wrap .site-header-row-container-inner{background:transparent;}.site-header-row-tablet-layout-fullwidth, .site-header-row-tablet-layout-standard{padding:0px;}}@media all and (min-width: 1025px){.transparent-header #masthead{position:absolute;left:0px;right:0px;z-index:100;}.transparent-header.kadence-scrollbar-fixer #masthead{right:var(--scrollbar-offset,0);}.transparent-header #masthead, .transparent-header .site-top-header-wrap .site-header-row-container-inner, .transparent-header .site-main-header-wrap .site-header-row-container-inner, .transparent-header .site-bottom-header-wrap .site-header-row-container-inner{background:transparent;}}.site-branding a.brand img{max-width:270px;}.site-branding a.brand img.svg-logo-image{width:270px;}.site-branding{padding:0px 0px 0px 0px;}#masthead, #masthead .kadence-sticky-header.item-is-fixed:not(.item-at-start):not(.site-header-row-container):not(.site-main-header-wrap), #masthead .kadence-sticky-header.item-is-fixed:not(.item-at-start) > .site-header-row-container-inner{background:var(--global-palette9);}.site-main-header-inner-wrap{min-height:110px;}@media all and (max-width: 767px){.site-main-header-inner-wrap{min-height:75px;}}.header-navigation[class*="header-navigation-style-underline"] .header-menu-container.primary-menu-container>ul>li>a:after{width:calc( 100% - 1.45em);}.main-navigation .primary-menu-container > ul > li.menu-item > a{padding-left:calc(1.45em / 2);padding-right:calc(1.45em / 2);padding-top:0.6em;padding-bottom:0.6em;color:var(--global-palette5);}.main-navigation .primary-menu-container > ul > li.menu-item .dropdown-nav-special-toggle{right:calc(1.45em / 2);}.main-navigation .primary-menu-container > ul > li.menu-item > a:hover{color:var(--global-palette-highlight);}.main-navigation .primary-menu-container > ul > li.menu-item.current-menu-item > a{color:var(--global-palette3);}.header-navigation .header-menu-container ul ul.sub-menu, .header-navigation .header-menu-container ul ul.submenu{background:var(--global-palette3);box-shadow:0px 2px 13px 0px rgba(0,0,0,0.1);}.header-navigation .header-menu-container ul ul li.menu-item, .header-menu-container ul.menu > li.kadence-menu-mega-enabled > ul > li.menu-item > a{border-bottom:1px solid rgba(255,255,255,0.1);}.header-navigation .header-menu-container ul ul li.menu-item > a{width:200px;padding-top:1em;padding-bottom:1em;color:var(--global-palette8);font-size:12px;}.header-navigation .header-menu-container ul ul li.menu-item > a:hover{color:var(--global-palette9);background:var(--global-palette4);}.header-navigation .header-menu-container ul ul li.menu-item.current-menu-item > a{color:var(--global-palette9);background:var(--global-palette4);}.mobile-toggle-open-container .menu-toggle-open, .mobile-toggle-open-container .menu-toggle-open:focus{color:var(--global-palette5);padding:0.4em 0.6em 0.4em 0.6em;font-size:14px;}.mobile-toggle-open-container .menu-toggle-open.menu-toggle-style-bordered{border:1px solid currentColor;}.mobile-toggle-open-container .menu-toggle-open .menu-toggle-icon{font-size:20px;}.mobile-toggle-open-container .menu-toggle-open:hover, .mobile-toggle-open-container .menu-toggle-open:focus-visible{color:var(--global-palette-highlight);}.mobile-navigation ul li{font-style:normal;font-size:16px;}.mobile-navigation ul li a{padding-top:1em;padding-bottom:1em;}.mobile-navigation ul li > a, .mobile-navigation ul li.menu-item-has-children > .drawer-nav-drop-wrap{color:var(--global-palette8);}.mobile-navigation ul li.current-menu-item > a, .mobile-navigation ul li.current-menu-item.menu-item-has-children > .drawer-nav-drop-wrap{color:var(--global-palette-highlight);}.mobile-navigation ul li.menu-item-has-children .drawer-nav-drop-wrap, .mobile-navigation ul li:not(.menu-item-has-children) a{border-bottom:0px solid rgba(255,255,255,0.1);}.mobile-navigation:not(.drawer-navigation-parent-toggle-true) ul li.menu-item-has-children .drawer-nav-drop-wrap button{border-left:0px solid rgba(255,255,255,0.1);}#mobile-drawer .drawer-inner, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice .pop-portion-bg, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice.pop-animated.show-drawer .drawer-inner{background:var(--global-palette4);}#mobile-drawer .drawer-header .drawer-toggle{padding:0.6em 0.15em 0.6em 0.15em;font-size:24px;}#main-header .header-button{border-radius:6px 6px 6px 6px;background:#d03434;border:2px none transparent;box-shadow:0px 0px 0px -7px rgba(0,0,0,0);}#main-header .header-button.button-size-custom{padding:11px 30px 11px 30px;}#main-header .header-button:hover{box-shadow:0px 15px 25px -7px rgba(0,0,0,0.1);}.mobile-header-button-wrap .mobile-header-button-inner-wrap .mobile-header-button{border:2px none transparent;box-shadow:0px 0px 0px -7px rgba(0,0,0,0);}.mobile-header-button-wrap .mobile-header-button-inner-wrap .mobile-header-button:hover{box-shadow:0px 15px 25px -7px rgba(0,0,0,0.1);}
/* Kadence Footer CSS */
#colophon{background:var(--global-palette5);}.site-top-footer-wrap .site-footer-row-container-inner{font-style:normal;color:var(--global-palette8);}.site-footer .site-top-footer-wrap a:not(.button):not(.wp-block-button__link):not(.wp-element-button){color:var(--global-palette8);}.site-top-footer-inner-wrap{padding-top:30px;padding-bottom:30px;grid-column-gap:60px;grid-row-gap:60px;}.site-top-footer-inner-wrap .widget{margin-bottom:30px;}.site-top-footer-inner-wrap .widget-area .widget-title{font-style:normal;text-transform:capitalize;color:var(--global-palette8);}.site-top-footer-inner-wrap .site-footer-section:not(:last-child):after{border-right:0px none transparent;right:calc(-60px / 2);}.footer-social-wrap .footer-social-inner-wrap{font-size:1em;gap:0.3em;}.site-footer .site-footer-wrap .site-footer-section .footer-social-wrap .footer-social-inner-wrap .social-button{color:var(--global-palette8);background:var(--global-palette3);border:2px none transparent;border-radius:4px;}#colophon .footer-html{font-style:normal;color:var(--global-palette8);}
/* Kadence Woo CSS */
.entry-hero.product-hero-section .entry-header{min-height:200px;}.product-title .single-category{font-weight:700;font-size:32px;line-height:1.5;color:var(--global-palette3);}.wp-site-blocks .product-hero-section .extra-title{font-weight:700;font-size:32px;line-height:1.5;}.woocommerce ul.products.woo-archive-btn-button .product-action-wrap .button:not(.kb-button), .woocommerce ul.products li.woo-archive-btn-button .button:not(.kb-button), .wc-block-grid__product.woo-archive-btn-button .product-details .wc-block-grid__product-add-to-cart .wp-block-button__link{border:2px none transparent;box-shadow:0px 0px 0px 0px rgba(0,0,0,0.0);}.woocommerce ul.products.woo-archive-btn-button .product-action-wrap .button:not(.kb-button):hover, .woocommerce ul.products li.woo-archive-btn-button .button:not(.kb-button):hover, .wc-block-grid__product.woo-archive-btn-button .product-details .wc-block-grid__product-add-to-cart .wp-block-button__link:hover{box-shadow:0px 0px 0px 0px rgba(0,0,0,0);}
/* Kadence LearnDash CSS */
.sfwd-courses-title h1{font-style:normal;font-size:1.5em;color:var(--global-palette9);}.sfwd-courses-hero-section .entry-hero-container-inner{background:var(--global-palette1);}.entry-hero.sfwd-courses-hero-section .entry-header{min-height:68px;}@media all and (max-width: 1024px){.sfwd-courses-hero-section .entry-hero-container-inner{background:var(--global-palette1);}}body.single-sfwd-courses .content-bg, body.content-style-unboxed.single-sfwd-courses .site{background:var(--global-palette8);}@media all and (max-width: 1024px){body.single-sfwd-courses .content-bg, body.content-style-unboxed.single-sfwd-courses .site{background:var(--global-palette8);}}.sfwd-lessons-title h1{font-style:normal;font-size:1.5em;}
</style>
<link rel='stylesheet' id='kadence-header-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/header.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='kadence-content-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/content.min.css?ver=1.2.7' media='all' />
<style id='kadence-content-inline-css'>
.posted-on, .category-links, .posted-by, .comments-link { clip: rect(1px, 1px, 1px, 1px); height: 1px; position: absolute; overflow: hidden; width: 1px; }
</style>
<link rel='stylesheet' id='kadence-related-posts-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/related-posts.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='kad-splide-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/kadence-splide.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='kadence-woocommerce-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/woocommerce.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='kadence-footer-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/footer.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='learndash-front-css' href='//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/ld30/assets/css/learndash.min.css?ver=4.3.1.3' media='all' />
<link rel='stylesheet' id='kadence-blocks-rowlayout-css' href='https://cloudnativebasecamp.com/wp-content/plugins/kadence-blocks/dist/style-blocks-rowlayout.css?ver=3.2.50' media='all' />
<link rel='stylesheet' id='kadence-blocks-column-css' href='https://cloudnativebasecamp.com/wp-content/plugins/kadence-blocks/dist/style-blocks-column.css?ver=3.2.50' media='all' />
<link rel='stylesheet' id='kadence-learndash-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/learndash.min.css?ver=1.2.7' media='all' />
<style id='kadence-learndash-inline-css'>
				.ld-course-list-items .ld_course_grid .thumbnail.course .ld_course_grid_price.ribbon-enrolled {
					background: var(--global-palette-btn-bg-hover);
				}
				.ld-course-list-items .ld_course_grid .thumbnail.course .ld_course_grid_price.ribbon-enrolled:before {
					border-top-color:  var(--global-palette-btn-bg);
    				border-right-color:  var(--global-palette-btn-bg);
				}
				.ld-course-list-items .ld_course_grid .btn-primary {
					border-color: var(--global-palette-btn-bg);
					background: var(--global-palette-btn-bg);
					color: var(--global-palette-btn);
					box-shadow: 0px 0px 0px -7px rgba(0,0,0,0.0);
				}
				.ld-course-list-items .ld_course_grid .btn-primary:hover {
					color: var(--global-palette-btn-hover);
					border-color: var(--global-palette-btn-bg-hover);
					background: var(--global-palette-btn-bg-hover);
					box-shadow: 0px 15px 25px -7px rgba(0,0,0,0.1);
				}
				.learndash-wrapper .ld-item-list .ld-item-list-item.ld-is-next,
				.learndash-wrapper .wpProQuiz_content .wpProQuiz_questionListItem label:focus-within {
					border-color: var(--global-palette1);
				}
				/*
				.learndash-wrapper a:not(.ld-button):not(#quiz_continue_link):not(.ld-focus-menu-link):not(.btn-blue):not(#quiz_continue_link):not(.ld-js-register-account):not(#ld-focus-mode-course-heading):not(#btn-join):not(.ld-item-name):not(.ld-table-list-item-preview):not(.ld-lesson-item-preview-heading),
				*/

				.learndash-wrapper .ld-breadcrumbs a,
				.learndash-wrapper .ld-lesson-item.ld-is-current-lesson .ld-lesson-item-preview-heading,
				.learndash-wrapper .ld-lesson-item.ld-is-current-lesson .ld-lesson-title,
				.learndash-wrapper .ld-primary-color-hover:hover,
				.learndash-wrapper .ld-primary-color,
				.learndash-wrapper .ld-primary-color-hover:hover,
				.learndash-wrapper .ld-primary-color,
				.learndash-wrapper .ld-tabs .ld-tabs-navigation .ld-tab.ld-active,
				.learndash-wrapper .ld-button.ld-button-transparent,
				.learndash-wrapper .ld-button.ld-button-reverse,
				.learndash-wrapper .ld-icon-certificate,
				.learndash-wrapper .ld-login-modal .ld-login-modal-login .ld-modal-heading,
				#wpProQuiz_user_content a,
				.learndash-wrapper .ld-item-list .ld-item-list-item a.ld-item-name:hover,
				.learndash-wrapper .ld-focus-comments__heading-actions .ld-expand-button,
				.learndash-wrapper .ld-focus-comments__heading a,
				.learndash-wrapper .ld-focus-comments .comment-respond a,
				.learndash-wrapper .ld-focus-comment .ld-comment-reply a.comment-reply-link:hover,
				.learndash-wrapper .ld-expand-button.ld-button-alternate {
					color: var(--global-palette1) !important;
				}

				.learndash-wrapper .ld-focus-comment.bypostauthor>.ld-comment-wrapper,
				.learndash-wrapper .ld-focus-comment.role-group_leader>.ld-comment-wrapper,
				.learndash-wrapper .ld-focus-comment.role-administrator>.ld-comment-wrapper {
					background-color: rgba(2,208,95,0.03) !important;
				}


				.learndash-wrapper .ld-primary-background,
				.learndash-wrapper .ld-tabs .ld-tabs-navigation .ld-tab.ld-active:after {
					background: var(--global-palette1) !important;
				}



				.learndash-wrapper .ld-course-navigation .ld-lesson-item.ld-is-current-lesson .ld-status-incomplete,
				.learndash-wrapper .ld-focus-comment.bypostauthor:not(.ptype-sfwd-assignment) >.ld-comment-wrapper>.ld-comment-avatar img,
				.learndash-wrapper .ld-focus-comment.role-group_leader>.ld-comment-wrapper>.ld-comment-avatar img,
				.learndash-wrapper .ld-focus-comment.role-administrator>.ld-comment-wrapper>.ld-comment-avatar img {
					border-color: var(--global-palette1) !important;
				}



				.learndash-wrapper .ld-loading::before {
					border-top:3px solid var(--global-palette1) !important;
				}

				.learndash-wrapper .ld-button:hover:not(.learndash-link-previous-incomplete):not(.ld-button-transparent),
				#learndash-tooltips .ld-tooltip:after,
				#learndash-tooltips .ld-tooltip,
				.learndash-wrapper .ld-primary-background,
				.learndash-wrapper .btn-join,
				.learndash-wrapper #btn-join,
				.learndash-wrapper .ld-button:not(.ld-js-register-account):not(.learndash-link-previous-incomplete):not(.ld-button-transparent),
				.learndash-wrapper .ld-expand-button,
				.learndash-wrapper .wpProQuiz_content .wpProQuiz_button:not(.wpProQuiz_button_reShowQuestion):not(.wpProQuiz_button_restartQuiz),
				.learndash-wrapper .wpProQuiz_content .wpProQuiz_button2,
				.learndash-wrapper .ld-focus .ld-focus-sidebar .ld-course-navigation-heading,
				.learndash-wrapper .ld-focus .ld-focus-sidebar .ld-focus-sidebar-trigger,
				.learndash-wrapper .ld-focus-comments .form-submit #submit,
				.learndash-wrapper .ld-login-modal input[type='submit'],
				.learndash-wrapper .ld-login-modal .ld-login-modal-register,
				.learndash-wrapper .wpProQuiz_content .wpProQuiz_certificate a.btn-blue,
				.learndash-wrapper .ld-focus .ld-focus-header .ld-user-menu .ld-user-menu-items a,
				#wpProQuiz_user_content table.wp-list-table thead th,
				#wpProQuiz_overlay_close,
				.learndash-wrapper .ld-expand-button.ld-button-alternate .ld-icon {
					background-color: var(--global-palette1) !important;
				}


				.learndash-wrapper .ld-focus .ld-focus-header .ld-user-menu .ld-user-menu-items:before {
					border-bottom-color: var(--global-palette1) !important;
				}

				.learndash-wrapper .ld-button.ld-button-transparent:hover {
					background: transparent !important;
				}

				.learndash-wrapper .ld-focus .ld-focus-header .sfwd-mark-complete .learndash_mark_complete_button,
				.learndash-wrapper .ld-focus .ld-focus-header #sfwd-mark-complete #learndash_mark_complete_button,
				.learndash-wrapper .ld-button.ld-button-transparent,
				.learndash-wrapper .ld-button.ld-button-alternate,
				.learndash-wrapper .ld-expand-button.ld-button-alternate {
					background-color:transparent !important;
				}

				.learndash-wrapper .ld-focus-header .ld-user-menu .ld-user-menu-items a,
				.learndash-wrapper .ld-button.ld-button-reverse:hover,
				.learndash-wrapper .ld-alert-success .ld-alert-icon.ld-icon-certificate,
				.learndash-wrapper .ld-alert-warning .ld-button:not(.learndash-link-previous-incomplete),
				.learndash-wrapper .ld-primary-background.ld-status {
					color:white !important;
				}

				.learndash-wrapper .ld-status.ld-status-unlocked {
					background-color: rgba(2,208,95,0.2) !important;
					color: var(--global-palette1) !important;
				}

				.learndash-wrapper .wpProQuiz_content .wpProQuiz_addToplist {
					background-color: rgba(2,208,95,0.1) !important;
					border: 1px solid var(--global-palette1) !important;
				}

				.learndash-wrapper .wpProQuiz_content .wpProQuiz_toplistTable th {
					background: var(--global-palette1) !important;
				}

				.learndash-wrapper .wpProQuiz_content .wpProQuiz_toplistTrOdd {
					background-color: rgba(2,208,95,0.1) !important;
				}

				.learndash-wrapper .wpProQuiz_content .wpProQuiz_reviewDiv li.wpProQuiz_reviewQuestionTarget {
					background-color: var(--global-palette1) !important;
				}

				
					.learndash-wrapper #quiz_continue_link,
					.learndash-wrapper .ld-secondary-background,
					.learndash-wrapper .learndash_mark_complete_button,
					.learndash-wrapper #learndash_mark_complete_button,
					.learndash-wrapper .ld-status-complete,
					.learndash-wrapper .ld-alert-success .ld-button,
					.learndash-wrapper .ld-alert-success .ld-alert-icon {
						background-color: var(--global-palette2) !important;
					}
					.learndash-wrapper .learndash_mark_complete_button:hover, .learndash-wrapper #learndash_mark_complete_button:hover {
						background-color: var(--global-palette2) !important;
					}

					.learndash-wrapper .wpProQuiz_content a#quiz_continue_link {
						background-color: var(--global-palette2) !important;
					}

					.learndash-wrapper .course_progress .sending_progress_bar {
						background: var(--global-palette2) !important;
					}

					.learndash-wrapper .wpProQuiz_content .wpProQuiz_button_reShowQuestion:hover, .learndash-wrapper .wpProQuiz_content .wpProQuiz_button_restartQuiz:hover {
						background-color: var(--global-palette2) !important;
						opacity: 0.75;
					}

					.learndash-wrapper .ld-secondary-color-hover:hover,
					.learndash-wrapper .ld-secondary-color,
					.learndash-wrapper .ld-focus .ld-focus-header .sfwd-mark-complete .learndash_mark_complete_button,
					.learndash-wrapper .ld-focus .ld-focus-header #sfwd-mark-complete #learndash_mark_complete_button,
					.learndash-wrapper .ld-focus .ld-focus-header .sfwd-mark-complete:after {
						color: var(--global-palette2) !important;
					}

					.learndash-wrapper .ld-secondary-in-progress-icon {
						border-left-color: var(--global-palette2) !important;
						border-top-color: var(--global-palette2) !important;
					}

					.learndash-wrapper .ld-alert-success {
						border-color: var(--global-palette2);
						background-color: transparent !important;
					}

					.learndash-wrapper .wpProQuiz_content .wpProQuiz_reviewQuestion li.wpProQuiz_reviewQuestionSolved,
					.learndash-wrapper .wpProQuiz_content .wpProQuiz_box li.wpProQuiz_reviewQuestionSolved {
						background-color: var(--global-palette2) !important;
					}

					.learndash-wrapper .wpProQuiz_content  .wpProQuiz_reviewLegend span.wpProQuiz_reviewColor_Answer {
						background-color: var(--global-palette2) !important;
					}

					
</style>
<style id='kadence-blocks-global-variables-inline-css'>
:root {--global-kb-font-size-sm:clamp(0.8rem, 0.73rem + 0.217vw, 0.9rem);--global-kb-font-size-md:clamp(1.1rem, 0.995rem + 0.326vw, 1.25rem);--global-kb-font-size-lg:clamp(1.75rem, 1.576rem + 0.543vw, 2rem);--global-kb-font-size-xl:clamp(2.25rem, 1.728rem + 1.63vw, 3rem);--global-kb-font-size-xxl:clamp(2.5rem, 1.456rem + 3.26vw, 4rem);--global-kb-font-size-xxxl:clamp(2.75rem, 0.489rem + 7.065vw, 6rem);}
</style>
<style id='kadence_blocks_css-inline-css'>
.kb-row-layout-id4467_edb525-b7 > .kt-row-column-wrap{padding-top:var( --global-kb-row-default-top, var(--global-kb-spacing-sm, 1.5rem) );padding-bottom:var( --global-kb-row-default-bottom, var(--global-kb-spacing-sm, 1.5rem) );grid-template-columns:repeat(2, minmax(0, 1fr));}@media all and (max-width: 767px){.kb-row-layout-id4467_edb525-b7 > .kt-row-column-wrap{grid-template-columns:minmax(0, 1fr);}}.kadence-column4467_ffdb40-52 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4467_ffdb40-52 > .kt-inside-inner-col{flex-direction:column;}.kadence-column4467_ffdb40-52 > .kt-inside-inner-col > .aligncenter{width:100%;}@media all and (max-width: 1024px){.kadence-column4467_ffdb40-52 > .kt-inside-inner-col{flex-direction:column;}}@media all and (max-width: 767px){.kadence-column4467_ffdb40-52 > .kt-inside-inner-col{flex-direction:column;}}.kadence-column4467_0522e0-5d > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4467_0522e0-5d > .kt-inside-inner-col{flex-direction:column;}.kadence-column4467_0522e0-5d > .kt-inside-inner-col > .aligncenter{width:100%;}@media all and (max-width: 1024px){.kadence-column4467_0522e0-5d > .kt-inside-inner-col{flex-direction:column;}}@media all and (max-width: 767px){.kadence-column4467_0522e0-5d > .kt-inside-inner-col{flex-direction:column;}}
</style>
<script src="https://cloudnativebasecamp.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script src="https://cloudnativebasecamp.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script src="https://stats.wp.com/s-202441.js" id="woocommerce-analytics-js" defer data-wp-strategy="defer"></script>
<link rel="https://api.w.org/" href="https://cloudnativebasecamp.com/wp-json/" /><link rel="alternate" type="application/json" href="https://cloudnativebasecamp.com/wp-json/wp/v2/sfwd-courses/4467" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://cloudnativebasecamp.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.4.5" />
<meta name="generator" content="WooCommerce 7.8.0" />
<link rel="canonical" href="https://cloudnativebasecamp.com/courses/node-js-from-scratch/" />
<link rel='shortlink' href='https://cloudnativebasecamp.com/?p=4467' />
<link rel="alternate" type="application/json+oembed" href="https://cloudnativebasecamp.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcloudnativebasecamp.com%2Fcourses%2Fnode-js-from-scratch%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://cloudnativebasecamp.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcloudnativebasecamp.com%2Fcourses%2Fnode-js-from-scratch%2F&#038;format=xml" />
		<script type="text/javascript">
				(function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;
					t.src="https://www.clarity.ms/tag/"+i+"?ref=wordpress";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "nk5hk727ou");
		</script>
			<style>img#wpstats{display:none}</style>
			<noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
	<style>.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>			<script  type="text/javascript">
				!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
					n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
					document,'script','https://connect.facebook.net/en_US/fbevents.js');
			</script>
			<!-- WooCommerce Facebook Integration Begin -->
			<script  type="text/javascript">

				fbq('init', '2516399868556194', {}, {
    "agent": "woocommerce-7.8.0-3.2.6"
});

				fbq( 'track', 'PageView', {
    "source": "woocommerce",
    "version": "7.8.0",
    "pluginVersion": "3.2.6"
} );

				document.addEventListener( 'DOMContentLoaded', function() {
					// Insert placeholder for events injected when a product is added to the cart through AJAX.
					document.body.insertAdjacentHTML( 'beforeend', '<div class=\"wc-facebook-pixel-event-placeholder\"></div>' );
				}, false );

			</script>
			<!-- WooCommerce Facebook Integration End -->
			<link rel='stylesheet' id='kadence-fonts-css' href='https://fonts.googleapis.com/css?family=Work%20Sans:regular,700&#038;display=swap' media='all' />
		<style id="wp-custom-css">
			.rtl {
	direction: rtl;
}

.rimg {
	border-radius: 10px;
}

.woocommerce-notices-wrapper
{
	display: none;
}

.ld-course-status-not-enrolled
{
	display: none !important;
}

.order-overview
{
	display: none !important;
}

.logged-in .button-class
display: none;
}

.met-link {
	background-color: #FFEB00;
}

.bg-y {
	background-color: #FFEB00;
	color: black;
	padding: 5px;
}

.met_user_info {
	background-color: #FFEB00;
	font-weight: bold;
	padding: 0px 10px;
	color: #222222
}
		</style>
			<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-PFMX1JR4R9">
	</script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-PFMX1JR4R9');
	</script>
</head>

<body class="sfwd-courses-template-default single single-sfwd-courses postid-4467 wp-custom-logo wp-embed-responsive theme-kadence modula-best-grid-gallery woocommerce-no-js footer-on-bottom hide-focus-outline link-style-standard content-title-style-hide content-width-normal content-style-boxed content-vertical-padding-show non-transparent-header mobile-non-transparent-header date-hidden categories-hidden author-hidden comment-hidden learndash-cpt learndash-cpt-sfwd-courses learndash-template-ld30 learndash-embed-responsive">
<div id="wrapper" class="site wp-site-blocks">
			<a class="skip-link screen-reader-text scroll-ignore" href="#main">Skip to content</a>
		<header id="masthead" class="site-header" role="banner" itemtype="https://schema.org/WPHeader" itemscope>
	<div id="main-header" class="site-header-wrap">
		<div class="site-header-inner-wrap">
			<div class="site-header-upper-wrap">
				<div class="site-header-upper-inner-wrap">
					<div class="site-main-header-wrap site-header-row-container site-header-focus-item site-header-row-layout-standard" data-section="kadence_customizer_header_main">
	<div class="site-header-row-container-inner">
				<div class="site-container">
			<div class="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
									<div class="site-header-main-section-left site-header-section site-header-section-left">
						<div class="site-header-item site-header-focus-item" data-section="title_tagline">
	<div class="site-branding branding-layout-standard site-brand-logo-only"><a class="brand has-logo-image" href="https://cloudnativebasecamp.com/" rel="home"><img width="1630" height="500" src="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname.png" class="custom-logo" alt="Cloud Native Base Camp" decoding="async" fetchpriority="high" srcset="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname.png 1630w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-300x92.png 300w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-1024x314.png 1024w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-768x236.png 768w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-1536x471.png 1536w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-600x184.png 600w" sizes="(max-width: 1630px) 100vw, 1630px" /></a></div></div><!-- data-section="title_tagline" -->
<div class="site-header-item site-header-focus-item site-header-item-main-navigation header-navigation-layout-stretch-false header-navigation-layout-fill-stretch-false" data-section="kadence_customizer_primary_navigation">
		<nav id="site-navigation" class="main-navigation header-navigation nav--toggle-sub header-navigation-style-standard header-navigation-dropdown-animation-none" role="navigation" aria-label="Primary Navigation">
				<div class="primary-menu-container header-menu-container">
			<ul id="primary-menu" class="menu"><li id="menu-item-8461" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-8461"><a href="https://cloudnativebasecamp.com/">الرئيسية</a></li>
<li id="menu-item-8625" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8625"><a href="https://cloudnativebasecamp.com/plans/">خطط الأشتراك</a></li>
<li id="menu-item-629" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-629"><a href="https://cloudnativebasecamp.com/courseslist/">الكورسات</a></li>
<li id="menu-item-8345" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8345"><a href="https://cloudnativebasecamp.com/blog/">Blog</a></li>
<li id="menu-item-898" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-898"><a href="https://cloudnativebasecamp.com/contact/">المساعدة</a></li>
<li id="menu-item-634" class="ld-button met-link menu-item menu-item-type-custom menu-item-object-custom menu-item-634"><a href="#login">دخول</a></li>
</ul>		</div>
	</nav><!-- #site-navigation -->
	</div><!-- data-section="primary_navigation" -->
<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_header_html">
	<div class="header-html inner-link-style-normal"><div class="header-html-inner"><div class="met_user_info"></div>
</div></div></div><!-- data-section="header_html" -->
					</div>
																	<div class="site-header-main-section-right site-header-section site-header-section-right">
						<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_header_button">
	<div class="header-button-wrap vs-logged-in-false"><div class="header-button-inner-wrap"><a href="http://cloudnativebasecamp.com/plans" target="_self" class="button header-button button-size-custom button-style-filled">أشترك</a></div></div></div><!-- data-section="header_button" -->
					</div>
							</div>
		</div>
	</div>
</div>
				</div>
			</div>
					</div>
	</div>
	
<div id="mobile-header" class="site-mobile-header-wrap">
	<div class="site-header-inner-wrap">
		<div class="site-header-upper-wrap">
			<div class="site-header-upper-inner-wrap">
			<div class="site-main-header-wrap site-header-focus-item site-header-row-layout-standard site-header-row-tablet-layout-default site-header-row-mobile-layout-default ">
	<div class="site-header-row-container-inner">
		<div class="site-container">
			<div class="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
									<div class="site-header-main-section-left site-header-section site-header-section-left">
						<div class="site-header-item site-header-focus-item" data-section="title_tagline">
	<div class="site-branding mobile-site-branding branding-layout-standard branding-tablet-layout-inherit site-brand-logo-only branding-mobile-layout-inherit"><a class="brand has-logo-image" href="https://cloudnativebasecamp.com/" rel="home"><img width="1630" height="500" src="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname.png" class="custom-logo" alt="Cloud Native Base Camp" decoding="async" srcset="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname.png 1630w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-300x92.png 300w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-1024x314.png 1024w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-768x236.png 768w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-1536x471.png 1536w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-600x184.png 600w" sizes="(max-width: 1630px) 100vw, 1630px" /></a></div></div><!-- data-section="title_tagline" -->
					</div>
																	<div class="site-header-main-section-right site-header-section site-header-section-right">
						<div class="site-header-item site-header-focus-item site-header-item-navgation-popup-toggle" data-section="kadence_customizer_mobile_trigger">
		<div class="mobile-toggle-open-container">
						<button id="mobile-toggle" class="menu-toggle-open drawer-toggle menu-toggle-style-default" aria-label="Open menu" data-toggle-target="#mobile-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".menu-toggle-close"
					>
						<span class="menu-toggle-icon"><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-menu-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Toggle Menu</title><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
				</svg></span></span>
		</button>
	</div>
	</div><!-- data-section="mobile_trigger" -->
					</div>
							</div>
		</div>
	</div>
</div>
			</div>
		</div>
			</div>
</div>
</header><!-- #masthead -->

	<div id="inner-wrap" class="wrap hfeed kt-clear">
		<div id="primary" class="content-area">
	<div class="content-container site-container">
		<main id="main" class="site-main" role="main">
			<div class="woocommerce kadence-woo-messages-none-woo-pages woocommerce-notices-wrapper"></div>			<div class="content-wrap">
					<div class="post-thumbnail article-post-thumbnail kadence-thumbnail-position-above kadence-thumbnail-ratio-inherit">
		<div class="post-thumbnail-inner">
			<img width="1920" height="1080" src="https://cloudnativebasecamp.com/wp-content/uploads/2023/12/nodejsfromscratch-bg2.jpg" class="post-top-featured wp-post-image" alt="" decoding="async" srcset="https://cloudnativebasecamp.com/wp-content/uploads/2023/12/nodejsfromscratch-bg2.jpg 1920w, https://cloudnativebasecamp.com/wp-content/uploads/2023/12/nodejsfromscratch-bg2-300x169.jpg 300w, https://cloudnativebasecamp.com/wp-content/uploads/2023/12/nodejsfromscratch-bg2-1024x576.jpg 1024w, https://cloudnativebasecamp.com/wp-content/uploads/2023/12/nodejsfromscratch-bg2-768x432.jpg 768w, https://cloudnativebasecamp.com/wp-content/uploads/2023/12/nodejsfromscratch-bg2-1536x864.jpg 1536w, https://cloudnativebasecamp.com/wp-content/uploads/2023/12/nodejsfromscratch-bg2-600x338.jpg 600w" sizes="(max-width: 1920px) 100vw, 1920px" />		</div>
	</div><!-- .post-thumbnail -->
			<article id="post-4467" class="entry content-bg single-entry post-4467 sfwd-courses type-sfwd-courses status-publish has-post-thumbnail hentry">
	<div class="entry-content-wrap">
		
<div class="entry-content single-content">
	<div class="learndash learndash_post_sfwd-courses user_has_no_access"  id="learndash_post_4467">
<div class="learndash-wrapper">

	<div class="learndash-wrapper learndash-wrap learndash-shortcode-wrap learndash-shortcode-wrap-ld_infobar-4467_4467_0">

	<div class="ld-course-status ld-course-status-not-enrolled">

		
		<div class="ld-course-status-segment ld-course-status-seg-status">

			
			<span class="ld-course-status-label">Current Status</span>
			<div class="ld-course-status-content">
				<span class="ld-status ld-status-waiting ld-tertiary-background" data-ld-tooltip="
				Enroll in this course to get access				">
				Not Enrolled</span>
			</div>

			
		</div> <!--/.ld-course-status-segment-->

		
		<div class="ld-course-status-segment ld-course-status-seg-price ld-course-status-mode-closed">

			
			<span class="ld-course-status-label">Price</span>

			<div class="ld-course-status-content">
							<span class="ld-course-status-price">
					Closed				</span>
							</div>

			
		</div> <!--/.ld-course-status-segment-->

		
		<div class="ld-course-status-segment ld-course-status-seg-action status-closed">
			<span class="ld-course-status-label">Get Started</span>
			<div class="ld-course-status-content">
				<div class="ld-course-status-action">
					<a class="btn-join" href="http://cloudnativebasecamp.com/cart/?add-to-cart=15" id="btn-join">Take this Course</a>				</div>
			</div>
		</div> <!--/.ld-course-status-action-->

		
	</div> <!--/.ld-course-status-->


</div>
	
<div class="ld-tabs ld-tab-count-1">
	
	<div class="ld-tabs-content">
		
			<div role="tabpanel" tabindex="0" aria-labelledby="content" class="ld-tab-content ld-visible" id="ld-tab-content-4467">
								
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe title="Course: Node.js from scratch  مقدمة تعريفية" width="720" height="405" src="https://www.youtube.com/embed/F_BR1VpkLZw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div></figure>


<div class="kb-row-layout-wrap kb-row-layout-id4467_edb525-b7 alignnone wp-block-kadence-rowlayout"><div class="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">

<div class="wp-block-kadence-column kadence-column4467_ffdb40-52 inner-column-1"><div class="kt-inside-inner-col">
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe title="الدرس التاسع من كورس Node.js From Scratch [عينة]" width="720" height="405" src="https://www.youtube.com/embed/99m60dgDxBI?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div></figure>
</div></div>



<div class="wp-block-kadence-column kadence-column4467_0522e0-5d inner-column-2"><div class="kt-inside-inner-col">
<p class="has-medium-font-size"><strong>درس عينة</strong></p>
</div></div>

</div></div>			</div>

			
	</div> <!--/.ld-tabs-content-->

</div> <!--/.ld-tabs-->
<div class="learndash-wrapper learndash-wrap learndash-shortcode-wrap learndash-shortcode-wrap-course_content-4467_4467_0"><div class="learndash user_has_no_access" id="learndash_post_4467">		<div class="learndash-wrapper">
						<div class="ld-item-list ld-lesson-list ld-course-content-4467" data-shortcode_instance="{&quot;course_id&quot;:4467,&quot;post_id&quot;:4467,&quot;group_id&quot;:0,&quot;paged&quot;:1,&quot;num&quot;:100,&quot;wrapper&quot;:true,&quot;user_id&quot;:0}">
			<div class="ld-section-heading">

				
				<h2>
				محتويات الكورس				</h2>

				
				<div class="ld-item-list-actions" data-ld-expand-list="true">

					
					
				</div> <!--/.ld-item-list-actions-->
			</div> <!--/.ld-section-heading-->

			
	<div class="ld-item-list-items  ld-item-list-4467" id="ld-item-list-4467" data-ld-expand-id="ld-item-list-4467" data-ld-expand-list="true">
		
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4474 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4474" data-ld-expand-id="ld-expand-4474" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/01-prepare-development-environment/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				01 &#8211; Prepare Development Environment
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4476 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4476" data-ld-expand-id="ld-expand-4476" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/02-node-js-application-files-organization/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				02 &#8211; Node.js application files organization
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4478 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4478" data-ld-expand-id="ld-expand-4478" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/03-variables-introduction/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				03 &#8211; Variables
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4480 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4480" data-ld-expand-id="ld-expand-4480" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/04-variables-hands-on/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				04 &#8211; Variables &#8211; hands-on
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4505 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4505" data-ld-expand-id="ld-expand-4505" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/05-operators-arithmetic/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				05 &#8211; Operators &#8211; Arithmetic
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4524 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4524" data-ld-expand-id="ld-expand-4524" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/06-operators-arithmetic-priorities-order-of-operations/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				06 &#8211; Operators &#8211; Arithmetic &#8211; Priorities (order of operations)
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4528 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4528" data-ld-expand-id="ld-expand-4528" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/07-operators-arithmetic-hands-on/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				07 &#8211; Operators &#8211; Arithmetic &#8211; hands-on
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4534 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4534" data-ld-expand-id="ld-expand-4534" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/08-operators-assignments/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				08 &#8211; Operators &#8211; Assignments
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4547 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4547" data-ld-expand-id="ld-expand-4547" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/exercises-01/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				Exercises &#8211; 01
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4568 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4568" data-ld-expand-id="ld-expand-4568" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/09-operators-comparison/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				09 &#8211; Operators &#8211; Comparison
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4580 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4580" data-ld-expand-id="ld-expand-4580" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/exercises-02/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				Exercises &#8211; 02
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4592 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4592" data-ld-expand-id="ld-expand-4592" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/10-operators-logical/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				10 &#8211; Operators &#8211; Logical
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4601 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4601" data-ld-expand-id="ld-expand-4601" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/11-statements-if/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				11 &#8211; Statements &#8211; if
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4623 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4623" data-ld-expand-id="ld-expand-4623" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/12-scopes-const-let/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				12 &#8211; Scopes &#8211; const &#8211; let
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4625 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4625" data-ld-expand-id="ld-expand-4625" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/13-var-global-scope-accessibility/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				13 &#8211; var global scope accessibility
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4627 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4627" data-ld-expand-id="ld-expand-4627" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/14-var-block-and-function-scope-accessibility/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				14 &#8211; var block and function scope accessibility
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4629 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4629" data-ld-expand-id="ld-expand-4629" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/15-const-scopes-accessibility/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				15 &#8211; const scopes accessibility
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4632 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4632" data-ld-expand-id="ld-expand-4632" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/16-let-scopes-accessibility/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				16 &#8211; let scopes accessibility
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4635 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4635" data-ld-expand-id="ld-expand-4635" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/17-statements-for/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				17 &#8211; Statements &#8211; for
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4697 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4697" data-ld-expand-id="ld-expand-4697" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/18-hands-on-exercises/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				18 &#8211; Hands-on Exercises
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4699 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4699" data-ld-expand-id="ld-expand-4699" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/19-hoisting/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				19 &#8211; Hoisting
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4701 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4701" data-ld-expand-id="ld-expand-4701" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/20-lexical-grammar/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				20 &#8211; Lexical Grammar
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4928 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4928" data-ld-expand-id="ld-expand-4928" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/21-array-01-introduction/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				21 &#8211; Array 01 &#8211; Introduction
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4930 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4930" data-ld-expand-id="ld-expand-4930" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/22-regular-function/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				22 &#8211; Regular Function
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4932 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4932" data-ld-expand-id="ld-expand-4932" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/23-array-02-some-built-in-functions/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				23 &#8211; Array 02 &#8211; Some Built-in Functions
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-4934 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-4934" data-ld-expand-id="ld-expand-4934" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/24-object/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				24 &#8211; Object
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-6901 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-6901" data-ld-expand-id="ld-expand-6901" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/25-object-constructor-function/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				25 &#8211; Object &#8211; Constructor Function
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-6903 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-6903" data-ld-expand-id="ld-expand-6903" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/26-modules-commonjs-cjs/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				26 &#8211; Modules &#8211; CommonJS (CJS)
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-6922 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-6922" data-ld-expand-id="ld-expand-6922" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/27-primitive-data-types-undefined-null/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				27 &#8211; Primitive Data Types &#8211; undefined, null
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-6956 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-6956" data-ld-expand-id="ld-expand-6956" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/28-data-types-numbers-ieee-754/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				28 &#8211; Data Types &#8211; numbers &#8211; IEEE 754
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-6971 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-6971" data-ld-expand-id="ld-expand-6971" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/29-numbers-coercion-basics/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				29 &#8211; Numbers &#8211; Coercion &#8211; basics
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-6973 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-6973" data-ld-expand-id="ld-expand-6973" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/30-numbers-number-object/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				30 &#8211; Numbers &#8211; Number object
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-6975 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-6975" data-ld-expand-id="ld-expand-6975" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/31-numbers-math-object/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				31 &#8211; Numbers &#8211; Math object
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7001 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7001" data-ld-expand-id="ld-expand-7001" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/32-create-and-use-your-first-module/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				32 &#8211; Create and use your first module.
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7008 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7008" data-ld-expand-id="ld-expand-7008" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/33-the-compiler-and-the-interpreter/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				33 &#8211; The Compiler and the Interpreter
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7011 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7011" data-ld-expand-id="ld-expand-7011" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/34-the-tale-of-javascript-and-ecmascript/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				34 &#8211; The tale of JavaScript and ECMAscript
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7031 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7031" data-ld-expand-id="ld-expand-7031" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/35-v8-engine/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				35 &#8211; V8 engine
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7204 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7204" data-ld-expand-id="ld-expand-7204" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/36-strings-utf-16/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				36 &#8211; Strings &#8211; UTF-16
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7206 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7206" data-ld-expand-id="ld-expand-7206" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/37-strings-important-functions-part-01/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				37 &#8211; Strings &#8211; important functions &#8211; part 01
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7208 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7208" data-ld-expand-id="ld-expand-7208" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/38-strings-important-functions-part-02/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				38 &#8211; Strings &#8211; important functions &#8211; part 02
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7210 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7210" data-ld-expand-id="ld-expand-7210" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/39-strings-template-literals/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				39 &#8211; Strings &#8211; Template Literals
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7227 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7227" data-ld-expand-id="ld-expand-7227" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/40-strings-task-html-scraping/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				40 &#8211; Strings &#8211; Task &#8211; HTML scraping
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7373 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7373" data-ld-expand-id="ld-expand-7373" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/41-npm-install-and-publish-packages/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				41 &#8211; NPM &#8211; install and publish packages
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7375 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7375" data-ld-expand-id="ld-expand-7375" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/42-modules-ecmascript-modules-esm/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				42 &#8211; Modules &#8211; ECMAScript Modules (ESM)
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7377 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7377" data-ld-expand-id="ld-expand-7377" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/43-dates-unix-epoch-iso-8601/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				43 &#8211; Dates &#8211; Unix Epoch &#8211; ISO 8601
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7379 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7379" data-ld-expand-id="ld-expand-7379" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/44-dates-javascript-date-object/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				44 &#8211; Dates &#8211; JavaScript Date Object
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7381 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7381" data-ld-expand-id="ld-expand-7381" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/45-dates-luxon-module/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				45 &#8211; Dates &#8211; Luxon module
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7390 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7390" data-ld-expand-id="ld-expand-7390" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/46-hands-on-exercise-02-foreach-ternary-operator/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				46 &#8211;  Hands-on Exercise 02 &#8211; forEach &#8211; Ternary Operator
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7394 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7394" data-ld-expand-id="ld-expand-7394" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/47-statements-while/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				47 &#8211; Statements &#8211; While
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7446 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7446" data-ld-expand-id="ld-expand-7446" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/48-asynchronous-event-loop-callback-nexttick/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				48 &#8211; Asynchronous &#8211; Event Loop &#8211; Callback &#8211; nextTick
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7448 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7448" data-ld-expand-id="ld-expand-7448" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/49-asynchronous-event-loop-queues-callbacks-priorities/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				49 &#8211; Asynchronous &#8211; Event Loop Queues &#8211; Callbacks Priorities
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7450 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7450" data-ld-expand-id="ld-expand-7450" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/50-asynchronous-callbacks-priorities-explanation/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				50 &#8211; Asynchronous &#8211; Callbacks Priorities Explanation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7459 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7459" data-ld-expand-id="ld-expand-7459" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/51-recursion-introduction/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				51 &#8211; Recursion Introduction
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7464 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7464" data-ld-expand-id="ld-expand-7464" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/52-asynchronous-flow-control-patterns-and-more/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				52 &#8211; Asynchronous &#8211; Flow Control Patterns .. and more.
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7595 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7595" data-ld-expand-id="ld-expand-7595" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/53-memory-management-stack-and-heap/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				53 &#8211; Memory Management &#8211; Stack and Heap
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7597 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7597" data-ld-expand-id="ld-expand-7597" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/54-memory-management-v8-resident-set/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				54 &#8211; Memory Management &#8211; V8 Resident Set
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7599 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7599" data-ld-expand-id="ld-expand-7599" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/55-memory-management-v8-garbage-collector/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				55 &#8211; Memory Management &#8211; V8 Garbage Collector
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7606 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7606" data-ld-expand-id="ld-expand-7606" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/56-switch-statement/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				56 &#8211; Switch Statement
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7614 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7614" data-ld-expand-id="ld-expand-7614" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/57-spread-operator/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				57 &#8211; Spread Operator
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7616 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7616" data-ld-expand-id="ld-expand-7616" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/58-passing-by-reference-passing-by-value/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				58 &#8211; Passing by Reference &#8211; Passing by Value
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7658 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7658" data-ld-expand-id="ld-expand-7658" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/59-shallow-copy-deep-copy/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				59 &#8211; Shallow Copy &#8211; Deep Copy
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7661 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7661" data-ld-expand-id="ld-expand-7661" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/60-arrays-iterative-methods/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				60 &#8211; Array&#8217;s Iterative Methods
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7665 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7665" data-ld-expand-id="ld-expand-7665" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/61-json-ecma-404/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				61 &#8211; JSON, ECMA 404
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7753 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7753" data-ld-expand-id="ld-expand-7753" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/62-errors/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				62 &#8211; Errors
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7755 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7755" data-ld-expand-id="ld-expand-7755" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/63-eventemitter/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				63 &#8211; EventEmitter
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7757 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7757" data-ld-expand-id="ld-expand-7757" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/64-promise-convert-callbacks-to-promises/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				64 &#8211; Promise &#8211; Convert Callbacks to Promises
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7760 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7760" data-ld-expand-id="ld-expand-7760" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/65-promise-create-long-chain-of-promises/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				65 &#8211; Promise &#8211; Create Long Chain of Promises
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-7762 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-7762" data-ld-expand-id="ld-expand-7762" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/66-promise-promisified-modules-async-await/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				66 &#8211; Promise &#8211; Promisified modules &#8211; Async &#038; Await
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8278 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8278" data-ld-expand-id="ld-expand-8278" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/67-files-read-write/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				67 &#8211; Files &#8211; Read &#038; Write
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8280 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8280" data-ld-expand-id="ld-expand-8280" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/68-files-append-read-stream/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				68 &#8211; Files &#8211; Append &#8211; Read Stream
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8282 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8282" data-ld-expand-id="ld-expand-8282" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/69-files-existence-copy-directories/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				69 &#8211; Files &#8211; Existence &#8211; Copy &#8211; Directories
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8296 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8296" data-ld-expand-id="ld-expand-8296" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/70-timers/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				70 &#8211; Timers
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8603 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8603" data-ld-expand-id="ld-expand-8603" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/71-oop-01/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				71 &#8211; OOP 01
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8605 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8605" data-ld-expand-id="ld-expand-8605" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/72-oop-02/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				72 &#8211; OOP 02
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8607 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8607" data-ld-expand-id="ld-expand-8607" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/73-oop-03/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				73 &#8211; OOP 03
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8627 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8627" data-ld-expand-id="ld-expand-8627" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/74-closure/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				74 &#8211; Closure
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8670 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8670" data-ld-expand-id="ld-expand-8670" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/75-regular-expression-introduction-character-classes/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				75 &#8211; Regular Expression &#8211; Introduction &#038; Character Classes
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8672 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8672" data-ld-expand-id="ld-expand-8672" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/76-regular-expression-more-character-classes/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				76 &#8211; Regular Expression &#8211; More Character Classes
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8674 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8674" data-ld-expand-id="ld-expand-8674" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/77-regular-expression-quantifiers/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				77 &#8211; Regular Expression &#8211; Quantifiers
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8676 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8676" data-ld-expand-id="ld-expand-8676" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/78-regular-expression-grouping/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				78 &#8211; Regular Expression &#8211; Grouping
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8678 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8678" data-ld-expand-id="ld-expand-8678" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/79-regular-expression-input-boundary-assertions/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				79 &#8211; Regular Expression &#8211; Input Boundary Assertions
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8680 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8680" data-ld-expand-id="ld-expand-8680" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/80-regular-expression-lookahead-lookbehind/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				80 &#8211; Regular Expression &#8211; Lookahead &#8211; Lookbehind
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-8682 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-8682" data-ld-expand-id="ld-expand-8682" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/81-regular-expression-how-to-write-a-complex-expression/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				81 &#8211; Regular Expression &#8211; How to write a complex expression
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-9358 is_not_sample learndash-not-available learndash-incomplete" id="ld-expand-9358" data-ld-expand-id="ld-expand-9358" data-ld-tooltip="You don&#039;t currently have access to this content">
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/watch-list-osi-model-2/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				Watch List – OSI Model
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
		</div> <!--/.ld-item-list-items-->

		</div> <!--/.ld-item-list-->

			</div> <!--/.learndash-wrapper-->
		</div></div></div>
</div></div><!-- .entry-content -->
	</div>
</article><!-- #post-4467 -->

			</div>
					</main><!-- #main -->
			</div>
</div><!-- #primary -->
	</div><!-- #inner-wrap -->
	<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="site-footer-wrap">
		<div class="site-top-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default" data-section="kadence_customizer_footer_top">
	<div class="site-footer-row-container-inner">
				<div class="site-container">
			<div class="site-top-footer-inner-wrap site-footer-row site-footer-row-columns-2 site-footer-row-column-layout-right-golden site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-column ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
									<div class="site-footer-top-section-1 site-footer-section footer-section-inner-items-2">
						<div class="footer-widget-area widget-area site-footer-focus-item footer-widget4 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="sidebar-widgets-footer4">
	<div class="footer-widget-area-inner site-info-inner">
		<section id="custom_html-1" class="widget_text widget widget_custom_html"><h2 class="widget-title">Cloud Native Base Camp</h2><div class="textwidget custom-html-widget">the missing courses for developers and devops heros. Provided by Metwally Labs, LLC.</div></section>	</div>
</div><!-- .footer-widget4 -->
<div class="footer-widget-area widget-area site-footer-focus-item footer-social content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="kadence_customizer_footer_social">
	<div class="footer-widget-area-inner footer-social-inner">
		<div class="footer-social-wrap"><div class="footer-social-inner-wrap element-social-inner-wrap social-show-label-false social-style-filled"><a href="https://www.facebook.com/metwallylabs/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"  class="social-button footer-social-item social-link-facebook"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-facebook-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Facebook</title><path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
				</svg></span></a><a href="https://twitter.com/metwallylabs" aria-label="Twitter" target="_blank" rel="noopener noreferrer"  class="social-button footer-social-item social-link-twitter"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-twitter-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Twitter</title><path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
				</svg></span></a><a href="https://www.facebook.com/groups/aws.egypt.club" aria-label="Facebook Group" target="_blank" rel="noopener noreferrer"  class="social-button footer-social-item social-link-facebook_group"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-facebook-group-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28"><title>Facebook Group</title><path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path>
				</svg></span></a></div></div>	</div>
</div><!-- data-section="footer_social" -->
					</div>
										<div class="site-footer-top-section-2 site-footer-section footer-section-inner-items-1">
						
<div class="footer-widget-area site-info site-footer-focus-item content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="kadence_customizer_footer_html">
	<div class="footer-widget-area-inner site-info-inner">
		<div class="footer-html inner-link-style-normal"><div class="footer-html-inner"><p>المحتوى محمي بقوانين حماية الملكية الفكرية واى تحميل او مشاركة للمحتوى تعتبر سرقة بموجب القانون</p>
</div></div>	</div>
</div><!-- .site-info -->
					</div>
								</div>
		</div>
	</div>
</div>
	</div>
</footer><!-- #colophon -->

</div><!-- #wrapper -->

			<script>document.documentElement.style.setProperty('--scrollbar-offset', window.innerWidth - document.documentElement.clientWidth + 'px' );</script>
						<!-- Facebook Pixel Code -->
			<noscript>
				<img
					height="1"
					width="1"
					style="display:none"
					alt="fbpx"
					src="https://www.facebook.com/tr?id=2516399868556194&ev=PageView&noscript=1"
				/>
			</noscript>
			<!-- End Facebook Pixel Code -->
				<script type="text/javascript">
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	</script>
	<div class="learndash-wrapper learndash-wrapper-login-modal ld-modal-closed">
<div class="ld-modal ld-login-modal">

	<span class="ld-modal-closer ld-icon ld-icon-delete"></span>

	<div class="ld-login-modal-login">
		<div class="ld-login-modal-wrapper">
						<div class="ld-modal-heading">
				Login			</div>
							<div class="ld-modal-text">
					Accessing this course requires a login. Please enter your credentials below!				</div>
							<div class="ld-login-modal-form">

				<form name="loginform" id="loginform" action="https://cloudnativebasecamp.com/bab/" method="post"><input id="learndash-login-form" type="hidden" name="learndash-login-form" value="253130019b" /><p class="login-username">
				<label for="user_login">Username or Email Address</label>
				<input type="text" name="log" id="user_login" autocomplete="username" class="input" value="" size="20" />
			</p><p class="login-password">
				<label for="user_pass">Password</label>
				<input type="password" name="pwd" id="user_pass" autocomplete="current-password" spellcheck="false" class="input" value="" size="20" />
			</p><p class="login-remember"><label><input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Remember Me</label></p><p class="login-submit">
				<input type="submit" name="wp-submit" id="wp-submit" class="button button-primary" value="Log In" />
				<input type="hidden" name="redirect_to" value="/courses/node-js-from-scratch/" />
			</p></form>				<a class="ld-forgot-password-link" href="https://cloudnativebasecamp.com/my-account/lost-password/">Lost Your Password?</a>

									<div class="ld-login-modal-branding">
						<img src="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname.png" alt="">
					</div>
					
			</div> <!--/.ld-login-modal-form-->
		</div> <!--/.ld-login-modal-wrapper-->
	</div> <!--/.ld-login-modal-login-->

	
</div> <!--/.ld-modal-->
</div>	<div id="mobile-drawer" class="popup-drawer popup-drawer-layout-sidepanel popup-drawer-animation-fade popup-drawer-side-right" data-drawer-target-string="#mobile-drawer"
			>
		<div class="drawer-overlay" data-drawer-target-string="#mobile-drawer"></div>
		<div class="drawer-inner">
						<div class="drawer-header">
				<button class="menu-toggle-close drawer-toggle" aria-label="Close menu"  data-toggle-target="#mobile-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".menu-toggle-open"
							>
					<span class="toggle-close-bar"></span>
					<span class="toggle-close-bar"></span>
				</button>
			</div>
			<div class="drawer-content mobile-drawer-content content-align-left content-valign-top">
								<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_mobile_html">
	<div class="mobile-html inner-link-style-normal"><div class="mobile-html-inner"><div class="met_user_info"></div>
</div></div></div><!-- data-section="mobile_html" -->
<div class="site-header-item site-header-focus-item site-header-item-mobile-navigation mobile-navigation-layout-stretch-false" data-section="kadence_customizer_mobile_navigation">
		<nav id="mobile-site-navigation" class="mobile-navigation drawer-navigation drawer-navigation-parent-toggle-false" role="navigation" aria-label="Primary Mobile Navigation">
				<div class="mobile-menu-container drawer-menu-container">
			<ul id="mobile-menu" class="menu has-collapse-sub-nav"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-8461"><a href="https://cloudnativebasecamp.com/">الرئيسية</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8625"><a href="https://cloudnativebasecamp.com/plans/">خطط الأشتراك</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-629"><a href="https://cloudnativebasecamp.com/courseslist/">الكورسات</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8345"><a href="https://cloudnativebasecamp.com/blog/">Blog</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-898"><a href="https://cloudnativebasecamp.com/contact/">المساعدة</a></li>
<li class="ld-button met-link menu-item menu-item-type-custom menu-item-object-custom menu-item-634"><a href="#login">دخول</a></li>
</ul>		</div>
	</nav><!-- #site-navigation -->
	</div><!-- data-section="mobile_navigation" -->
<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_mobile_button">
	<div class="mobile-header-button-wrap vs-logged-in-false"><div class="mobile-header-button-inner-wrap"><a href="http://cloudnativebasecamp.com/cart/?add-to-cart=15" target="_self" class="button mobile-header-button button-size-medium button-style-filled">اشترك</a></div></div></div><!-- data-section="mobile_button" -->
							</div>
		</div>
	</div>
	<link rel='stylesheet' id='jetpack-responsive-videos-css' href='https://cloudnativebasecamp.com/wp-content/plugins/jetpack/_inc/build/theme-tools/responsive-videos/responsive-videos.css?minify=false&#038;ver=68f96734b25612a82f88' media='all' />
<script src="//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_pager.min.js?ver=4.3.1.3" id="learndash_pager_js-js"></script>
<script id="learndash_template_script_js-js-extra">
var sfwd_data = {"json":"{\"ajaxurl\":\"https:\\\/\\\/cloudnativebasecamp.com\\\/wp-admin\\\/admin-ajax.php\"}"};
</script>
<script src="//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_template_script.min.js?ver=4.3.1.3" id="learndash_template_script_js-js"></script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.7.8.0" id="jquery-blockui-js"></script>
<script id="wc-add-to-cart-js-extra">
var wc_add_to_cart_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/cloudnativebasecamp.com\/contact\/","is_cart":"","cart_redirect_after_add":"no"};
</script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=7.8.0" id="wc-add-to-cart-js"></script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.7.8.0" id="js-cookie-js"></script>
<script id="woocommerce-js-extra">
var woocommerce_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%"};
</script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=7.8.0" id="woocommerce-js"></script>
<script id="kadence-navigation-js-extra">
var kadenceConfig = {"screenReader":{"expand":"Child menu","expandOf":"Child menu of","collapse":"Child menu","collapseOf":"Child menu of"},"breakPoints":{"desktop":"1024","tablet":768},"scrollOffset":"0"};
</script>
<script src="https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/js/navigation.min.js?ver=1.2.7" id="kadence-navigation-js" async></script>
<script id="learndash-front-js-extra">
var ldVars = {"postID":"4467","videoReqMsg":"You must watch the video before accessing this content","ajaxurl":"https:\/\/cloudnativebasecamp.com\/wp-admin\/admin-ajax.php"};
</script>
<script src="//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/ld30/assets/js/learndash.js?ver=4.3.1.3" id="learndash-front-js"></script>
<script src="https://stats.wp.com/e-202441.js" id="jetpack-stats-js" data-wp-strategy="defer"></script>
<script id="jetpack-stats-js-after">
_stq = window._stq || [];
_stq.push([ "view", JSON.parse("{\"v\":\"ext\",\"blog\":\"210819793\",\"post\":\"4467\",\"tz\":\"2\",\"srv\":\"cloudnativebasecamp.com\",\"j\":\"1:13.6\"}") ]);
_stq.push([ "clickTrackerInit", "210819793", "4467" ]);
</script>
<script src="https://cloudnativebasecamp.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2" id="wp-polyfill-inert-js"></script>
<script src="https://cloudnativebasecamp.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0" id="regenerator-runtime-js"></script>
<script src="https://cloudnativebasecamp.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
<script src="https://cloudnativebasecamp.com/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1" id="wp-hooks-js"></script>
<script src="https://cloudnativebasecamp.com/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef" id="wp-i18n-js"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/jetpack/_inc/build/theme-tools/responsive-videos/responsive-videos.min.js?minify=false&amp;ver=68f96734b25612a82f88" id="jetpack-responsive-videos-js"></script>
</body>
</html>
`;

const funs = require("./replaceSymbol.js"); //cjs

/**
1- parse html
starting loop 
finding starting index ld-item-title 
finding end index </div>
estract HTMl
clean the substring by changing the unicode of (-) with anther loop 
end loop

 */

let finalArr = [];
let startingIndex = -1;
let endingIndex = -1;
// starting loop to find starting index start with "ld-item-title"
for (let i = 0; i < html.length; i++) {
  startingIndex = html.indexOf('"ld-item-title"', i); // here we use i to search for the next id after find the  first
  if (startingIndex === -1) break;
  i = startingIndex; // here will make the ending index to start searching from the staring index after finding the id
  endingIndex = html.indexOf("</div>", i);
  if (endingIndex === -1) break;
  i = endingIndex;

  //===========================finding the index=====================
  let item = html.substring(startingIndex, endingIndex);
  //output
  /**
   ">ld-item-title">
				01 &#8211; Prepare Development Environment 
  */
  //=============================replace that text ['"ld-item-title">']=================
  item = item.replace('"ld-item-title">', "");
  //o/p
  //
  //				01 &#8211; Prepare Development Environment
  //==============================remove empty spaces===================================
  item = item.trim();
  //
  //                01 &#8211; Prepare Development Environment
  //=============================if the text was in new line ==============================
  //   item = item.replace("\n", "");
  //   console.log(item);``
  //   output
  //                 01 &#8211; Prepare Development Environment
  // ==========================================if there ara spaces n code ============================
  //   item = item.replaceAll("  ", "");
  //   01 &#8211; Prepare Development Environment
  //   =====================================================================
  //out put  ==>
  //   console.log(item);
  //01 &#8211; Prepare Development Environment
  //   ========================================================================== removing the  unicode
  let fun = funs.replaceSymbol(item);
  finalArr.push(fun);
}
// console.log(finalArr);

let arr = [];
for (let i = 0; i < finalArr.length; i++) {
  arr.push("[" + finalArr[i] + "]");
}
console.log(arr);
// final output

/**
 [
  '[01 – Prepare Development Environment]',
  '[02 – Node.js application files organization]',
  '[03 – Variables]',
  '[04 – Variables – hands-on]',
  '[05 – Operators – Arithmetic]',
  '[06 – Operators – Arithmetic – Priorities (order of operations)]',
  '[07 – Operators – Arithmetic – hands-on]',
  '[08 – Operators – Assignments]',
  '[Exercises – 01]',
  '[09 – Operators – Comparison]',
  '[Exercises – 02]',
  '[10 – Operators – Logical]',
  '[11 – Statements – if]',
  '[12 – Scopes – const – let]',
  '[13 – var global scope accessibility]',
  '[14 – var block and function scope accessibility]',
  '[15 – const scopes accessibility]',
  '[16 – let scopes accessibility]',
  '[17 – Statements – for]',
  '[18 – Hands-on Exercises]',
  '[19 – Hoisting]',
  '[20 – Lexical Grammar]',
  '[21 – Array 01 – Introduction]',
  '[22 – Regular Function]',
  '[23 – Array 02 – Some Built-in Functions]',
  '[24 – Object]',
  '[25 – Object – Constructor Function]',
  '[26 – Modules – CommonJS (CJS)]',
  '[27 – Primitive Data Types – undefined, null]',
  '[28 – Data Types – numbers – IEEE 754]',
  '[29 – Numbers – Coercion – basics]',
  '[30 – Numbers – Number object]',
  '[31 – Numbers – Math object]',
  '[32 – Create and use your first module.]',
  '[33 – The Compiler and the Interpreter]',
  '[34 – The tale of JavaScript and ECMAscript]',
  '[35 – V8 engine]',
  '[36 – Strings – UTF-16]',
  '[37 – Strings – important functions – part 01]',
  '[38 – Strings – important functions – part 02]',
  '[39 – Strings – Template Literals]',
  '[40 – Strings – Task – HTML scraping]',
  '[41 – NPM &#8211; install and publish packages]',
  '[42 – Modules – ECMAScript Modules (ESM)]',
  '[43 – Dates – Unix Epoch – ISO 8601]',
  '[44 – Dates – JavaScript Date Object]',
  '[45 – Dates – Luxon module]',
  '[46 –  Hands-on Exercise 02 – forEach – Ternary Operator]',
  '[47 – Statements – While]',
  '[48 – Asynchronous – Event Loop – Callback – nextTick]',
  '[49 – Asynchronous – Event Loop Queues – Callbacks Priorities]',
  '[50 – Asynchronous – Callbacks Priorities Explanation]',
  '[51 – Recursion Introduction]',
  '[52 – Asynchronous – Flow Control Patterns .. and more.]',
  '[53 – Memory Management – Stack and Heap]',
  '[54 – Memory Management – V8 Resident Set]',
  '[55 – Memory Management – V8 Garbage Collector]',
  '[56 – Switch Statement]',
  '[57 – Spread Operator]',
  '[58 – Passing by Reference – Passing by Value]',
  '[59 – Shallow Copy – Deep Copy]',
  '[60 – Array&#8217;s Iterative Methods]',
  '[61 – JSON, ECMA 404]',
  '[62 – Errors]',
  '[63 – EventEmitter]',
  '[64 – Promise – Convert Callbacks to Promises]',
  '[65 – Promise – Create Long Chain of Promises]',
  '[66 – Promise – Promisified modules – Async &#038; Await]',
  '[67 – Files – Read &#038; Write]',
  '[68 – Files – Append – Read Stream]',
  '[69 – Files – Existence – Copy – Directories]',
  '[70 – Timers]',
  '[71 – OOP 01]',
  '[72 – OOP 02]',
  '[73 – OOP 03]',
  '[74 – Closure]',
  '[75 – Regular Expression – Introduction &#038; Character Classes]',
  '[76 – Regular Expression – More Character Classes]',
  '[77 – Regular Expression – Quantifiers]',
  '[78 – Regular Expression – Grouping]',
  '[79 – Regular Expression – Input Boundary Assertions]',
  '[80 – Regular Expression – Lookahead – Lookbehind]',
  '[81 – Regular Expression – How to write a complex expression]',
  '[Watch List – OSI Model]'
]
 */