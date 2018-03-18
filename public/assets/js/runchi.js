    
    $('#submit-run').on('click', function () {
        event.preventDefault();

        var userData = {
            user: $('#user').val(),
            date: $('#date').val().trim(),
            time: $('#time').val().trim(),
            address: $('#addr').val().trim(),
            pace: $('#pace').val().trim(),
            message: $('#message').val().trim()
        };
        

        // AJAX post data
        $.post('/api/runs', userData, function (data) {
            console.log("Run added");
            console.log(data);
        });
        
        $('#user').val('');
        $('#date').val('');
        $('#time').val('');
        $('#addr').val('');
        $('#pace').val('');
        $('#message').val('');

        
    });
