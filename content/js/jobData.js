var jobs = [];
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
    var description = $('<p>',{ html: e.description });
    var tasks =  $('<ul>');
    e.tasks.forEach((task) => {var currTask = $('<li>',{ html: task }); tasks.append(currTask);});

    container.append(company,subtitle,datas,location,description, tasks);
    $('#jobs').append(container);
  });

}

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

var viva = {
  company: 'Viva inovação',
  subtitle: 'Software development internship',
  dateBegin: 'Mar 2017',
  dateEnd: 'Jun 2017',
  location: 'Salvador, BA',
  description: 'Viva Inovação is a startup company that develops technology solutions focused on increasing productivity.',
  tasks: ['Great progress in a major project inside the company (C# Asp.Net MVC5 SQLServer)','Maintenance in PHP Yii framework project (MySQL PhpMyAdmin)']
};
jobs.push(viva);

var maquete = {
  company: 'Viva inovação',
  subtitle: 'Game development internship',
  dateBegin: 'Mar 2016',
  dateEnd: 'Mar 2017',
  location: 'Salvador, BA',
  description: 'Multi-subject Federal University project',
  tasks: ['From ground zero made an entire virtual world of my University Campus, including terrain, buildings, streets and main architecture characteristics','Participants from different areas of knowledge, like: arts, architecture, computer science']
};
jobs.push(maquete);
