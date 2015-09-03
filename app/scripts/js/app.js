$(document).ready(function() {
	var listo = [];
	var Task = function(task){
		this.task = task;
		this.id = 'new';
	};
	
	$('#newTaskForm').hide();
	
	var addTask = function(task) {
		if(task) {
			console.log(task);
			task = new Task(task);
			listo.push(task);
			
			$('#newItemInput').val('');
			$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon-arrow-right"></span></li></a>')
			
		}
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	};
	
	
	$('#saveNewItem').on('click', function(e) {
		e.preventDefault();
		var task = $('#newItemInput').val().trim();
		addTask(task);
	});
	
	//opens form
	$('#newListItem').on('click', function() {
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	});
	
	//closes form
	$('#cancel').on('click', function(e) {
		e.preventDefault();
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	});
	
	$(document).on('click', '#item', function(e) {
		e.preventDefault();
	});
	
	$(document).on('click', '#item', function(e){
		e.preventDefault();
		var task = this;
		this.id = 'inProgress';
		$('#currentList').append(this);
	});
	
	$(document).on('click', '#inProgress', function(e) {
		e.preventDefault();
		var task = this;
		this.id = 'archived';
		$('#archivedList').append(this);
		
	})
	
	$(document).on('click', '#archived', function (e) {
        e.preventDefault();
        var task = this;
		this.id = 'archived'
		$(this).remove();
    });

	
	
	
})