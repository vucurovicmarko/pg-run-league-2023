(()=>{"use strict";const e={"#1":{name:"Dragan Jašović",age:1987,gender:"M"},"#2":{name:"Milan Vlahović",age:1988,gender:"M"},"#3":{name:"Milić Dašić",age:1995,gender:"M"},"#4":{name:"Milica Mirković",age:1999,gender:"Ž"},"#5":{name:"Pavle Raicevic",age:1997,gender:"M"},"#6":{name:"Zarko Celebic",age:1980,gender:"M"},"#7":{name:"Rozhko Hanna",age:2007,gender:"Ž"},"#8":{name:"Biljana Radunović",age:1971,gender:"Ž"},"#9":{name:"Filip Vujovic",age:1994,gender:"M"},"#10":{name:"Ljiljana Jelic",age:1991,gender:"Ž"},"#11":{name:"Mileta Dulovic",age:1998,gender:"M"},"#12":{name:"Nikola Dukić",age:1991,gender:"M"},"#13":{name:"Aleksandar Jovovic",age:1980,gender:"M"},"#14":{name:"Ilija Vučetić",age:1991,gender:"M"},"#15":{name:"Nikola Duborija",age:1977,gender:"M"},"#16":{name:"Славољуб Шарић",age:1965,gender:"M"},"#17":{name:"Mirko Bogićević",age:1982,gender:"M"},"#18":{name:"Jelena Miladinović",age:2008,gender:"Ž"},"#19":{name:"Slavoljub Miladinović",age:1965,gender:"M"},"#20":{name:"Arsenije Maerov",age:2008,gender:"M"},"#21":{name:"Marija Ivanović",age:1990,gender:"Ž"},"#22":{name:"Aris Šabotić",age:1980,gender:"M"},"#23":{name:"Anja Perović",age:1998,gender:"Ž"},"#24":{name:"Goran Ivanović",age:1984,gender:"M"},"#25":{name:"Jelena Vucetic",age:1995,gender:"Ž"},"#26":{name:"Ljubica Samardžić",age:1995,gender:"Ž"},"#27":{name:"Marko Vučurović",age:2e3,gender:"M"},"#28":{name:"Darko Vučetić",age:1989,gender:"M"},"#29":{name:"Dijana Stanišić",age:1992,gender:"Ž"},"#30":{name:"Jovan Dedic",age:1992,gender:"M"},"#31":{name:"Jelena Ivković",age:1997,gender:"Ž"},"#32":{name:"Tamara Jelić",age:1989,gender:"Ž"},"#33":{name:"Vučeta Orović",age:1992,gender:"M"},"#34":{name:"Isidora Matović",age:1995,gender:"Ž"},"#35":{name:"Dušan Kašćelan",age:1985,gender:"M"},"#36":{name:"Anđela Sekulić",age:1992,gender:"Ž"},"#37":{name:"Petr Kopotev",age:1988,gender:"M"},"#38":{name:"Simo Irić",age:2001,gender:"M"},"#39":{name:"Elisey Kosiakov",age:2012,gender:"M"},"#40":{name:"Veljko Jovančević",age:1985,gender:"M"},"#41":{name:"Vuko Perisic",age:1980,gender:"M"},"#42":{name:"Roman Struchev",age:1991,gender:"M"},"#43":{name:"Luka MIhaljevic",age:1987,gender:"M"},"#44":{name:"Milovan Marković",age:1979,gender:"M"},"#45":{name:"Branislav Kasalica",age:2e3,gender:"M"},"#46":{name:"Lidija Nedovic",age:1984,gender:"Ž"},"#47":{name:"Marija Dragovic",age:1997,gender:"Ž"},"#48":{name:"Balsa Gardasevic",age:2009,gender:"M"},"#49":{name:"Petar Gardasevic",age:1978,gender:"M"},"#50":{name:"Mato Jovićević",age:1985,gender:"M"},"#51":{name:"Marija Dušević",age:1992,gender:"Ž"},"#52":{name:"Boris Mijović",age:1989,gender:"M"},"#53":{name:"Marina Mugoša",age:1969,gender:"Ž"},"#54":{name:"Milo Mugoša",age:1981,gender:"M"},"#55":{name:"Radmila Čabarkapa",age:1963,gender:"Ž"},"#56":{name:"Marko Kavaja",age:1990,gender:"M"},"#57":{name:"Andrea Saitaj",age:1994,gender:"Ž"},"#58":{name:"Tin Deljanin",age:1988,gender:"M"},"#59":{name:"Vuk Trajkovski",age:2004,gender:"M"},"#60":{name:"Nikola Radosavljevic",age:1994,gender:"M"},"#61":{name:"Miloš Radenović",age:1989,gender:"M"},"#62":{name:"Luka Đurović",age:1984,gender:"M"},"#63":{name:"Filip Krgović",age:1989,gender:"M"},"#64":{name:"Loran Rugovac",age:1992,gender:"M"},"#65":{name:"Sanda Rakočević",age:1980,gender:"Ž"},"#66":{name:"Ivan Bubnov",age:1990,gender:"M"},"#67":{name:"Sergej Skudnov",age:1989,gender:"M"},"#68":{name:"Nariman Miftakhov",age:1981,gender:"M"},"#69":{name:"Dragan Gardasevic",age:1980,gender:"M"},"#70":{name:"Tomo Glendza",age:1989,gender:"M"},"#71":{name:"Ankica Vukeljic",age:1978,gender:"Ž"},"#72":{name:"Sergei Tsykin",age:1991,gender:"M"},"#73":{name:"Milos Rakonjac",age:1983,gender:"M"},"#74":{name:"Denis Trufanov",age:1986,gender:"M"},"#75":{name:"Miloš Brajović",age:1988,gender:"M"},"#76":{name:"Danilo Gardašević",age:2008,gender:"M"},"#77":{name:"Iva Tošić",age:1988,gender:"Ž"},"#78":{name:"Rada Miladinovic",age:1979,gender:"Ž"},"#79":{name:"Elena Shane",age:1982,gender:"Ž"},"#80":{name:"Rade Radović",age:1994,gender:"M"},"#81":{name:"Predrag Ćosović",age:1988,gender:"M"},"#83":{name:"Danil Zverev",age:2009,gender:"M"},"#100":{name:"Ognjen Stamatović",age:2016,gender:"M"}},i=[{bib:"#56",time:"00:18:39"},{bib:"#1",time:"00:19:22"},{bib:"#27",time:"00:20:15"},{bib:"#20",time:"00:20:42"},{bib:"#29",time:"00:20:59"},{bib:"#2",time:"00:21:05"},{bib:"#12",time:"00:21:17"},{bib:"#42",time:"00:21:28"},{bib:"#41",time:"00:21:31"},{bib:"#54",time:"00:22:10"},{bib:"#39",time:"00:22:39"},{bib:"#49",time:"00:22:40"},{bib:"#19",time:"00:22:53"},{bib:"#60",time:"00:22:55"},{bib:"#40",time:"00:23:06"},{bib:"#22",time:"00:23:08"},{bib:"#24",time:"00:23:45"},{bib:"#31",time:"00:23:54"},{bib:"#57",time:"00:23:55"},{bib:"#38",time:"00:24:10"},{bib:"#50",time:"00:24:17"},{bib:"#3",time:"00:24:22"},{bib:"#13",time:"00:24:26"},{bib:"#9",time:"00:24:37"},{bib:"#28",time:"00:24:46"},{bib:"#14",time:"00:25:11"},{bib:"#30",time:"00:25:16"},{bib:"#62",time:"00:25:44"},{bib:"#16",time:"00:25:45"},{bib:"#35",time:"00:25:53"},{bib:"#8",time:"00:26:31"},{bib:"#59",time:"00:26:41"},{bib:"#21",time:"00:27:15"},{bib:"#26",time:"00:27:21"},{bib:"#53",time:"00:27:28"},{bib:"#15",time:"00:27:30"},{bib:"#64",time:"00:27:38"},{bib:"#58",time:"00:28:09"},{bib:"#63",time:"00:29:02"},{bib:"#37",time:"00:29:06"},{bib:"#17",time:"00:29:17"},{bib:"#61",time:"00:29:21"},{bib:"#6",time:"00:29:37"},{bib:"#44",time:"00:29:50"},{bib:"#48",time:"00:30:05"},{bib:"#23",time:"00:30:21"},{bib:"#65",time:"00:30:41"},{bib:"#18",time:"00:30:42"},{bib:"#52",time:"00:30:51"},{bib:"#36",time:"00:30:57"},{bib:"#5",time:"00:30:58"},{bib:"#33",time:"00:31:43"},{bib:"#45",time:"00:31:55"},{bib:"#55",time:"00:31:56"},{bib:"#32",time:"00:32:21"},{bib:"#25",time:"00:33:18"},{bib:"#7",time:"00:33:40"},{bib:"#4",time:"00:33:41"},{bib:"#10",time:"00:34:32"},{bib:"#43",time:"00:35:33"},{bib:"#46",time:"00:35:34"},{bib:"#47",time:"00:35:36"},{bib:"#11",time:"00:36:42"},{bib:"#51",time:"00:37:30"}],a=[i,[{bib:"#66",time:"00:17:38"},{bib:"#56",time:"00:19:42"},{bib:"#1",time:"00:19:48"},{bib:"#73",time:"00:19:53"},{bib:"#72",time:"00:20:18"},{bib:"#74",time:"00:20:28"},{bib:"#29",time:"00:20:43"},{bib:"#27",time:"00:21:07"},{bib:"#2",time:"00:21:18"},{bib:"#39",time:"00:21:51"},{bib:"#57",time:"00:22:09"},{bib:"#54",time:"00:22:09"},{bib:"#42",time:"00:22:17"},{bib:"#22",time:"00:22:55"},{bib:"#31",time:"00:23:02"},{bib:"#24",time:"00:23:12"},{bib:"#3",time:"00:23:59"},{bib:"#13",time:"00:24:03"},{bib:"#30",time:"00:24:14"},{bib:"#35",time:"00:24:38"},{bib:"#40",time:"00:24:52"},{bib:"#70",time:"00:24:56"},{bib:"#62",time:"00:24:59"},{bib:"#28",time:"00:25:30"},{bib:"#67",time:"00:25:45"},{bib:"#15",time:"00:26:18"},{bib:"#8",time:"00:26:45"},{bib:"#26",time:"00:27:07"},{bib:"#21",time:"00:27:55"},{bib:"#68",time:"00:28:34"},{bib:"#6",time:"00:28:55"},{bib:"#53",time:"00:28:58"},{bib:"#23",time:"00:29:23"},{bib:"#69",time:"00:30:58"},{bib:"#71",time:"00:31:58"},{bib:"#44",time:"00:32:27"},{bib:"#25",time:"00:33:07"},{bib:"#52",time:"00:35:30"}],i,[{bib:"#56",time:"00:19:32"},{bib:"#27",time:"00:19:45"},{bib:"#74",time:"00:20:14"},{bib:"#83",time:"00:20:30"},{bib:"#12",time:"00:20:55"},{bib:"#20",time:"00:20:59"},{bib:"#54",time:"00:21:15"},{bib:"#29",time:"00:21:47"},{bib:"#42",time:"00:22:00"},{bib:"#40",time:"00:22:55"},{bib:"#3",time:"00:22:57"},{bib:"#22",time:"00:23:04"},{bib:"#24",time:"00:23:41"},{bib:"#49",time:"00:23:56"},{bib:"#14",time:"00:24:22"},{bib:"#50",time:"00:25:20"},{bib:"#41",time:"00:25:21"},{bib:"#70",time:"00:25:33"},{bib:"#75",time:"00:26:00"},{bib:"#15",time:"00:26:01"},{bib:"#8",time:"00:26:25"},{bib:"#62",time:"00:27:09"},{bib:"#16",time:"00:27:19"},{bib:"#21",time:"00:27:45"},{bib:"#53",time:"00:28:00"},{bib:"#52",time:"00:28:22"},{bib:"#81",time:"00:28:40"},{bib:"#58",time:"00:28:47"},{bib:"#64",time:"00:29:13"},{bib:"#79",time:"00:29:57"},{bib:"#17",time:"00:30:20"},{bib:"#6",time:"00:30:30"},{bib:"#47",time:"00:32:11"},{bib:"#44",time:"00:32:13"},{bib:"#33",time:"00:32:15"},{bib:"#4",time:"00:33:15"},{bib:"#5",time:"00:33:16"},{bib:"#7",time:"00:39:24"}]];function n(e){return Array.from(new Set(Object.keys(e)))}function b(e){const i=e.split(":");return 60*parseInt(i[0],10)*60*1e3+60*parseInt(i[1],10)*1e3+1e3*parseInt(i[2],10)}function t(e,i){return e.map((e=>({...e}))).filter((e=>e.gender===i))}function m(e,i,a){let n=e.map((e=>({...e}))).filter((e=>e.sortedRacesTime.length>=i));return n.map((e=>{const a=[...e.sortedRacesTime].splice(0,i);e.bestTimes=a,e.bestTimesTotal=function(e){const i=e.reduce(((e,i)=>e+b(i)),0),a=Math.floor(i/36e5),n=Math.floor(i%36e5/6e4),t=Math.floor(i%6e4/1e3);return[String(a).padStart(2,"0"),String(n).padStart(2,"0"),String(t).padStart(2,"0")].join(":")}(a)})),n.sort(((e,i)=>b(e.bestTimesTotal)-b(i.bestTimesTotal))),n.map(((e,i)=>(e.rang=i+1,e))),a&&(n=n.slice(0,a)),n}!function(e,i){const a=n(e);i.forEach(((e,i)=>{const n=function(e){return Array.from(new Set(e.map((e=>e.bib))))}(e),b=function(e,i){return i.filter((i=>!e.includes(i)))}(a,n);if(b.length)throw new Error(`Race ${i+1} new runners ids: [${b}].`)}))}(e,a);let r=4;a.length<r&&(r=a.length);const g=function(e,i){const a=n(e),t=a.reduce(((e,a)=>(e[a]=Array(i.length),e)),{}),m=i.reduce(((e,i,a)=>(i.forEach((i=>{e[i.bib][a]=i.time})),e)),t),r=a.reduce(((e,i)=>{const a=m[i].filter((e=>void 0!==e)),n=a.map(b);return a.sort(((e,i)=>n[a.indexOf(e)]-n[a.indexOf(i)])),e[i]=a,e}),{});return a.reduce(((i,a)=>{const{name:n,age:b,gender:t}=e[a];return i.push({id:a,name:n,age:b,gender:t,unionRacesTime:m[a],sortedRacesTime:r[a]}),i}),[])}(e,a),d=t(g,"M"),o=m(d,1,3),M=m(d,r,3),l=t(g,"Ž"),c=m(l,1,3),u=m(l,r,3),v=document.getElementById("results");function s({title:e,data:i}){const a=document.createElement("section");a.appendChild(function(e){const i=document.createElement("h2");return i.textContent=e,i}(e)),a.appendChild(function(e){const i=document.createElement("pre");return i.textContent=JSON.stringify(e,null,2),i}(i)),v.appendChild(a)}s({title:`MALE BEST RACE - TOP (${o.length})`,data:o}),s({title:`MALE WINNERS - TOP (${M.length}):`,data:M}),s({title:`FEMALE BEST RACE - TOP (${c.length})`,data:c}),s({title:`FEMALE WINNERS - TOP (${u.length}):`,data:u})})();