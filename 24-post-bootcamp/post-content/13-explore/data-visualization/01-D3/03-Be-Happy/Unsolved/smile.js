//create an svg of of a smiley face and append it to the page using d3.

//select the body and append a new svg element
var svg = d3.select("body").append("svg");
//specify the size of the svg container
svg.attr("height","500px").attr("width","500px")
//create the main circle and make it gold
svg.append("circle").attr("fill","gold").attr("r",120).attr("cx",128).attr("cy",128)
//create the eyes
svg.append("circle").attr("cx","90").attr("cy","100").attr("r","10")
svg.append("circle").attr("cx","165").attr("cy","100").attr("r","10")
//coordinates for the smile's curve
var smileCurve = "M100, 160 Q128, 190 156, 160";

//create a svg path with the curve
svg.append("path").attr("d",smileCurve).attr("stroke","black").attr("stroke-width","10px").attr("stroke-linecap","round")


