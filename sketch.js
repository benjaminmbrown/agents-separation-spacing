var pursuer;
var evader;

var debug = true;
var flowfield;
var vehicles = [];
var path;


function setup() {

    createCanvas(820, 460);
    setFrameRate(60);
    flowfield = new Flowfield(20);
    path = new Path(width, height);
    newPath();
}

function draw() {
    background(255);
    path.display()
    var mouse = createVector(mouseX, mouseY);
   // if (debug) { flowfield.display(); }
    for (var i = 0; i < vehicles.length; i++) {

       // vehicles[i].followFlow(flowfield);
        vehicles[i].separate(vehicles);
        //vehicles[i].wander();

       // vehicles[i].followPath(path);
        vehicles[i].seek(mouse);
        vehicles[i].run();
    }
}

function keyPressed() {

    for (var i = 0; i < key; i++) {
        vehicles.push(new Vehicle(random(width), random(height), random(2, 2), random(0.1, 0.2), width, height));
    }
    if (key == 'K') {
        console.log("pressed");
        vehicles.push(new Vehicle(random(width), random(height), random(2, 5), random(0.2, 0.4), width, height));
        debug != debug;
    }
    console.log(debug);
}

function mousePressed() {
    flowfield.init();
    // path.init();
    newPath();
}

function newPath() {
    path = new Path();
    path.addPoint(-20, height / 2);
    path.addPoint(random(0, width / 2), random(0, height));
    path.addPoint(random(width / 2, width), random(0, height));
    path.addPoint(width + 40, height / 2);

}
