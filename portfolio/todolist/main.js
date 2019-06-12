$(document).ready(function(){
	
	//create
	$('#add-todo').click(function(e){
		e.preventDefault();
		var todoItem = prompt('Plz add a todo item.');
		if (todoItem !== null){
			if (todoItem ===''){
				alert('You must enter something!');
			} else{
				var cloneTodo = $('#todo-list li').eq(0).clone();
				cloneTodo.find('[type="checkbox"]').prop('checked',false);
				cloneTodo.find('.content').html(todoItem);
				cloneTodo.find('[type="text"]').val(todoItem);
				$('#todo-list').append(cloneTodo);
			}
		}
	});
	
	//update
	$('#todo-list').on('dblclick click','li',function(e){
			$(this).addClass('editing');
			$(this).find('[type="text"]').focus();
	});
	
	$('#todo-list').on('blur keyup','[type="text"]',function(e){
		if (event.type === 'blur' || e.keyCode === 13){
			var content = $(this).val();
			$(this).siblings('.content').html(content);
			$(this).closest('li').removeClass('editing');
		}
	});
	
	//strike out to-do item
	$('#todo-list').on('click','[type="checkbox"]',function(e){
		if ($(this).prop('checked')==true){
			$(this).siblings('.content').addClass('done');
		} else{
			$(this).siblings('.content').removeClass('done');
		}
	});
	
	//delete
	$('#todo-list').on('click','[data-action="delete"]',function(e){
		e.preventDefault();
		var result = confirm('Are you sure?');
		if(result){
			$(this).closest('li').remove();
		}
	});
	
});
