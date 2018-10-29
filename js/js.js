
$( document ).ready(function() {

	var reference = document.querySelector('.myReference');

	$(reference).click(function() {

		var world = $('<span class="popper">World</span>');
		$('body').append(world);

		var popper = new Popper(reference, world, {

			placement: 'right',
			modifiers: {

				flip: {behavior: ['right', 'bottom', 'top']},

			},

		});

	});
});