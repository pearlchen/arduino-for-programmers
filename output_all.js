var _ 		= require('underscore');
var markx 	= require('markx');
var fs 		= require('fs');

// all the Markdown pages (w/o the .md extension)
var outline = fs.readFileSync('outline.json', 'utf8');
var pages = JSON.parse(outline);

var inputFolder = __dirname+'/md/';
var outputFolder = __dirname+'/pres/';

// create the html links for all the header nav
var nav = _.reduce(pages, function(nav, page){ 
	if ( page.file != undefined ) {
		return nav + '<a href="'+page.file+'.html">'+page.title+'</a>'; 
	}else{
		return nav + '<br /><strong>' + page.title + '</strong>';
	}
},'');

// output HTML from Markdown
var prev;
var next;
var currentFolder = '';
_.each(pages, function(page, i){

	if ( pages[i+1] ) {
		next = pages[i+1];
		if ( typeof next.file === "undefined" ) {
			next = pages[i+2];
			console.log("skipping next "  + next.file );
		}
		
	}else{
		console.log("skipping next AT END"  + next.file );
		next = null;
	}

	if (page.folder != undefined) {

		currentFolder = page.folder;

	}else{

		//update nav
		updatedNav = nav.replace('<a href="'+page.file+'.html">', '<a href="'+page.file+'.html" class="current">');
		
		markx({
		    input: inputFolder + currentFolder + '/' + page.file + '.md',
		    template: 'template.html',
		    highlight: true,
		    data: { nav: updatedNav, 
		    		forward: ( next ? 'Next section: <a href="'+next.file+'.html" class="button">'+next.title+' &raquo;</a>' : '' ), 
		    		previous: ( prev ? '<a href="'+prev.file+'.html">&laquo; '+prev.title+'</a>' : '' ) }
		}, function(err, html) {
			fs.writeFile( outputFolder + page.file + '.html', html, function(err) {
			    if(err) {
			        console.log('[ERROR] ' + page.file + ': ' + err);
			    } else {
			        console.log('Saved: ' + page.file);
			    }
			}); 
		});

		prev = page;

	}

});