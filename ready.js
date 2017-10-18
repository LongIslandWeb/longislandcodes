$(document).ready(function () {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'listMonth,month'
    },
  
   eventSources: [

      // your event source
      {
          url: 'https://api.liweb.group/events/fullcal', // use the `url` property
          
      }

      // any other sources...

  ]

  })

});