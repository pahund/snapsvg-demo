var svg = Snap('#svg');

var circle = svg.circle(100,100,100);

circle.attr({
    fill: "orange",
    stroke: "black",
    strokeWidth: "5"
});

circle.hover(function () {
this.attr({
    fill: "blue"
});
    
},
function () {this.attr({
    fill: "orange"
});
    
}

);

circle.drag();
