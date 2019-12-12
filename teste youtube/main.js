// $(document).ready(function () {

//     // var searchField = $("#query");
//     // var q = $("#query").val();
//     // var playlistId, nextPageToken, prevPageToken;
//     // $("#search-form").submit(function (e) {
//     //     e.preventDefault();
//     //     //console.log("teste");
//     //     $("#results").html("");
//     //     requestVideoPlaylist(playlistId, prevPageToken)

//     // });

//     // function nextPage() {
//     //     requestVideoPlaylist(playlistId, nextPageToken);
//     // }

//     // // Retrieve the previous page of videos in the playlist.
//     // function previousPage() {
//     //     requestVideoPlaylist(playlistId, prevPageToken);
//     // }


//     // function requestVideoPlaylist(playlistId, pageToken) {
//     //     var options = {
//     //         part: 'snippet, id',
//     //         q: q,
//     //         playlistId: playlistId,
//     //         maxResults: 3,
//     //         type: 'playlist',
//     //         key: 'AIzaSyBhUf159hptQrfYcXslA-R6aIiUEcq9KzY'
//     //     };

//     //     if (pageToken !== null) {
//     //         options.pageToken = pageToken;
//     //     }
//     //     console.log(options)
//     //     $.get("https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBhUf159hptQrfYcXslA-R6aIiUEcq9KzY", options,
//     //         function (data) {
//     //             // console.log(data);
//     //             nextPageToken = data.nextPageToken;
//     //             prevPageToken = data.prevPageToken;
//     //             console.log(nextPageToken);

//     //             nextPageToken = data.nextPageToken;
//     //             var nextVis = nextPageToken ? 'visible' : 'hidden';
//     //             $('#next-button').css('visibility', nextVis);
//     //             prevPageToken = data.prevPageToken
//     //             var prevVis = prevPageToken ? 'visible' : 'hidden';
//     //             $('#prev-button').css('visibility', prevVis);

//     //             var playlistItems = data.items;
//     //             if (playlistItems) {
//     //                 $.each(playlistItems, function (index, item) {
//     //                     displayResult(item);
//     //                 });
//     //             } else {
//     //                 $('#video-container').html('Sorry you have no uploaded videos');
//     //             }

//     //         });
//     //     // Create a listing for a video.
//     //     function displayResult(videoSnippet) {
//     //         var title = videoSnippet.snippet.title;
//     //         var videoId = videoSnippet.id.playlistId;
//     //         $('#video-container').append('<p>' + title + ' - ' + videoId + '</p>' + '<img src=\"' + videoSnippet.snippet.thumbnails.medium.url + '\">');
//     //     }
//     // }




//     // $(function () {
//     //     $.ajax({
//     //         url: 'https://www.googleapis.com/youtube/v3/videos',
//     //         method: 'get',
//     //         dataType: 'json',
//     //         data: {
//     //             part: 'snippet, id',
//     //             key: 'AIzaSyBhUf159hptQrfYcXslA-R6aIiUEcq9KzY',
//     //             id: 'UCOBIOdl2QBI6EEOLdndpj9Q',
//     //         },
//     //         success: function (response) {
//     //             console.log(response);
//     //             $.each(response.items, function (index, iten) {
//     //                 $('.content-fluid').append(' <div class="row">< div class= "col"><div class="card"><div class= "card-image" ><img src="' + iten.snippet.thumbnails.high.url + '"></div><div class="card-content"><span class="card-title">' + iten.snippet.title + '</span><p>' + iten.snippet.description + '</p></div><div class="card-action"><a class="btn" href="#!">Ver mais</a></div></div ></div ></div > ')
//     //             })

//     //         },
//     //         error: function (response) {
//     //             console.log(error);

//     //         }
//     //     })
//     // })


//     $(document).ready(function () {

//         var channelName = 'Aqui vai o nome do canal';
//         var vidWidth = 250; //largura de cada vídeos
//         var vidHeight = 187; //altura de cada vídeos
//         var vidResults = 10; //qtd de vídeos que vai aparecer na galeria max 50

//         $(document).ready(function () {
//             $.get(
//                 "https://www.googleapis.com/youtube/v3/channels", {
//                 part: 'contentDetails',
//                 forUsername: channelName,
//                 key: 'AIzaSyBhUf159hptQrfYcXslA-R6aIiUEcq9KzY'
//             },//altere para sua chave
//                 function (data) {
//                     $.each(data.items, function (i, item) {
//                         console.log(item);
//                         pid = item.contentDetails.relatedPlaylists.uploads;
//                         getVids(pid);
//                     })
//                 }
//             );

//             function getVids(pid) {
//                 $.get(
//                     "https://www.googleapis.com/youtube/v3/playlistItems", {
//                     part: 'snippet',
//                     maxResults: vidResults,
//                     playlistId: pid,
//                     key: 'AIzaSyBhUf159hptQrfYcXslA-R6aIiUEcq9KzY'
//                 },//altere para sua chave
//                     function (data) {
//                         $.each(data.items, function (i, item) {
//                             console.log(item);
//                             videTitle = item.snippet.title;
//                             videoId = item.snippet.resourceId.videoId;
//                             output = '<div><iframe width="' + vidWidth + '" height="' + vidHeight + '" src=\"https://www.youtube.com/embed/' + videoId + '\"></iframe></div>';
//                             //Append to resultes listStyleType
//                             $('#results').append(output);
//                         })
//                     }
//                 );
//             }
//         });
//     });

// });






// $("#content").click(function (e) {
//     $(this).children('a').html('<div class="vid"><iframe width="420" height="315" src="https://www.youtube.com/embed/' + $(this).attr('id') + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
//     return false;
//     e.preventDefault();
// });

// //For playlist
// $("#container").click(function (e) {
//     $(this).children('a').html('<div class="vid"><iframe width="420" height="315" src="https://www.youtube.com/embed/videoseries?list=' + $(this).attr('id') + '&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
//     return false;
//     e.preventDefault();
// });