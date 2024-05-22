/*
 *
 * @author Sakri Rosenstrom
 *
 * http://www.sakri.net
 * https://twitter.com/sakri
 * http://www.devstate.net
 * Sources for this can be found at:
 * https://github.com/sakri/sakriNetCommonJS
 */

(function (window){

    var Sakri = window.Sakri || {};
    window.Sakri = window.Sakri || Sakri;

	Sakri.Geom = {};

    //==================================================
    //=====================::POINT::====================
    //==================================================

    Sakri.Geom.Point = function (x,y){
        this.x = isNaN(x) ? 0 : x;
        this.y = isNaN(y) ? 0 : y;
    };

	//==================================================
	//===================::RECTANGLE::==================
	//==================================================

	Sakri.Geom.Rectangle = function (x, y, width, height){
		this.update(x, y, width, height);
	};
	
	Sakri.Geom.Rectangle.prototype.update = function(x, y, width, height){
		this.x = isNaN(x) ? 0 : x;
		this.y = isNaN(y) ? 0 : y;
		this.width = isNaN(width) ? 0 : width;
		this.height = isNaN(height) ? 0 : height;
	};


}(window));



(function (window){

    var Sakri = window.Sakri || {};
    window.Sakri = window.Sakri || Sakri;

    Sakri.BitmapUtil = {};

    //TODO : rename "canvas" to "source", if it's an img, create a canvas and draw the img into it
    Sakri.BitmapUtil.getFirstNonTransparentPixelTopDown = function(canvas){
        var context = canvas.getContext("2d");
        var y, i, rowData;
        for(y=0; y<canvas.height; y++){
            rowData = context.getImageData(0, y, canvas.width, 1).data;
            for(i=0; i<rowData.length; i+=4){
                if(rowData[i+0] + rowData[i+1] + rowData[i+2] + rowData[i+3] > 0){
                    return new Sakri.Geom.Point(i/4, y);
                }
            }
        }
        return null;
    };

    Sakri.BitmapUtil.getFirstNonTransparentPixelBottomUp = function(canvas){
        var context = canvas.getContext("2d");
        var y, i, rowData;
        for(y = canvas.height - 1; y>-1; y--){
            rowData = context.getImageData(0, y, canvas.width, 1).data;
            for(i=0; i<rowData.length; i+=4){
                if(rowData[i+0] + rowData[i+1] + rowData[i+2] + rowData[i+3] > 0){
                    return new Sakri.Geom.Point(i/4, y);
                }
            }
        }
        return null;
    };

    Sakri.BitmapUtil.getFirstNonTransparentPixelLeftToRight = function(canvas){
        var context = canvas.getContext("2d");
        var x, i, colData;
        for(x = 0; x < canvas.width; x++){
            colData = context.getImageData(x, 0, 1, canvas.height).data;
            for(i=0; i<colData.length; i+=4){
                if(colData[i+0] + colData[i+1] + colData[i+2] + colData[i+3] > 0){
                    return new Sakri.Geom.Point(x, i/4);
                }
            }
        }
        return null;
    };

    Sakri.BitmapUtil.getFirstNonTransparentPixelRightToLeft = function(canvas){
        var context = canvas.getContext("2d");
        var x, i, colData;
        for(x = canvas.width-1; x >-1; x--){
            colData = context.getImageData(x, 0, 1, canvas.height).data;
            for(i=0; i<colData.length; i+=4){
                if(colData[i+0] + colData[i+1] + colData[i+2] + colData[i+3] > 0){
                    return new Sakri.Geom.Point(x, i/4);
                }
            }
        }
        return null;
    };

    //cuts out rows and columns of pixels without color data from the top, bottom, left and right
    Sakri.BitmapUtil.trimImage = function(image){
        var trimCanvas = Sakri.BitmapUtil.createTrimmedCanvas(image);
        image.src = trimCanvas.toDataURL();
    };

    Sakri.BitmapUtil.trimCanvas = function(canvas){
        var trimCanvas = Sakri.BitmapUtil.createTrimmedCanvas(canvas);
        canvas.width = trimCanvas.width;
        canvas.height = trimCanvas.height;
        var context = canvas.getContext("2d");
        context.drawImage(trimCanvas, 0, 0);
    };

    Sakri.BitmapUtil.getCanvasTrimRectangle = function(canvas){
        var rect = new Sakri.Geom.Rectangle();
        rect.x = Sakri.BitmapUtil.getFirstNonTransparentPixelLeftToRight(canvas).x;
        rect.y = Sakri.BitmapUtil.getFirstNonTransparentPixelTopDown(canvas).y;
        rect.width = Sakri.BitmapUtil.getFirstNonTransparentPixelRightToLeft(canvas).x -  rect.x + 1;
        rect.height = Sakri.BitmapUtil.getFirstNonTransparentPixelBottomUp(canvas).y - rect.y + 1;
        return rect;
    }
    
    Sakri.BitmapUtil.createTrimmedCanvas = function(imageOrCanvas){
        var trimCanvas = document.createElement("canvas");
        var trimContext = trimCanvas.getContext("2d");
        trimCanvas.width = imageOrCanvas.width;
        trimCanvas.height = imageOrCanvas.height;
        trimContext.drawImage(imageOrCanvas, 0, 0);
        var rect = Sakri.BitmapUtil.getCanvasTrimRectangle(trimCanvas);
        //console.log("createTrimmedCanvas() ", rect.toString());
        trimCanvas.width = rect.width;
        trimCanvas.height = rect.height;
        trimContext = trimCanvas.getContext("2d");
        trimContext.drawImage(imageOrCanvas, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
        return trimCanvas;
    };

}(window));



var readyStateCheckInterval = setInterval( function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        init();
    }
}, 10);

var canvas;
var context;
var sourceFontSizes = [18, 24, 30, 46,80];
var spaceCharacter = ".";

function init(){
    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    document.getElementById("sizeSelect").selectedIndex = 2;
    createComment();
}

function createComment(){
    var sourceFontSize = sourceFontSizes[document.getElementById("sizeSelect").selectedIndex];
    var text = document.getElementById("textInput").value;
    context.font = "bold "+sourceFontSize+"px sans-serif";
    canvas.width = context.measureText(text).width;
    canvas.height = sourceFontSize*2;
    context.textBaseline = "top";
    context.font = "bold "+sourceFontSize+"px sans-serif";
    context.fillStyle = "#FF0000";
    context.fillText(text, 0, 0);

    var charPositions = [];
    var width, i, x=0;
    for(var i = 0; i< text.length; i++){
        width = context.measureText(text.charAt(i)).width;
        x += width;
        charPositions[i] = x;
    }

    Sakri.BitmapUtil.trimCanvas(canvas);
    context = canvas.getContext("2d");
    var commentString = getBlankLine(canvas.width);

    var j, rowData;
    for(i=0; i<canvas.height; i++){
        rowData = context.getImageData(0, i, canvas.width, 1).data;
        commentString+=("//"+spaceCharacter);
        for(j=0; j<rowData.length; j+=4){
            if(rowData[j+0] + rowData[j+1] + rowData[j+2] + rowData[j+3] > 0){
                commentString+=getCharacterForPixelPosition(j/4, charPositions, text);
            }else{
                commentString+=spaceCharacter;
            }
        }
        commentString+=(spaceCharacter+spaceCharacter+"<br/>");
    }
    commentString += getBlankLine(canvas.width);
    document.getElementById("hugeComment").innerHTML = commentString;
    return null;
}

function getCharacterForPixelPosition(pixelX, charPostions, word){
    for(var i=0; i<charPostions.length; i++){
        if(pixelX<charPostions[i]){
            return word.charAt(i);
        }
    }
    return "";//this should never happen
}

function getBlankLine(width){
    var line = "//"+spaceCharacter;
    for(var i=0; i<width; i++){
        line+=spaceCharacter;
    }
    return (line+spaceCharacter+spaceCharacter+"<br/>");
}

//I have no idea why, but calling createComment from the button
//fails to call createComment().  WTF?!
function wtf(){
    createComment();
}