$(document).ready(function() {

    var myPlayer = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_2",
		cssSelectorAncestor: "#jp_container_2"
	}, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "Catch & Release (Deepend Remix) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "Of All Things (feat. Too $hort) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "Order More (feat. Starrah) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "Drifting (feat. Chris Brown & Tory Lanez) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
    ],
     {
       
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        preload: 'auto',
		preload: 'metadata',
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
    });

	var $jp = $('#jquery_jplayer_2');
	   $jp.on($.jPlayer.event.play,  function(e){
	       $('#current-track1').empty();
		   $('#current-track1').append(myPlayer.playlist[myPlayer.current].title);
	   });

});


$(document).ready(function(){

	var myPlayer = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_3",
		cssSelectorAncestor: "#jp_container_3"
	}, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "Jenna Kevinsons / Bring Me To Life <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        }, {
            title: "Of All Things (feat. Too $hort) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        }, {
            title: "Order More (feat. Starrah) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        }, {
            title: "Drifting (feat. Chris Brown & Tory Lanez) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        },
    ], {
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
        size: { width: "100%", height: "auto" },
	});
    
	   var $jp = $('#jquery_jplayer_3');
	   $jp.on($.jPlayer.event.play,  function(e){
	       $('#current-track').empty();
		   $('#current-track').append(myPlayer.playlist[myPlayer.current].title);
		   $('#get-track').empty();
		   $('#get-track').append("Current track", myPlayer.current);
	   });
    
});

$(document).ready(function(){

	var myPlayer = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_9",
		cssSelectorAncestor: "#jp_container_9"
	}, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "Jenna Kevinsons / Bring Me To Life <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        }, {
            title: "Of All Things (feat. Too $hort) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        }, {
            title: "Order More (feat. Starrah) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        }, {
            title: "Drifting (feat. Chris Brown & Tory Lanez) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        },
    ], {
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
        size: { width: "100%", height: "auto" },
	});
    
	   var $jp = $('#jquery_jplayer_9');
	   $jp.on($.jPlayer.event.play,  function(e){
	       $('#current-track9').empty();
		   $('#current-track9').append(myPlayer.playlist[myPlayer.current].title);
		   $('#get-track9').empty();
		   $('#get-track9').append("Current track", myPlayer.current);
	   });
    
});

$(document).ready(function(){

	var myPlayer = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_10",
		cssSelectorAncestor: "#jp_container_10"
	}, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "Jenna Kevinsons / Bring Me To Life <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        }, {
            title: "Of All Things (feat. Too $hort) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        }, {
            title: "Order More (feat. Starrah) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        }, {
            title: "Drifting (feat. Chris Brown & Tory Lanez) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/jplayer-poster-1.jpg",
        },
    ], {
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
        size: { width: "100%", height: "auto" },
	});
    
	   var $jp = $('#jquery_jplayer_10');
	   $jp.on($.jPlayer.event.play,  function(e){
	       $('#current-track10').empty();
		   $('#current-track10').append(myPlayer.playlist[myPlayer.current].title);
		   $('#get-track10').empty();
		   $('#get-track10').append("Current track", myPlayer.current);
	   });
    
});

$(document).ready(function() {

    var myPlayer = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_4",
		cssSelectorAncestor: "#jp_container_4"
	}, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "Catch & Release (Deepend Remix) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "Of All Things (feat. Too $hort) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "Order More (feat. Starrah) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "Drifting (feat. Chris Brown & Tory Lanez) <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
    ],
     {
       
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        preload: 'auto',
		preload: 'metadata',
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
    });

	var $jp = $('#jquery_jplayer_4');
	   $jp.on($.jPlayer.event.play,  function(e){
	       $('#current-track2').empty();
		   $('#current-track2').append(myPlayer.playlist[myPlayer.current].title);
	   });

});


$(document).ready(function() {

    var myPlayer = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_5",
		cssSelectorAncestor: "#jp_container_5"
	}, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "Dangerous (feat. Sam Martin) [Robin Schulz Remix] <span>03:08</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "Shot me Down (feat. Skylar Grey) [Radio Edit] <span>02:56</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-2.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "I'll Keep Loving you (feat. Birdy & Jaymes Young) <span>03:12</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "The Hum (Short Edit) <span>03:37</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-2.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "Hey Mama (feat. Nicki Minaj, Bebe Rexha & Afrojack) <span>03:49</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-2.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "The Entertainer (Sample) by Stephanie Quinn <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-2.jpg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        },
    ],
     {
       
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        preload: 'auto',
		preload: 'metadata',
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
        size: { width: "89px", height: "84px" },
    });

	var $jp = $('#jquery_jplayer_5');
	   $jp.on($.jPlayer.event.play,  function(e){
	       $('#current-track5').empty();
		   $('#current-track5').append(myPlayer.playlist[myPlayer.current].title);
	   });

});

$(document).ready(function() {

    var myPlayer = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_6",
		cssSelectorAncestor: "#jp_container_6"
	}, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "California Dreamin <span>03:08</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
        }, {
            title: "Pump It Up <span>02:56</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-2.jpg",
        }, {
            title: "Kings & Queens <span>03:12</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
        }, {
            title: "The Hum (Short Edit) <span>03:37</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-2.jpg",
        }, {
            title: "Wake the Giant <span>03:49</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
        }, {
            title: "Kings & Queens <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-2.jpg",
        }, {
            title: "California Dreamin <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-1.jpg",
        }, {
            title: "Kings & Queens <span>05:44</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "extra-images/album-player-2.jpg",
        },
    ],
     {
       
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        preload: 'auto',
		preload: 'metadata',
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
        size: { width: "89px", height: "84px" },
    });

	var $jp = $('#jquery_jplayer_6');
	   $jp.on($.jPlayer.event.play,  function(e){
	       $('#current-track6').empty();
		   $('#current-track6').append(myPlayer.playlist[myPlayer.current].title);
	   });

});

// Video PLayer
$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"Big Buck Bunny Trailer",
			artist:"Blender Foundation",
			m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
			ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
			webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
			poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
		},
		{
			title:"Finding Nemo Teaser",
			artist:"Pixar",
			m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
			ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
			webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Incredibles Teaser",
			artist:"Pixar",
			m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
			ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
			webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
			poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
		},
		{
			title:"Big Buck Bunny Trailer",
			artist:"Blender Foundation",
			m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
			ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
			webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
			poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
		},
		{
			title:"Finding Nemo Teaser",
			artist:"Pixar",
			m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
			ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
			webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Incredibles Teaser",
			artist:"Pixar",
			m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
			ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
			webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
			poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
		},
	], {
		swfPath: "images/jplayer.swf",
		supplied: "webmv, ogv, m4v",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		loop: true,
        wmode: "window",
        preload: 'auto',
		preload: 'metadata',
        audioFullScreen: true,
        size: { width: "100%", height: "436px" },
	});

});