let data = [];
var m = 1;
var b = 0;
function setup() {
	createCanvas(500, 500);
    background(51);
}

function draw() {
    //console.log(mouseX, mouseY);
    background(51);
    
    if(data.length > 1){
        linearRegression();
        drawLine();
    }
    
    for(var i = 0; i < data.length; i++){
        var x = map(data[i].x, 0, 1, 0, width);
        var y = map(data[i].y, 0, 1, height, 0);
        
        stroke(255);
        fill(255);
        ellipse(x, y, 5);
    }
}

function gradientDescent() {
    
}

function linearRegression() {
    
    
/*  Least squares method.
    var xSum = 0;
    var ySum = 0;
    
    for(var i = 0; i < data.length; i++) {
        xSum += data[i].x;
        ySum += data[i].y;
    }
    
    var xMean = xSum / data.length;
    var yMean = ySum / data.length;
    
    var numerator = 0;
    var denominator = 0;
    
    for(var i = 0; i < data.length; i++) {
        var x = data[i].x;
        var y = data[i].y;
        
        numerator += (x - xMean) * (y - yMean);
        denominator += (x - xMean) * (x - xMean);
    }
    
    m = numerator / denominator;
    b = yMean - (m * xMean);
*/
}

function mousePressed() {
    if ((mouseX > 0 && mouseX <= width) && 
        (mouseY > 0 && mouseY <= height)){
        var x = map(mouseX, 0, width, 0, 1);
        var y = map(mouseY, 0, height, 1, 0);

        var point = createVector(x,y);
        data.push(point);
    }
}

function drawLine() {
    var x1 = 0;
    var y1 = m * x1 + b;
    var x2 = 1;
    var y2 = m * x2 + b;
    
    x1 = map(x1, 0, 1, 0, width);
    y1 = map(y1, 0, 1, height, 0);
    x2 = map(x2, 0, 1, 0, width);
    y2 = map(y2, 0, 1, height, 0);
    
    stroke(255,0,255);
    strokeWeight(2);
    line(x1, y1, x2, y2);
}