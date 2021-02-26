var shop = [
    {
      title: 'Nike Hoodie',
      image: './puppies/nikedrip.jpg',
      price: '35.95',
      description: "checks over stripes",
    },
    {
      title: 'Dior Sweater',
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
      description: "",
    },
    {
      title: 'Furberry Litter Shower Shirt',
      image: './puppies/babyshower dog fit.jpg',
      price: '59.95',
      description: "",
    },
    {
      title: 'The Dog Face hoodie',
      image: './puppies/northfacedrip.jpg',
      price: '29.95',
      description: "",
    },
    {
      title: 'Mercedes Bed',
      image: './puppies/benzdogbed.jpg',
      price: '52.50',
      description: "",
    },
   
    {
      title: 'Furberry Bae Dress',
      image: './puppies/burberrybae.png',
      price: '70.98',
      description: "",
    },
   
    {
      title: 'Furberry Collar',
      image: './puppies/burberrydrip.jpg',
      price: '32.52',
      description: "",
    },
    {
      title: 'Canada Drip',
      image: './puppies/canadadrip.jpg',
      price: '90.98',
      description: "",
    },
    {
      title: 'Cuban Link Collar',
      image: './puppies/cubanlinkjit.jpg',
      price: '150.65',
      description: "",
    },
    {
      title: 'Oreo Dog Toy',
      image: './puppies/dogtoyoreo.jpg',
      price: '15.89',
      description: "",
    },
    {
      title: 'Fendi leash',
      image: './puppies/fentycollardrip.jpg',
      price: '25.95',
      description: "",
    },
    {
      title: 'Good Eats Dog Toy',
      image: './puppies/goodeatsdogtoys.jpg',
      price: '15.95',
      description: "",
    },
    {
      title: 'Luis Pawtton Dress',
      image: './puppies/lvdrip.jpg',
      price: '85.95',
      description: "",
    },
    {
      title: 'Off White Leash',
      image: './puppies/offwhitedrip.jpg',
      price: '20.59',
      description: "",
    },
    ];
   

    var postHTML = ""
    for (var i=0; i < shop.length; i++){
        var container = '<div class="col-lg-3"> <div class="card">'
        var image = '<img src="' + shop[i].image + '" class="card-img-top"  alt="..."/>'
        var heading = '<div class="card-body text-center" ><h4 class="card-title">' + shop[i].title + '</h4>'
        var price = '<p> $' + shop[i].price + '</p>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning">add to cart</button></div></div></div></div>'
        var concatThis = container + image + heading + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML

   
  

