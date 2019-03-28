$(window).load(function() {
		function SortTable() {
		$('tbody').sortable({
		  connectWith: 'tbody',
		  update: function(event, ui) {
			    var changedList = this.id;
			    var order = $(this).sortable('toArray');
			    var positions = order.join(';');
				
			    console.log({
			      id: changedList,
			      positions: positions
			    });
		  }
		});
	};
	SortTable();
	});
