$.getJSON( "https://api.airtable.com/v0/appShl1joS54GrMsn/Table%201?api_key=keyUDsn2UtnN1DX1h", function( data ) {
  var items = [];
  $.each( data.records, function( index, val ) { console.log(val.fields["Name"], ["Location"])
    items.push( "<li id='" + val.id + "'>" + val.fields["Name"]+" "  + val.fields["Location"]+ " " + val.fields["History"] + "</li>" );
  });

  $( "<ol/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
