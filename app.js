// https://www.omnicalculator.com/other/dating-theory

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const maxnumberofdatesRadio = document.getElementById('maxnumberofdatesRadio');
const iwanttofindidealpartnerinRadio = document.getElementById('iwanttofindidealpartnerinRadio');
const illgoonRadio = document.getElementById('illgoonRadio');

let maxnumberofdates;
let iwanttofindidealpartnerin = v1;
let illgoon = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

maxnumberofdatesRadio.addEventListener('click', function() {
  variable1.textContent = 'I want to find ideal partner in';
  variable2.textContent = 'I\'ll go on';
  iwanttofindidealpartnerin = v1;
  illgoon = v2;
  result.textContent = '';
});

iwanttofindidealpartnerinRadio.addEventListener('click', function() {
  variable1.textContent = 'Max number of dates';
  variable2.textContent = 'I\'ll go on';
  maxnumberofdates = v1;
  illgoon = v2;
  result.textContent = '';
});

illgoonRadio.addEventListener('click', function() {
  variable1.textContent = 'Max number of dates';
  variable2.textContent = 'I want to find ideal partner in';
  maxnumberofdates = v1;
  iwanttofindidealpartnerin = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(maxnumberofdatesRadio.checked)
    result.textContent = `Max number of dates = ${computemaxnumberofdates().toFixed(2)}`;

  else if(iwanttofindidealpartnerinRadio.checked)
    result.textContent = `I want to find ideal partner in = ${computeiwanttofindidealpartnerin().toFixed(2)}`;

  else if(illgoonRadio.checked)
    result.textContent = `I'll go on = ${computeillgoon().toFixed(2)}`;
})

// calculation

function computemaxnumberofdates() {
  return (Number(iwanttofindidealpartnerin.value) * Number(illgoon.value)) * 12;
}

function computeiwanttofindidealpartnerin() {
  return (Number(maxnumberofdates.value) / 12) / Number(illgoon.value);
}

function computeillgoon() {
  return (Number(maxnumberofdates.value) / 12) / Number(iwanttofindidealpartnerin.value);
}