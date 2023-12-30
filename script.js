//  var resources= [
//   {
//     id: 'a',
//     title: 'Room A'
//   },
//   {
//     id: 'b',
//     title: 'Room B'
//   },
//   {
//     id: 'c',
//     title: 'Room C'
//   }
// ];
//  var events= [
//   {
//     title: 'Harshii',
//     start: '2023-12-29T10:30:00',
//     end :'2023-12-29T11:00:00',
//     description:'Meeting',
//     allDay : false,
//     resourceId:'a'
//   }

// ]


var calendarEl = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',
    //  resources:resources,
    //  events : events,
     editable : true,
       nowIndicator : true
});
calendar.render();

$("#btF").click(a=>{
  var dId= $("#dId").val();
  var dname =$("#dName").val();
  var dObj ={
    id : dId,
    title : dname
  }
  console.log(dObj);
  calendar.addResource(dObj);

});
  // EVENTS

  $("#eBtn").click(a=>{
    var eName= $("#eName").val();
    var sDate =$("#sDate").val();
    var eDate =$("#eDate").val(); 
    var dd =$("#dd").val();
    var eObj = {
      title : eName,
      start : sDate,
      end : eDate,
      resourceId : dId
    }
  
      
    
  
    console.log(eObj);
    calendar.addEvent();
  
    });
