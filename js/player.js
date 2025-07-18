function vTurbChangePlayer() {
    !vTurbOriginalPlayerIsMobile && vTurbDeviceIsMobile || vTurbOriginalPlayerIsMobile && !vTurbDeviceIsMobile ? (vTurbPlayer = vTurbAlternativePlayer, vTurbSrcId = vTurbPlayer.id) : vTurbPlayer = vTurbOriginalPlayer;
    var M = document.getElementById(`vid_${vTurbOriginalPlayer.id}`);
    M && M.remove();
    var I = document.getElementById(`scr_${vTurbOriginalPlayer.id}`);
    I && I.setAttribute("id", `scr_${vTurbSrcId}`)
}

function vTurbCreatSmartvdsElements() {
    var M, I, e;
    "1.7.9" === vTurbPlayer.version ? document.getElementById(`vid_${vTurbPlayer.id}`) || (window, M = document, I = M.getElementById(`scr_${vTurbSrcId}`), (e = M.createElement("DIV")).id = `vid_${vTurbPlayer.id}`, I.parentElement.insertBefore(e, I)) : (document.getElementById(`vid_${vTurbPlayer.id}`) || function(M, I, e) {
        I = M.getElementById(`scr_${vTurbSrcId}`), (e = M.createElement("DIV")).id = `vid_${vTurbPlayer.id}`, e.style.position = "relative", e.style.width = "100%", e.style.padding = `${vTurbPlayer.video_aspect_ratio}% 0 0`, I.parentElement.insertBefore(e, I)
    }(document), document.getElementById(`thumb_${vTurbPlayer.id}`) || function(M, I, e) {
        I = M.getElementById(`vid_${vTurbPlayer.id}`), (e = M.createElement("IMG")).id = `thumb_${vTurbPlayer.id}`, e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.objectFit = "cover", e.src = `https://images.converteai.net/${vTurbPlayer.thumbnail_key}`, I.appendChild(e)
    }(document), document.getElementById(`backdrop_${vTurbPlayer.id}`) || function(M, I, e) {
        I = M.getElementById(`vid_${vTurbPlayer.id}`), (e = M.createElement("DIV")).id = `backdrop_${vTurbPlayer.id}`, e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.backdropFilter = "blur(5px)", e.style.webkitBackdropFilter = "blur(5px)", I.appendChild(e)
    }(document))
}

function vTurbLoadSmrtvds() {
    var M, I, e, t;
    M = window, I = document, M.smrtvds || (e = M.smrtvds = function() {
        e.callMethod ? e.callMethod.apply(e, arguments) : e.queue.push(arguments)
    }, M._smrtvds || (M._smrtvds = e), e.push = e, e.loaded = !0, e.version = "1.1", e.queue = [], (t = I.createElement("script")).async = !0, t.src = `https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`, I.getElementsByTagName("head")[0].appendChild(t)), window.smrtvds(`vid_${vTurbPlayer.id}`, vTurbPlayer.org_id, vTurbPlayer.video_id, vTurbPlayer.options)
}

function vTurbSmrtvds() {
    vTurbCreatSmartvdsElements(), vTurbLoadSmrtvds()
}
var vTurbOriginalPlayer = {
        "id": "68486b4cc482dbd72645d28c",
        "org_id": "77f7f12d-5e90-456d-b45e-7c7f2aa34ed0",
        "name": "outro dominio de VSL ED handerson ",
        "device_type": "mobile",
        "video_aspect_ratio": "177.96296296296296",
        "thumbnail_key": "77f7f12d-5e90-456d-b45e-7c7f2aa34ed0/players/68486b4cc482dbd72645d28c/thumbnail.jpg",
        "cover_key": "77f7f12d-5e90-456d-b45e-7c7f2aa34ed0/players/68486b4cc482dbd72645d28c/cover.jpg",
        "version": "v1",
        "video_id": "68470d8b802176b436305dd1",
        "options": {
            "autoplay": "smartplay",
            "subtitle_active": !1,
            "smart_autoplay_template": "default",
            "theme": "#9e3535",
            "foreground_color": "#FFFFFF",
            "video": {
                "width": 1080,
                "height": 1922
            },
            "cdn": "cdn.converteai.net",
            "conversion_params": ["sub1"],
            "displays": {
                "big_play": !1,
                "play_pause": !0,
                "backward": !1,
                "subtitle_control": !1,
                "forward": !1,
                "volume": !1,
                "volume_bar": !0,
                "time": !1,
                "fullscreen": !1,
                "seekbar": !1,
                "seekbar_time": !0,
                "speed_control": !1
            },
            "callAction": [{
                "id": "callaction_68486b4cc482dbd72645d28c_0",
                "type": "below_button",
                "btnText": "Quero Curar a Minha Disfun\xe7\xe3o",
                "position": "bc",
                "link": "https://pagamento-formula-da-potencia-extre.vercel.app/",
                "range": {
                    "start": 0,
                    "finish": 1501
                },
                "color": "#26a201",
                "colors": {
                    "text": "#FFFFFF",
                    "background": "#26a201",
                    "text_hover": "#ffffff",
                    "background_hover": "#26a201"
                },
                "size": "md"
            }],
            "pixels": [],
            "thumbs": [],
            "headlines": [],
            "smart_autoplays": [{
                "id": "smart_autoplay_68486b4cc482dbd72645d28c_1",
                "name": "Smart Autoplay",
                "version": "2",
                "number": 1,
                "template": "default",
                "background_color": "rgba(61, 133, 198, 0.61)",
                "bottom_text": "Clique para ouvir",
                "foreground_color": "#FFFFFF",
                "top_text": "Seu v\xeddeo j\xe1 come\xe7ou",
                "animation": null,
                "video_start_at": 24,
                "video_end_at": 72,
                "cover_key": null,
                "thumbnail_key": null,
                "elements": [{
                    "id": "smart_autoplay_68486b4cc482dbd72645d28c_1_element_0",
                    "height": 503.930592,
                    "width": 891.81,
                    "x": 94.042297000297,
                    "y": 664.4837659665216,
                    "order": 1,
                    "opacity": 1,
                    "rotation": 0,
                    "type": "box",
                    "properties": {
                        "color": "rgba(31, 81, 127, 1)",
                        "radius": 8.944,
                        "border": {
                            "size": 2.194,
                            "color": "#FFFFFF",
                            "type": "solid"
                        }
                    }
                }, {
                    "id": "smart_autoplay_68486b4cc482dbd72645d28c_1_element_1",
                    "height": 86.751,
                    "width": 891.81,
                    "x": 94.042297000297,
                    "y": 713.2623427912763,
                    "order": 2,
                    "opacity": 1,
                    "rotation": 0,
                    "type": "text",
                    "properties": {
                        "size": 54.963755,
                        "value": "Seu v\xeddeo j\xe1 come\xe7ou",
                        "color": "#FFFFFF",
                        "weight": 700,
                        "align": "center"
                    }
                }, {
                    "id": "smart_autoplay_68486b4cc482dbd72645d28c_1_element_2",
                    "height": 86.751,
                    "width": 891.81,
                    "x": 94.042297000297,
                    "y": 1079.3833434148476,
                    "order": 3,
                    "opacity": 1,
                    "rotation": 0,
                    "type": "text",
                    "properties": {
                        "size": 54.963755,
                        "value": "Clique para ouvir",
                        "color": "#FFFFFF",
                        "weight": 700,
                        "align": "center"
                    }
                }, {
                    "id": "smart_autoplay_68486b4cc482dbd72645d28c_1_element_3",
                    "height": 198.288,
                    "width": 280.70362,
                    "x": 400.32966347166354,
                    "y": 828.1946020375383,
                    "order": 4,
                    "opacity": 1,
                    "rotation": 0,
                    "type": "image",
                    "properties": {
                        "alt": "Seu v\xeddeo j\xe1 come\xe7ou",
                        "src": "data:image/svg+xml;base64,CiAgPHN2ZyB2ZXJzaW9uPSIxLjEiIGZpbGw9IiNGRkZGRkYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgICAgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDYuNzVweCIgaGVpZ2h0PSIzMi41NjNweCIgdmlld0JveD0iNy45OTkgOS4wNjIgNDYuNzUgMzIuNTYzIgogICAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICA+CiAgICA8c3R5bGU+CiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBCTElOSyB7CiAgICAgICAgMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgICAgMzMlIHsgb3BhY2l0eTogMTsgfQogICAgICAgIDY2JSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAxMDAlIHsgb3BhY2l0eTogMDsgfQogICAgICB9CgogICAgICBAa2V5ZnJhbWVzIEJMSU5LIHsKICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICAzMyUgeyBvcGFjaXR5OiAxOyB9CiAgICAgICAgNjYlIHsgb3BhY2l0eTogMTsgfQogICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgIH0KCiAgICAgIC5hbmltYXRpb24gLmJsaW5rXzEgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlOwogICAgICAgIG9wYWNpdHk6IDA7CiAgICAgIH0KCiAgICAgIC5hbmltYXRpb24gLmJsaW5rXzIgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgb3BhY2l0eTogMDsKICAgICAgfQoKICAgICAgLmFuaW1hdGlvbiAuYmxpbmtfMyB7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICBvcGFjaXR5OiAwOwogICAgICB9CgogICAgICAuYW5pbWF0aW9uIC5zbWFydHBsYXktc3ZnLWNvbG9yIHsKICAgICAgICBmaWxsOiAnI0ZGRkZGRicgIWltcG9ydGFudDsKICAgICAgfQoKICAgICAgLmFuaW1hdGlvbi5hZGp1c3RhYmxlIHsKICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAnI0ZGRkZGRic7CiAgICAgIH0KICAgIDwvc3R5bGU+CgogICAgPGcgY2xhc3M9ImFkanVzdGFibGUgZmcgYW5pbWF0aW9uIj4KICAgICAgPHBhdGggY2xhc3M9InNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik01My4yNDksMzkuNjE2Yy0wLjE4NiwwLTAuMzcxLTAuMDUxLTAuNTM3LTAuMTU3bC00My41LTI3Ljc1Yy0wLjQ2Ni0wLjI5Ny0wLjYwMy0wLjkxNi0wLjMwNi0xLjM4MWMwLjI5OC0wLjQ2NiwwLjkxNy0wLjYwMSwxLjM4MS0wLjMwNmw0My41LDI3Ljc1YzAuNDY3LDAuMjk3LDAuNjA0LDAuOTE2LDAuMzA3LDEuMzgxQzUzLjkwMSwzOS40NTMsNTMuNTc5LDM5LjYxNiw1My4yNDksMzkuNjE2eiI+PC9wYXRoPgogICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDguODk2LDMzLjQ2N2wxLjY5OSwxLjA4NWMzLjQ5Ny03Ljc5MSwyLjA3My0xNy4yNzEtNC4zMTMtMjMuNjU5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0QzUwLjU4MSwxOC4wMTksNTEuOTEzLDI2LjQ2Myw0OC44OTYsMzMuNDY3eiI+PC9wYXRoPgogICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDYuOTI2LDM2Ljk1NmMtMC42MTIsMC44NjMtMS4yODYsMS42OTUtMi4wNTksMi40NjljLTAuMzkyLDAuMzkxLTAuMzkyLDEuMDIzLDAsMS40MTRjMC4xOTQsMC4xOTUsMC40NSwwLjI5MywwLjcwNywwLjI5M2MwLjI1NiwwLDAuNTEyLTAuMDk4LDAuNzA2LTAuMjkzYzAuODc4LTAuODc4LDEuNjQyLTEuODI0LDIuMzMzLTIuODA3TDQ2LjkyNiwzNi45NTZ6Ij48L3BhdGg+CiAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00Mi41NDMsMjkuNDE1bDEuNzc3LDEuMTM1YzEuNTQ1LTUuMzE1LDAuMjI5LTExLjI5My0zLjk1My0xNS40NzZjLTAuMzkyLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBjLTAuMzkyLDAuMzkxLTAuMzkyLDEuMDIzLDAsMS40MTRDNDIuNDU0LDE5Ljk4Nyw0My42MzksMjQuOTI1LDQyLjU0MywyOS40MTV6Ij48L3BhdGg+CiAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00MSwzMy4xNzRjLTAuNTYzLDAuOTQtMS4yMzUsMS44MzctMi4wNDcsMi42NDZjLTAuMzkxLDAuMzkyLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC45MTYtMC45MTQsMS42NzYtMS45MjQsMi4zMTctMi45ODRMNDEsMzMuMTc0eiI+PC9wYXRoPgogICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMSBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNMzUuNzcxLDI1LjA5NGwyLjAwMywxLjI3N2MwLjAxMi0wLjIwMywwLjAyOS0wLjQwNCwwLjAyOS0wLjYwOWMwLTMuMDc5LTEuMi01Ljk3NC0zLjM4MS04LjE1M2MtMC4zOTEtMC4zOTEtMS4wMjItMC4zOTEtMS40MTQsMGMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzNC42NTIsMjAuNjY2LDM1LjYxMywyMi44MDIsMzUuNzcxLDI1LjA5NHoiPjwvcGF0aD4KICAgICAgPHBhdGggY2xhc3M9ImJsaW5rXzEgc21hcnRwbGF5LXN2Zy1jb2xvciIgZD0iTTM1LjA4NCwyOS40MDFjLTAuNDc0LDEuMTQ1LTEuMTcyLDIuMTk3LTIuMDc2LDMuMWMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M2MwLjI1NywwLDAuNTEzLTAuMDk4LDAuNzA3LTAuMjkzYzEuMDA4LTEuMDA2LDEuNzk1LTIuMTcsMi4zNjEtMy40M0wzNS4wODQsMjkuNDAxeiI+PC9wYXRoPgogICAgICA8cG9seWdvbiBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgcG9pbnRzPSIyOC4xMjQsMjAuMjE1IDI4LjEyNCwxNC45OTEgMjQuNjM1LDE3Ljk5ICAiPjwvcG9seWdvbj4KICAgICAgPHBhdGggY2xhc3M9InNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0yMC45MjEsMjAuMzY2aC02LjQyM2MtMC41NTMsMC0xLDAuNTA4LTEsMS4xMzV2OC4yMjljMCwwLjYyNywwLjQ0NywxLjEzNSwxLDEuMTM1aDcuMzc1bDYuMjUsNS44NzVWMjQuOTZMMjAuOTIxLDIwLjM2NnoiPjwvcGF0aD4KICAgIDwvZz4KICA8L3N2Zz4K"
                    }
                }],
                "custom_player_preview": null
            }],
            "turbos": [],
            "smart_autoplay_elements": [{
                "id": "smart_autoplay_element_68486b4cc482dbd72645d28c_0",
                "height": 270,
                "width": 486,
                "x": 297,
                "y": 826,
                "order": 1,
                "opacity": 1,
                "rotation": 0,
                "type": "box",
                "properties": {
                    "color": "rgba(61, 133, 198, 0.61)",
                    "radius": 9,
                    "border": {
                        "size": 2.25,
                        "color": "#FFFFFF",
                        "type": "solid"
                    }
                }
            }, {
                "id": "smart_autoplay_element_68486b4cc482dbd72645d28c_1",
                "height": 45,
                "width": 486,
                "x": 297,
                "y": 850,
                "order": 2,
                "opacity": 1,
                "rotation": 0,
                "type": "text",
                "properties": {
                    "size": 30,
                    "value": "Seu v\xeddeo j\xe1 come\xe7ou",
                    "color": "#FFFFFF",
                    "weight": "700",
                    "align": "center"
                }
            }, {
                "id": "smart_autoplay_element_68486b4cc482dbd72645d28c_2",
                "height": 45,
                "width": 486,
                "x": 297,
                "y": 1027,
                "order": 3,
                "opacity": 1,
                "rotation": 0,
                "type": "text",
                "properties": {
                    "size": 30,
                    "value": "Clique para ouvir",
                    "color": "#FFFFFF",
                    "weight": "700",
                    "align": "center"
                }
            }, {
                "id": "smart_autoplay_element_68486b4cc482dbd72645d28c_3",
                "height": 108,
                "width": 153,
                "x": 463.5,
                "y": 907,
                "order": 4,
                "opacity": 1,
                "rotation": 0,
                "type": "image",
                "properties": {
                    "alt": "Seu v\xeddeo j\xe1 come\xe7ou",
                    "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHZlcnNpb249IjEuMSIgZmlsbD0iI0ZGRkZGRiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ2Ljc1cHgiIGhlaWdodD0iMzIuNTYzcHgiIHZpZXdCb3g9IjcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIKICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgID4KICAgICAgPHN0eWxlPgogICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBCTElOSyB7CiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICAgIDMzJSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDY2JSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgICAgfQoKICAgICAgICBAa2V5ZnJhbWVzIEJMSU5LIHsKICAgICAgICAgIDAlIHsgb3BhY2l0eTogMDsgfQogICAgICAgICAgMzMlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgNjYlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICB9CgogICAgICAgIC5hbmltYXRpb24gLmJsaW5rXzEgewogICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlOwogICAgICAgICAgYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZTsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18yIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC4zczsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18zIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuNnM7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5zbWFydHBsYXktc3ZnLWNvbG9yIHsKICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyAhaW1wb3J0YW50OwogICAgICAgIH0KCiAgICAgICAgLmFuaW1hdGlvbi5hZGp1c3RhYmxlIHsKICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICcjRkZGRkZGJzsKICAgICAgICB9CiAgICAgIDwvc3R5bGU+CgogICAgICA8ZyBjbGFzcz0iYWRqdXN0YWJsZSBmZyBhbmltYXRpb24iPgogICAgICAgIDxwYXRoIGNsYXNzPSJzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNTMuMjQ5LDM5LjYxNmMtMC4xODYsMC0wLjM3MS0wLjA1MS0wLjUzNy0wLjE1N2wtNDMuNS0yNy43NWMtMC40NjYtMC4yOTctMC42MDMtMC45MTYtMC4zMDYtMS4zODFjMC4yOTgtMC40NjYsMC45MTctMC42MDEsMS4zODEtMC4zMDZsNDMuNSwyNy43NWMwLjQ2NywwLjI5NywwLjYwNCwwLjkxNiwwLjMwNywxLjM4MUM1My45MDEsMzkuNDUzLDUzLjU3OSwzOS42MTYsNTMuMjQ5LDM5LjYxNnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDguODk2LDMzLjQ2N2wxLjY5OSwxLjA4NWMzLjQ5Ny03Ljc5MSwyLjA3My0xNy4yNzEtNC4zMTMtMjMuNjU5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0QzUwLjU4MSwxOC4wMTksNTEuOTEzLDI2LjQ2Myw0OC44OTYsMzMuNDY3eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18zIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00Ni45MjYsMzYuOTU2Yy0wLjYxMiwwLjg2My0xLjI4NiwxLjY5NS0yLjA1OSwyLjQ2OWMtMC4zOTIsMC4zOTEtMC4zOTIsMS4wMjMsMCwxLjQxNGMwLjE5NCwwLjE5NSwwLjQ1LDAuMjkzLDAuNzA3LDAuMjkzYzAuMjU2LDAsMC41MTItMC4wOTgsMC43MDYtMC4yOTNjMC44NzgtMC44NzgsMS42NDItMS44MjQsMi4zMzMtMi44MDdMNDYuOTI2LDM2Ljk1NnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMiBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDIuNTQzLDI5LjQxNWwxLjc3NywxLjEzNWMxLjU0NS01LjMxNSwwLjIyOS0xMS4yOTMtMy45NTMtMTUuNDc2Yy0wLjM5Mi0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwYy0wLjM5MiwwLjM5MS0wLjM5MiwxLjAyMywwLDEuNDE0QzQyLjQ1NCwxOS45ODcsNDMuNjM5LDI0LjkyNSw0Mi41NDMsMjkuNDE1eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00MSwzMy4xNzRjLTAuNTYzLDAuOTQtMS4yMzUsMS44MzctMi4wNDcsMi42NDZjLTAuMzkxLDAuMzkyLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC45MTYtMC45MTQsMS42NzYtMS45MjQsMi4zMTctMi45ODRMNDEsMzMuMTc0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS43NzEsMjUuMDk0bDIuMDAzLDEuMjc3YzAuMDEyLTAuMjAzLDAuMDI5LTAuNDA0LDAuMDI5LTAuNjA5YzAtMy4wNzktMS4yLTUuOTc0LTMuMzgxLTguMTUzYy0wLjM5MS0wLjM5MS0xLjAyMi0wLjM5MS0xLjQxNCwwYy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0QzM0LjY1MiwyMC42NjYsMzUuNjEzLDIyLjgwMiwzNS43NzEsMjUuMDk0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS4wODQsMjkuNDAxYy0wLjQ3NCwxLjE0NS0xLjE3MiwyLjE5Ny0yLjA3NiwzLjFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNjMC4yNTcsMCwwLjUxMy0wLjA5OCwwLjcwNy0wLjI5M2MxLjAwOC0xLjAwNiwxLjc5NS0yLjE3LDIuMzYxLTMuNDNMMzUuMDg0LDI5LjQwMXoiPjwvcGF0aD4KICAgICAgICA8cG9seWdvbiBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgcG9pbnRzPSIyOC4xMjQsMjAuMjE1IDI4LjEyNCwxNC45OTEgMjQuNjM1LDE3Ljk5ICAiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgZD0iTTIwLjkyMSwyMC4zNjZoLTYuNDIzYy0wLjU1MywwLTEsMC41MDgtMSwxLjEzNXY4LjIyOWMwLDAuNjI3LDAuNDQ3LDEuMTM1LDEsMS4xMzVoNy4zNzVsNi4yNSw1Ljg3NVYyNC45NkwyMC45MjEsMjAuMzY2eiI+PC9wYXRoPgogICAgICA8L2c+CiAgICA8L3N2Zz4KICA="
                }
            }],
            "mini_hooks": !1,
            "mini_hooks_elements": [],
            "resume": !0,
            "fake_bar": !0,
            "headline": !1,
            "turbo": !1,
            "turbo_speed": 1,
            "turbo_auto_test": !1,
            "secure": !1,
            "smartplay_options": {
                "top_text": "Seu v\xeddeo j\xe1 come\xe7ou",
                "bottom_text": "Clique para ouvir",
                "foreground_color": "#FFFFFF",
                "background_color": "rgba(61, 133, 198, 0.61)",
                "start_at": 0,
                "end_at": 1441,
                "animation": {},
                "custom_preview": null
            },
            "resume_options": {
                "play": "Continuar assistindo?",
                "title": "Voc\xea j\xe1 come\xe7ou a assistir esse v\xeddeo",
                "replay": "Assistir do in\xedcio?",
                "disable_pause": !1,
                "foreground_color": "#FFFFFF",
                "background_color": "#1f5180b3"
            },
            "fake_bar_options": {
                "height": 13,
                "alpha": 2,
                "vbar_height": !0,
                "vbar_end": !0,
                "vbar_network": !0,
                "vbar_color": "#1F517F"
            }
        }
    },
    vTurbSrcId = "68486b4cc482dbd72645d28c",
    vTurbPlayer = vTurbOriginalPlayer,
    vTurbDeviceIsMobile = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),
    vTurbOriginalPlayerIsMobile = "mobile" === vTurbOriginalPlayer.device_type;
vTurbDeviceIsMobile = vTurbDeviceIsMobile && vTurbDeviceIsMobile[0], vTurbSmrtvds();
