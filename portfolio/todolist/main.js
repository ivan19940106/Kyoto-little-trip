$(document).ready(function(){
	
	//create
	$('#add-todo').click(function(e){
		var todoItem = prompt('Plz add a todo item.');
		var cloneTodo = $('#todo-list li').eq(0).clone();
		cloneTodo.find('[type="checkbox"]').prop('checked',false);
		cloneTodo.find('.content').html(todoItem);
		cloneTodo.find('[type="text"]').val(todoItem);
		$('#todo-list').append(cloneTodo);
	});
	
	//update
	$('#todo-list').on('dblclick tap','li',function(e){
		if (event.type === 'dblclick' || event.type === 'tap'){
			$(this).addClass('editing');
			$(this).find('[type="text"]').focus();
		}
	});
	
	$('#todo-list').on('blur keyup','[type="text"]',function(e){
		if (event.type === 'blur' || e.keyCode === 13){
			var content = $(this).val();
			$(this).siblings('.content').html(content);
			$(this).closest('li').removeClass('editing');
		}
	});
	
	//delete
	$('#todo-list').on('click','[data-action="delete"]',function(e){
		var result = confirm('Are you sure?');
		if(result){
			$(this).closest('li').remove();
		}
	});
	
});
