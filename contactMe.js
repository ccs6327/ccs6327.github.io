$(document).ready(function() {
    $("#submitButton").click(function () {
        var missingComponents = [];
        if($("#inputName").val().length == 0) {
            missingComponents.push("name");
            $("#inputNameGroup").addClass("has-error");
        }
        if($("#inputEmail").val().length == 0) {
            missingComponents.push("email");
            $("#inputEmailGroup").addClass("has-error");
        }
        if($("#inputMessage").val().length == 0) {
            missingComponents.push("message");
            $("#inputMessageGroup").addClass("has-error");
        }
        if (missingComponents.length > 0) alert(getErrorMessage(missingComponents));
        else alert("Ops, it's not meant to work for now! :P")
    });
    
    $("#inputName").change(function() {
        $("#inputNameGroup").removeClass("has-error");
    });
    
    $("#inputEmail").change(function() {
        $("#inputEmailGroup").removeClass("has-error");
    });
    
    $("#inputMessage").change(function() {
        $("#inputMessageGroup").removeClass("has-error");
    });
});

function getErrorMessage(missingComponents) {
    var message = "Please fill in your "
    if (missingComponents.length > 2) {
        message += missingComponents.slice(0, missingComponents.length - 1).join(', ') + " and " + missingComponents[missingComponents.length - 1];
    } else if (missingComponents.length > 1) {
        message += missingComponents.join(" and ");
    } else {
        message += missingComponents[0];
    }
    return message;
}