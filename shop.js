var shop = [
    {
      title: 'Nike Hoodie',
      image: './puppies/nikedrip.jpg',
      price: '35.95',
      description: "checks over stripes",
    },
    {
      title: 'Furberry Sweater',
      image: './puppies/dior dior.jpg',
      price: '40.00',
      description: "Christian Dior, Dior I'm up in all the stores",
    },
    {
      title: 'Fendi Fall Sweater',
      image: './puppies/fendidrip.png',
      price: '69.95',
      description: "Keep your pup warm this winter with our Fendi Fall sweater",
    },
    {
      title: 'Pupreme Hoodie',
      image: './puppies/pupremedrip.jpg',
      price: '60.00',
      description: "poodle puppy",
    },
    ];
   

    var postHTML = ""
    for (var i=0; i < shop.length; i++){
        var container = '<div class="container-fluid"> <div class="row"><div class="col-md-6 col-lg-3">  <div class="card">'
        var image = '<img src="' + shop[i].image + '" class="card-img-top"  alt="..."/>'
        var heading = '<div class="card-body text-center" ><h2 class="card-title">' + shop[i].title + '</h2>'
        var price = '<p> $' + shop[i].price + '</p>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-primary">add to cart</button></div></div></div></div></div></div>'
        var concatThis = container + image + heading + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML

   
    // var postHTML = "" 
    //  for (var i=0; i < shop.length; i++){
    //   var container = '<div class="container col-lg-4">'
    //   var heading = '<div class=" mb-3 text-center"><div class="card mb-4 shadow-sm"> ' + '<div class="card-header"><h4 class="my-0 fw-normal '+ '"> ' + shop[i].title + '</h4></div>';
    //   var price = '<div class="card-body"><h1 class="card-title pricing-card-title' + '">$' + shop[i].price + '</h1>';
    //   var image = '<ul class="list-unstyled mt-3 mb-4 ' + '"> <ul class="list-unstyled mt-3 mb-4"> <img src="' + shop[i].image + '"style="" alt="Product">';
    //   var description = '<li> ' + shop[i].description + '</li></ul><button type="button" class="w-100 btn btn-lg btn-outline-primary">Add to cart</button></div></div></div></div></div>'
    //    var concatThis = container + heading + image + price + description;
    //    postHTML = postHTML + concatThis              }
    //   document.getElementById('market').innerHTML = postHTML



    // var postHTML = ""
    // for (var i=0; i < shop.length; i++){
    //     var container = '<div class="container" ' + '>'
    //     var heading = '<div class=" ' + '"><h2>' + shop[i].title + '</h2>'
    //     var image = '<img src="' + shop[i].image + '"/>'
    //     var price = '<p> $' + shop[i].price + '</p>'
    //     var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="">add to cart</button></div></div>'
    //     var concatThis = heading + image + price + description;
    //     postHTML = postHTML + concatThis
    // }
    // document.getElementById('market').innerHTML = postHTML

