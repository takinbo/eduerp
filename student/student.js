﻿/* 
 * @file
 *
 * Common js scripts for student module
 * Handle pdf agreement download after successful file actions
 */	

Drupal.behaviors.student = function(context) {
	
	// do yoyo if selected value is not nigeria, show state and lga
	
	var $country_field = $('#edit-field-profile-country-name-value');
	var $state_field = $('#edit-field-profile-state-name-origin-value-wrapper');
	var $lga_field = $('#edit-field-profile-lga-name-value-wrapper');

	$country_field.change( function () { 
		if($(this).val() != 'Nigeria') {
			//alert('yes');
			$state_field.hide("slow");
			$lga_field.hide("slow");
		} else {
			$state_field.show("slow");
			$lga_field.show("slow");
		}
	} );
	
	// ensure title case is maintained in name fields
	
	var lastname_field = $('#edit-field-profile-last-name-0-value');
	var firstname_field = $('#edit-field-profile-first-name-0-value');

	var arr = ['edit-field-profile-last-name-0-value-wrapper', 'edit-field-profile-first-name-0-value-wrapper'];
	
	// do a foreach if possible on arr
	$.each(arr, function(i, n) {
		/*$(i).blur(function(checkfield) {
			checkNameFields($(this).val());
		});*/
		$('#' + arr[i]).append('<div class="' + arr[i] + ' field-status"></div>');
	});
	
	lastname_field.blur(function() {
		var field = lastname_field;
		checkNameFields(field, $(this).val());
	});
	firstname_field.blur(function() {
		var field = firstname_field;
		checkNameFields(field, $(this).val());
	});
	
	
	// the regex
	var checkNameFields = function(field, value) {
		var name_regex = /(^[A-Z]\w+(\s)*)/;
		if(field == lastname_field && !(name_regex.test(value))) {
				$('.edit-field-profile-last-name-0-value-wrapper').text('incorrent entry. Example John');
				$('.edit-field-profile-last-name-0-value-wrapper').show();
				//$('#lastname').css({width: "80px", height: "80px", float: "right"});
				return false;
			} else {
				$('.edit-field-profile-last-name-0-value-wrapper').hide();
			}
			if(field == firstname_field && !(name_regex.test(value))) {
				$('.edit-field-profile-first-name-0-value-wrapper').text('incorrent entry. Example John');
				$('.edit-field-profile-first-name-0-value-wrapper').show();
				return false;
			} else {
				$('.edit-field-profile-first-name-0-value-wrapper').hide();
			}
			return true;
	}
}

// $.each(Drupal.setting.SelectedRegFormFields).blur(function() {
// perform checkNameFields
//}

