const url = 'https://api.kawalcorona.com/';


$.get(url + 'indonesia', function (data, status) {
    let d = data[0];
    $('#positif').html(d.positif);
    $('#sembuh').html(d.sembuh);
    $('#meninggal').html(d.meninggal);
});

$.get(url + 'positif', function (data, status) {
    $('#glo-positif').html(data.value)
});

$.get(url + 'sembuh', function (data, status) {
    $('#glo-sembuh').html(data.value)
});

$.get(url + 'meninggal', function (data, status) {
    $('#glo-meninggal').html(data.value)
});


$.get(url + 'indonesia/provinsi', function (data, status) {
    var html = '';
    let no = 1;
    //console.log(data);
    data.forEach(d => {
        html += '<tr>' +
            '<td>' + no + '</td>' +
            '<td>' + d.attributes.Provinsi + '</td>' +
            '<td>' + d.attributes.Kasus_Posi + '</td>' +
            '<td>' + d.attributes.Kasus_Semb +'</td>' +
            '<td>' + d.attributes.Kasus_Meni + '</td>' +
            '<tr>';
        no++;
    })
    
    $('#show_data').html(html);
});
