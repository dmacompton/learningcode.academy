var _ = require('lodash');

var people = [{"id":1,"gender":"Female","first_name":"Sharon","last_name":"Robertson","email":"srobertson0@skyrock.com","ip_address":"162.70.0.56"},
    {"id":2,"gender":"Female","first_name":"Lori","last_name":"Harper","email":"lharper1@360.cn","ip_address":"94.144.123.229"},
    {"id":3,"gender":"Female","first_name":"Diana","last_name":"Nichols","email":"dnichols2@disqus.com","ip_address":"68.103.129.156"},
    {"id":4,"gender":"Male","first_name":"John","last_name":"Arnold","email":"jarnold3@slate.com","ip_address":"161.3.198.177"},
    {"id":5,"gender":"Male","first_name":"Samuel","last_name":"Stephens","email":"sstephens4@amazonaws.com","ip_address":"171.89.55.154"},
    {"id":6,"gender":"Female","first_name":"Ashley","last_name":"Wheeler","email":"awheeler5@oakley.com","ip_address":"99.191.114.255"},
    {"id":7,"gender":"Female","first_name":"Heather","last_name":"Hawkins","email":"hhawkins6@hatena.ne.jp","ip_address":"124.171.23.218"},
    {"id":8,"gender":"Female","first_name":"Nicole","last_name":"Oliver","email":"noliver7@symantec.com","ip_address":"62.229.33.172"},
    {"id":9,"gender":"Female","first_name":"Lisa","last_name":"Carter","email":"lcarter8@cbsnews.com","ip_address":"229.246.168.51"},
    {"id":10,"gender":"Female","first_name":"Beverly","last_name":"Fowler","email":"bfowler9@furl.net","ip_address":"203.225.52.53"},
    {"id":11,"gender":"Male","first_name":"Charles","last_name":"Bryant","email":"cbryanta@foxnews.com","ip_address":"243.216.114.171"},
    {"id":12,"gender":"Male","first_name":"Jeffrey","last_name":"Crawford","email":"jcrawfordb@accuweather.com","ip_address":"91.160.198.117"},
    {"id":13,"gender":"Female","first_name":"Mary","last_name":"Carroll","email":"mcarrollc@howstuffworks.com","ip_address":"5.114.118.13"},
    {"id":14,"gender":"Female","first_name":"Julia","last_name":"Shaw","email":"jshawd@discovery.com","ip_address":"15.131.188.223"},
    {"id":15,"gender":"Male","first_name":"Stephen","last_name":"Wagner","email":"swagnere@google.de","ip_address":"232.16.37.95"},
    {"id":16,"gender":"Female","first_name":"Michelle","last_name":"Freeman","email":"mfreemanf@ebay.com","ip_address":"23.132.245.77"},
    {"id":17,"gender":"Male","first_name":"Randy","last_name":"Pierce","email":"rpierceg@free.fr","ip_address":"222.66.100.69"},
    {"id":18,"gender":"Female","first_name":"Nicole","last_name":"Garcia","email":"ngarciah@vinaora.com","ip_address":"198.140.246.102"},
    {"id":19,"gender":"Female","first_name":"Ruby","last_name":"Rogers","email":"rrogersi@sfgate.com","ip_address":"24.153.143.222"},
    {"id":20,"gender":"Female","first_name":"Heather","last_name":"Welch","email":"hwelchj@wordpress.com","ip_address":"204.37.19.153"}];

var femaleCount = _.filter(people, {gender: "Female"}).length;
console.log('Female = ' + femaleCount);