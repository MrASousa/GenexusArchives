// This file has an example about how to work with User Controls on Genexus 16. It may require some edits.

<Definition auto="false">
  <Property Name="newIndex" Type="string" Default=""/>
  <Property Name="oldIndex" Type="string" Default=""/>
  <Property Name="change" Type="string" Default=""/>
  <Event Name="OnClick" />
  <script name="Joseph" When="BeforeShow">

var myThis = this;

$("tbody").sortable({
    /*stop: function(event, ui) {
        alert("New position: " + ui.item.index());
    }*/
    start: function(e, ui) {
        // creates a temporary attribute on the element with the old index
        $(this).attr('data-previndex', ui.item.index());
		var oldY = ui.item.find("span[id*=ORDEM]").text();
		
		var Oldie = $(ui.item).find("span[id*=ORDEM]").text();
		myThis.OldIndex = Oldie;
		
    },
    update: function(e, ui) {
        // gets the new and old index then removes the temporary attribute
        var newIndex = ui.item.index();
        var oldIndex = $(this).attr('data-previndex');
        var element_id = ui.item.attr('id');
		
		$(this).data("old_position",$(this).sortable("toArray"));
		$(this).data("new_position",$(this).sortable("toArray"));
		console.log($(this).data("old_position"));
		console.log($(this).data("new_position"));

		
		var newY = $(ui.item).find("span[id*=ORDEM]").text();
		console.log('New  = ' + newY);
				
        //alert('id of Item moved = '+element_id+' old position = '+oldIndex+' new position = '+newIndex);
		var a = 'id of Item moved = '+element_id+' old position = '+oldIndex+' new position = '+newIndex;
		
		
		myThis.newIndex1 = newIndex;
		myThis.oldIndex1 = oldIndex;
		myThis.change = a;
		myThis.OnClick();
        $(this).removeAttr('data-previndex');
    }
});
$("tbody").disableSelection();
</script>
</Definition>





