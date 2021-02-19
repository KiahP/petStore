var shop = [
    {
      title: 'Tigers',
      image: 'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      price: '$7,500-15,000',
      description: "It's a tiger",
    },
    {
      title: 'Yorkie',
      image: './puppies/cutegirlyorkie.jpg',
      price: '$600',
      description: "yorkie puppy",
    },
    {
      title: 'Pom',
      image: './puppies/pompom.jpg',
      price: '$400',
      description: "pomeranian puppy",
    },
    {
      title: 'Poodle',
      image: './puppies/redpoodlepup.jpg',
      price: '$350',
      description: "poodle puppy",
    },
    ];
    var postHTML = ""
    for (var i=0; i < shop.length; i++){
      var container = '<div class="container" ' + '>'
        var heading = '<div class=" ' + '"><h2>' + shop[i].title + '</h2>'
        var image = '<img src="' + shop[i].image + '"/>'
        var price = '<p> $' + shop[i].price + '</p>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="">add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML

