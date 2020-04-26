// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, true, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false ];
var arrayMetadata    = [ [ "1", "c.M1", "beta-cells_non-diabetic condition_donor1", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: female", "age (years): 67", "bmi (body mass index, kg/m2): 39.0", "Gene expression data from control subjects", "67", "39.0", "non-diabetic control", "female", "control" ], [ "2", "c.M2", "beta-cells_non-diabetic condition_donor2", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: female", "age (years): 65", "bmi (body mass index, kg/m2): 34.0", "Gene expression data from control subjects", "65", "34.0", "non-diabetic control", "female", "control" ], [ "3", "c.M3", "beta-cells_non-diabetic condition_donor3", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: female", "age (years): 62", "bmi (body mass index, kg/m2): 22.4", "Gene expression data from control subjects", "62", "22.4", "non-diabetic control", "female", "control" ], [ "4", "c.M4", "beta-cells_non-diabetic condition_donor4", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: male", "age (years): 60", "bmi (body mass index, kg/m2): 31.0", "Gene expression data from control subjects", "60", "31.0", "non-diabetic control", "male", "control" ], [ "5", "c.M5", "beta-cells_non-diabetic condition_donor5", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: male", "age (years): 59", "bmi (body mass index, kg/m2): 36.4", "Gene expression data from control subjects", "59", "36.4", "non-diabetic control", "male", "control" ], [ "6", "c.M6", "beta-cells_non-diabetic condition_donor6", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: male", "age (years): 52", "bmi (body mass index, kg/m2): 26.0", "Gene expression data from control subjects", "52", "26.0", "non-diabetic control", "male", "control" ], [ "7", "c.M7", "beta-cells_non-diabetic condition_donor7", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: male", "age (years): 54", "bmi (body mass index, kg/m2): 34.2", "Gene expression data from control subjects", "54", "34.2", "non-diabetic control", "male", "control" ], [ "8", "c.M8", "beta-cells_non-diabetic condition_donor8", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: female", "age (years): 64", "bmi (body mass index, kg/m2): 27.1", "Gene expression data from control subjects", "64", "27.1", "non-diabetic control", "female", "control" ], [ "9", "c.M9", "beta-cells_non-diabetic condition_donor9", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: male", "age (years): 57", "bmi (body mass index, kg/m2): 27.7", "Gene expression data from control subjects", "57", "27.7", "non-diabetic control", "male", "control" ], [ "10", "c.M10", "beta-cells_non-diabetic condition_donor10", "human beta-cells_non-diabetic", "disease: non-diabetic control", "gender: male", "age (years): 63", "bmi (body mass index, kg/m2): 28.5", "Gene expression data from control subjects", "63", "28.5", "non-diabetic control", "male", "control" ], [ "11", "d.M11", "beta-cells_diabetic condition_donor1", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: male", "age (years): 74", "bmi (body mass index, kg/m2): 26.0", "Gene expression data from type 2 diabetic subjects", "74", "26.0", "type 2 diabetes", "male", "diabetes" ], [ "12", "d.M12", "beta-cells_diabetic condition_donor2", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: female", "age (years): 68", "bmi (body mass index, kg/m2): 29.4", "Gene expression data from type 2 diabetic subjects", "68", "29.4", "type 2 diabetes", "female", "diabetes" ], [ "13", "d.M13", "beta-cells_diabetic condition_donor3", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: male", "age (years): 63", "bmi (body mass index, kg/m2): 29.4", "Gene expression data from type 2 diabetic subjects", "63", "29.4", "type 2 diabetes", "male", "diabetes" ], [ "14", "d.M14", "beta-cells_diabetic condition_donor4", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: male", "age (years): 64", "bmi (body mass index, kg/m2): NA", "Gene expression data from type 2 diabetic subjects", "64", "NA", "type 2 diabetes", "male", "diabetes" ], [ "15", "d.M15", "beta-cells_diabetic condition_donor5", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: female", "age (years): 74", "bmi (body mass index, kg/m2): 28.6", "Gene expression data from type 2 diabetic subjects", "74", "28.6", "type 2 diabetes", "female", "diabetes" ], [ "16", "d.M16", "beta-cells_diabetic condition_donor6", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: male", "age (years): 69", "bmi (body mass index, kg/m2): 33.6", "Gene expression data from type 2 diabetic subjects", "69", "33.6", "type 2 diabetes", "male", "diabetes" ], [ "17", "d.M17", "beta-cells_diabetic condition_donor7", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: male", "age (years): 61", "bmi (body mass index, kg/m2): 27.8", "Gene expression data from type 2 diabetic subjects", "61", "27.8", "type 2 diabetes", "male", "diabetes" ], [ "18", "d.M18", "beta-cells_diabetic condition_donor8", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: male", "age (years): 79", "bmi (body mass index, kg/m2): 25.9", "Gene expression data from type 2 diabetic subjects", "79", "25.9", "type 2 diabetes", "male", "diabetes" ], [ "19", "d.M19", "beta-cells_diabetic condition_donor9", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: male", "age (years): 56", "bmi (body mass index, kg/m2): 31.0", "Gene expression data from type 2 diabetic subjects", "56", "31.0", "type 2 diabetes", "male", "diabetes" ], [ "20", "d.M20", "beta-cells_diabetic condition_donor10", "human beta-cells_diabetic", "disease: type 2 diabetes", "gender: female", "age (years): 65", "bmi (body mass index, kg/m2): 46.0", "Gene expression data from type 2 diabetic subjects", "65", "46.0", "type 2 diabetes", "female", "diabetes" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
