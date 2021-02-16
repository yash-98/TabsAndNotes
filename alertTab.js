let btnAlert = document.getElementById('sendAlert');
let listRadio = document.getElementsByName('listType');
let tabList = document.getElementById('tabList');

var tabNum;
var tabsArray;
var tabSelected;

document.addEventListener('DOMContentLoaded', postContentLoad, false);

function postContentLoad () {

    chrome.tabs.query({currentWindow: true}, function (tabs){
        tabsArray = tabs;
        tabNum = tabs.length;
    });

    btnAlert.addEventListener('click', onclick, false);

    listRadio.forEach(radio => {
        radio.addEventListener('click', createTabList);
    });
};

function onclick (){  
    tabSelected = parseInt(tabList.value) - 1; 
    chrome.tabs.sendMessage(tabsArray[tabSelected].id, "The Data has been sent as an alert.");
};

function createTabList (){
    var i;
    
    for(i = 0; i < tabsArray.length; i++) {

        var optionVal;
        
        if(listRadio[0].checked){
            optionVal = new Option((i+1), (i+1));
        }

        tabList.appendChild(optionVal);
    }
};