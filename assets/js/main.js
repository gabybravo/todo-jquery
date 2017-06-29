$(document).ready(function () {
	//Agregar actividades a la lista:
	$('#list-items').html(localStorage.getItem('listItems'));
	$('.add-items').submit(function(event) {
		event.preventDefault();
		var item = $('#todo-list-item').val();
		if(item) {
			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>X</a><hr></li>");
			localStorage.setItem('listItems', $('#list-items').html());
			$('#todo-list-item').val("");
		}
	});

	//Tachar o marcar actividades cuando están hechas:
	$(document).on('change', '.checkbox', function() {
		if($(this).attr('checked')) {
			$(this).removeAttr('checked');
		} else {
			$(this).attr('checked', 'checked');
		}
		$(this).parent().toggleClass('completed');
		localStorage.setItem('listItems', $('#list-items').html());
	});

	//Eliminar actividades de la lista:
	$(document).on('click', '.remove', function() {
		$(this).parent().remove();
		localStorage.setItem('listItems', $('#list-items').html());
	});
});