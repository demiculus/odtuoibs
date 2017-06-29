function logout() {
	
}

function formSubmit(item_code) {
	//alert(item_code);
    document.the_menu.hidden_submitID.value = item_code;
    document.the_menu.submit();
}

$(document).ready(function() {
	$("#menu-toggle-in").click(function(e) {
		document.getElementById("menu-toggle-out").style.display = "";
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
	});
	
	$("#menu-toggle-out").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
		document.getElementById("menu-toggle-out").style.display = "none";
	});
	
    $("#textEctsCheck").change(function() {
        if (this.checked) {
            $('.ects').css('display', '');
			} else {
            $('.ects').css('display', 'none');
		}
	});
	
    $("#textCourseCategoryCheck").change(function() {
        if (this.checked) {
            $('.coursecategory').css('display', '');
			} else {
            $('.coursecategory').css('display', 'none');
		}
	});
	
	$("#textSemesterNo").change(function() {
        if (this.checked) {
            $('.semesterNo').css('display', '');
			} else {
            $('.semesterNo').css('display', 'none');
		}
	});
	
	$("#textThesisProposalDefence").change(function() {
        if (this.checked) {
            $('.thesisProposalDefence').css('display', '');
			} else {
            $('.thesisProposalDefence').css('display', 'none');
		}
	});
	
	$("#textDoctoralQualifyingExam").change(function() {
        if (this.checked) {
            $('.doctoralQualifyingExam').css('display', '');
			} else {
            $('.doctoralQualifyingExam').css('display', 'none');
		}
	});
	
	
	/* $("#pdfTranscript").click(function(event, postData) {
        $.ajax({
		url: "main.php",
		data:"hidden_redir=TranscriptPDF",
		success:function(){
		alert("s");
		},
		error:function(){
		alert("e");
		}
        });
	});*/
	
    var urlParams;
    (window.onpopstate = function() {
        var match,
		pl = /\+/g,
		search = /([^&=]+)=?([^&]*)/g,
		decode = function(s) {
			return decodeURIComponent(s.replace(pl, " "));
		},
		query = window.location.search.substring(1);
		
        urlParams = {};
        while (match = search.exec(query))
		urlParams[decode(match[1])] = decode(match[2]);
	})();
	
    $("#lang_tr").on('click', function() {
        var pathName = window.location.pathname;
        pathName = pathName.replace('main.php', '');
        urlParams.lang = 'TR';
        $(this).attr('href', pathName + '?' + $.param(urlParams));
	});
	
    $("#lang_en").on('click', function() {
        var pathName = window.location.pathname;
        pathName = pathName.replace('main.php', '');
        urlParams.lang = 'EN';
        $(this).attr('href', pathName + '?' + $.param(urlParams));
	});
	
    $(".numericfield").keypress(function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
		}
	});
});