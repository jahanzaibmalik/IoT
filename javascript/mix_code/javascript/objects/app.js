// var hotel = {
//     name: "Quay",
//     rooms: 40,
//     booked: 25,
//     gym: true,
//     roomTypes: ["twin", "suite", "double"],
//     checkAvailability: function() {
//         return this.rooms - this.booked;
//     }
// };

// var hotelName = hotel.name;
// alert(hotelName);
// var roomsAvail = hotel.checkAvailability();
// alert(roomsAvail);
// var roomTypes = hotel.roomTypes[0];
// alert(roomTypes);
// var gym = hotel.gym;
// alert(gym);


// var hotel = new Object();
// hotel.name = "Quay";
// hotel.rooms = 40;
// hotel.booked = 25;
// hotel.checkAvailability = function() {
//     return this.rooms - this.booked;
// }

// alert(hotel.rooms);
// alert(hotel.checkAvailability());

// hotel['gym'] = true;
// alert(hotel['gym']);

// delete hotel.rooms;
// alert(hotel.rooms);

// alert(hotel.name);
// hotel.name = " ";
// alert(hotel.name);


// function Hotel(name, rooms, booked) {
//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
//     this.checkAvailability = function() {
//         return this.rooms - this.booked;
//     };
// }

// var quayHotel = new Hotel("Quay", 40, 25);
// var parkHotel = new Hotel("Park", 144, 44);

// alert(quayHotel.checkAvailability());
// alert(parkHotel.name);


// function windowSize() {
//     var width = this.innerWidth;
//     var height = this.innerHeight;
//     return [height, width];
// }
// alert(windowSize());

// var width = 600;
// var shape = {
//     width: 300,
//     check: function() {
//         document.write(this.width);
//     }
// };    


// var showWidth = function() {
//     document.write(this.width);
// }

// showWidth();

// shape.check();


// var shape = {
//     width: 600,
//     height: 400,
//     getArea: function() {
//         return this.width * this.height;
//     }
// };

// alert(shape.getArea());


var width = 600;

var shape = {
    width: 300
};

var showWidth = function() {
    document.write(this.width);
}

shape.getWidth = "Quay";
alert(shape.getWidth);