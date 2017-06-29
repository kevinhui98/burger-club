$(document).ready(function() {
    $('#myModal').on('show.bs.modal', function (event) {
    
        var modal = $(this)
        modal.find('#content').html("Hello " + $('#name').val() + " thank you for signing up! We will send an email to " + $('#email').val() + " shortly");
    });
    
});