    $(function() {
        $("input").focus(function() {
            $(this).parent().find("span").attr("style", "font-weight: bold; color: black;");
        });
        $("input").focusout(function() {
            $(this).parent().find("span").attr("style", "");
        });

        $('html, body').animate({
		    scrollTop: $('.cont').offset().top
	    }, 0);
    });

        document.querySelector('.img__btn').addEventListener('click', function() {
            document.querySelector('.cont').classList.toggle('s--signup');
        });

        {{ trigger|safe }}