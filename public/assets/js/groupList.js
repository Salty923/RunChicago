
var runGroups =[{
    id: 1,
    name: 'Aditi',
    location: 'chicago',
    runners: 12
},
{
    id: 1,
    name: 'Ryan',
    location: 'chicago',
    runners: 6
},
{
    id: 2,
    name: 'Scott',
    location: 'chicago',
    runners: 1
}

];

var runList = $('#runList');

for (let i = 0; i < runGroups.length; i++) {
    var groupDiv = $(`<div class='run_list'></div>`);
    var groupName = $(`<h5> Run Group Name: ${runGroups[i].name} </h5>`);
    var runLocation = $(`<h5> Location: ${runGroups[i].location}</h5>`);
    var numRunners = $(`<h5> Number of Runners: ${runGroups[i].runners}</h5>`)
    
    runList.append(groupDiv);
    groupDiv.append(groupName);
    groupDiv.append(runLocation);
    groupDiv.append(numRunners);
    
}