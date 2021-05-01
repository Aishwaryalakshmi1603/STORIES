

fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
.then(response => response.json())
.then(data => {
  var info = data;
  //var myArr = JSON.parse(info);
  var latest1 = info[0];
  var lat1 = document.querySelector('.latest1');
  var lat1info = document.querySelector('.latest1info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+latest1+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    lat1.innerHTML = "A "+type+" by "+by+".";
    lat1info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;


  })

  var latest2 = info[1];
  var lat2 = document.querySelector('.latest2');
  var lat2info = document.querySelector('.latest2info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+latest2+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    lat2.innerHTML = "A "+type+" by "+by+".";
    lat2info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })

  var latest3 = info[2];
  var lat3 = document.querySelector('.latest3');
  var lat3info = document.querySelector('.latest3info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+latest3+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    lat3.innerHTML = "A "+type+" by "+by+".";
    lat3info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })


  var latest4 = info[3];
  var lat4 = document.querySelector('.latest4');
  var lat4info = document.querySelector('.latest4info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+latest4+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    lat4.innerHTML = "A "+type+" by "+by+".";
    lat4info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })

  var latest5 = info[4];
  var lat5 = document.querySelector('.latest5');
  var lat5info = document.querySelector('.latest5info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+latest5+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    lat5.innerHTML = "A "+type+" by "+by+".";
    lat5info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })














})


fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
.then(response => response.json())
.then(data => {
  var info = data;
  //var myArr = JSON.parse(info);
  var top1 = info[0];
  var la1 = document.querySelector('.top1');
  var la1info = document.querySelector('.top1info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+top1+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    la1.innerHTML = "A "+type+" by "+by+".";
    la1info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;


  })

  var top2 = info[1];
  var la2 = document.querySelector('.top2');
  var la2info = document.querySelector('.top2info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+top2+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    la2.innerHTML = "A "+type+" by "+by+".";
    la2info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })

  var top3 = info[2];
  var la3 = document.querySelector('.top3');
  var la3info = document.querySelector('.top3info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+top3+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    la3.innerHTML = "A "+type+" by "+by+".";
    la3info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })


  var top4 = info[3];
  var la4 = document.querySelector('.top4');
  var la4info = document.querySelector('.top4info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+top4+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    la4.innerHTML = "A "+type+" by "+by+".";
    la4info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })

  var top5 = info[4];
  var la5 = document.querySelector('.top5');
  var la5info = document.querySelector('.top5info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+top5+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    la5.innerHTML = "A "+type+" by "+by+".";
    la5info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })














})



fetch('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty')
.then(response => response.json())
.then(data => {
  var info = data;
  //var myArr = JSON.parse(info);
  var best1 = info[0];
  var bes1 = document.querySelector('.best1');
  var bes1info = document.querySelector('.best1info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+best1+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    bes1.innerHTML = "A "+type+" by "+by+".";
    bes1info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;


  })

  var best2 = info[1];
  var bes2 = document.querySelector('.best2');
  var bes2info = document.querySelector('.best2info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+best2+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    bes2.innerHTML = "A "+type+" by "+by+".";
    bes2info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })

  var best3 = info[2];
  var bes3 = document.querySelector('.best3');
  var bes3info = document.querySelector('.best3info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+best3+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    bes3.innerHTML = "A "+type+" by "+by+".";
    bes3info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })


  var best4 = info[3];
  var bes4 = document.querySelector('.best4');
  var bes4info = document.querySelector('.best4info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+best4+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    bes4.innerHTML = "A "+type+" by "+by+".";
    bes4info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })

  var best5 = info[4];
  var bes5 = document.querySelector('.best5');
  var bes5info = document.querySelector('.best5info');
  var content = document.querySelector('.content')
  fetch('https://hacker-news.firebaseio.com/v0/item/'+best5+'.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var type = data['type'];
    var by = data['by'];
    var score = data['score'];
    var text = data['title'];
    var url = data['url'];


    bes5.innerHTML = "A "+type+" by "+by+".";
    bes5info.innerHTML = text+"<br>Score : "+score+".";
    content.innerHTML = "click this to view more<br>"+url;
    window.open('single-page.html').document.body.innerHTML += text;


  })














})
