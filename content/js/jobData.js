var jobs = [];

var open = {
  company: 'Open System',
  subtitle: 'Software development internship',
  dateBegin: 'Jun 2017',
  dateEnd: 'ongoing',
  location: 'Salvador, BA',
  description: 'Open System is a serious company that has 20 years in the market providing integrated mobile solutions for big retail companies.',
  tasks: ['Initial development of big international, multi-language web-system, with mobile interface (C# Asp.Net MVC5 Xamarin SQLServer)']
};
jobs.push(open);

function populateJobs(){

  jobs.forEach((e) => {
    //console.log(e.company);
    var container = $('<div>',{ class: 'job' });

    var company = $('<h3>',{ html: e.company });
    var subtitle = $('<h4>',{ html: e.subtitle });
    var calendar = '<i class="fa fa-calendar" aria-hidden="true"></i> ';
    var datas = $('<p>',{ html: calendar + e.dateBegin +' - '+ e.dateEnd });
    var map = '<i class="fa fa-map-marker" aria-hidden="true"></i> ';
    var location = $('<p>',{ html: map + e.location });

    container.append(company,subtitle,datas,location);
    $('#jobs').append(container);
  });

}
