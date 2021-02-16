let btnAlert = document.getElementById('sendAlert');
let listRadio = document.getElementsByName('listType');
let tabList = document.getElementById('tabList');
let alertTabMessage = document.getElementById('alertText');

var tabNum;
var tabsArray;
var tabSelected;

document.addEventListener('DOMContentLoaded', postContentLoadAlert, false);

function postContentLoadAlert () {

    chrome.tabs.query({currentWindow: true}, function (tabs){
        tabsArray = tabs;
        tabNum = tabs.length;
    });

    btnAlert.addEventListener('click', onclick, false);

    listRadio.forEach(radio => {
        radio.addEventListener('click', createTabList);
    });
};

function createTabList (){
    var i;
    
    while(tabList.options.length > 0){
        tabList.options.remove(0);
    }
    
    for(i = 0; i < tabsArray.length; i++) {

        var optionVal;
        
        if(listRadio[0].checked){
            optionVal = new Option((i+1), (i+1));
        }

        tabList.appendChild(optionVal);
    }
};

function onclick (){  
    tabSelected = parseInt(tabList.value) - 1; 
    chrome.tabs.sendMessage(tabsArray[tabSelected].id,{
        type: "alert",
        value: alertTabMessage.value
    });
};