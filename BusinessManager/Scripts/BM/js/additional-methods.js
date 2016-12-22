$.validator.addMethod(
               "regex",
               function (value, element, regexp) {
                   var re = new RegExp(regexp);
                   return this.optional(element) || re.test(value);
               },
               "Please check your input"
           );



AddAntiForgeryToken = function (data) {
    data.__RequestVerificationToken = $('input[name=__RequestVerificationToken]').val();
    return data;
};

function getFormatedDate(day, month, year) {
    var date = "";

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month_num = months.indexOf(month) + 1;

    var month = "";

    if (month_num < 10)
        month = "0" + month_num;
    else
        month = month_num;

    date += month + "/";

    if (day < 10)
        date += "0" + day + "/";
    else
        date += day + "/";

    date += year;


    return date;

}

function Errify() {
    $('label.error').css('color', 'red');
}

function checkRegex(regex, e) {
    var regex = new RegExp(regex);
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
}

$.validator.addMethod('customEmail', function (value, element) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(value);
}, "Please enter a valid email address");

$.validator.addMethod('EmailOrPhone', function (value, element) {
   
    var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var phonePattern = new RegExp(/^((\+44)|0)7\d{3}[ ]?\d{6}$/);

    return (emailPattern.test(value) || phonePattern.test(value));
});


$.validator.addMethod("ValidLink", function (value, element) {
    return checkUrl();
}, "Invalid URL");

$.validator.addMethod("CategoryRequired", function (value, element) {
    return validateCategories();
}, "Please select at least one category.");

//======= Views/App/Add ===============//
function validateCategories() {
    var catandSubCat = $('#CategoriesandSubCategories').val();
    if (catandSubCat.trim() == null || catandSubCat.trim() == "") {
        $("#errCatandSubCat").show();
        return false;
    }
    else {
        $("#errCatandSubCat").hide();
        return true;
    }
}

function validateFileExtnesion(extensions, input) {
    for (var i = 0; i < input.files.length; i++) {
        var oInput = input.files[i];

        var sFileName = input.value;
        if (sFileName.length > 0) {
            var fileIndex = sFileName.lastIndexOf(".");
            if (fileIndex == -1) {
                return true;
            }
            var blnValid = false;
            for (var j = 0; j < extensions.length; j++) {
                var sCurExtension = extensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;

                    break;
                }
            }

            if (!blnValid) {
                input.value = "";
                return false;
            }
        }

    }

    return true;
}

function checkUrl() {

    var platformId = $("select[name=PlatformId]").val();
    var link = $('#DownloadLink').val();
    if (link == "") {
        $('label.uerror').hide();
        return false;
    }
    var isValid = false;

    if (platformId == 1) {

        var expression = /^((http|https)\:\/\/)?(www\.)?itunes.apple.com\//;
        if (expression.test(link)) {
            isValid = true;
            $('label.uerror').hide();
        } else {
            $('label.uerror').remove();
            $('label.error').remove();
            $('#DownloadLink').next().append("<label class='uerror'>Invalid Appstore URL</label>");
            isValid = false;
        }

    } else if (platformId == 2) {

        var expression = /^((http|https)\:\/\/)?(www\.)?play.google.com\//;
        if (expression.test(link)) {
            isValid = true;
            $('label.uerror').hide();
        } else {
            $('label.uerror').remove();
            $('label.error').remove();
            $('#DownloadLink').next().append("<label class='uerror'>Invalid Playstore URL</label>");
            isValid = false;
        }

    }

    return isValid;
}

function validateFileSize(input, fileSize) {
    if (input.files[0].size / 1024 > fileSize) {
        input.value = "";
        alert("File size should be less than " + fileSize)
        return false;
    }
    return true;
}

function previewImage(input, previewer, fileExist) {
    fileExist.value = "false";
    var _validFileExtensions = [".jpg", ".jpeg", ".png"];
    if (!validateFileExtnesion(_validFileExtensions, input)) {
        return false;
    }
    if (input.files && input.files[0]) {
        if (fileType.toLowerCase() == "icon") {
            if (!validateFileSize(input, 500))
                return false;
        }
        else {
            if (!validateFileSize(input, 1000))
                return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);

        reader.onload = function (e) {
            var img = new Image();
            $(img).load(function () {

                $(previewer).attr('src', e.target.result);
                fileExist.value = "true";
                $(this).unbind();
            });

            img.src = e.target.result;
        };


    }
    else {
        fileExist.value = "false";
        $(previewer).attr('src', "");
    }
}

function onDescriptionChange(textArea) {
    $(textArea).val($(textArea).val().replace(/\n\n/g, "\n"))
    $('#AppPlatformDescription').val($(textArea).val().replace(/\n/g, "###"))
    console.log($('#AppPlatformDescription').val());
}

function formatedAjaxErrorMsgs(jqXHR, exception) {
    if (jqXHR.status === 0) {
                                               
        swal({
            title: "ORCHA",
            text: "Connection error, please try again."
        });
               
    } else if (jqXHR.status == 404) {
                                              
        swal({
            title: "ORCHA",
            text: "Requested page not found."
        });
              
    } else if (jqXHR.status == 500) {
                                             
        swal({
            title: "ORCHA",
            text: "An error occurred while processing request. Please try again."
        });
    } else if (exception === 'parsererror') {
                                              
        swal({
            title: "ORCHA",
            text: "Requested parsing failed."
        });
              
    } else if (exception === 'timeout') {
                                              
        swal({
            title: "ORCHA",
            text: "Request Time out."
        });
               
    } else if (exception === 'abort') {
                                               
        swal({
            title: "ORCHA",
            text: "Request aborted."
        });
               
    } else {
                                             
        swal({
            title: "ORCHA",
            text: "Request aborted." + jqXHR.responseText
        });
               
    }
}

function customJQueryAjaxMsgs(jqXhr, exception, selector) {
    if (jqXHR.status === 0) {
        $(selector).text("Connection error, please try again.");
        setTimeout($.unblockUI, 2000);
    } else if (jqXHR.status == 404) {

        $(selector).text("Requested page not found.");
        setTimeout($.unblockUI, 2000);
    } else if (jqXHR.status == 500) {

        $(selector).text("An error occurred while processing request. Please try again.");
        setTimeout($.unblockUI, 2000);
    } else if (exception === 'parsererror') {

        $(selector).text("Requested parsing failed.");
        setTimeout($.unblockUI, 2000);
    } else if (exception === 'timeout') {

        $(selector).text("Request Time out.");
        setTimeout($.unblockUI, 2000);

    } else if (exception === 'abort') {

        $(selector).text("Request aborted.");
        setTimeout($.unblockUI, 2000);
    } else {

        $(selector).text("Request aborted." + jqXHR.responseText);
        setTimeout($.unblockUI, 2000);

    }
}

function userRecordForHubSpot(form, hubSpotFormId) {
    $("#firstname-" + hubSpotFormId).val(form.find('input[name="FirstName"]').val());
    $("#lastname-" + hubSpotFormId).val(form.find('input[name="LastName"]').val());
    
    if (form.find('input[name="Email"]').val() != null) {
        $("#email-" + hubSpotFormId).val(form.find('input[name="Email"]').val());
    } else {
        $("#email-" + hubSpotFormId).val($('#email').text());
    }
    $("#mobilephone-" + hubSpotFormId).val(form.find('input[name="PhoneNumber"]').val());
    $("#hsForm_" + hubSpotFormId).submit();
}
/*

                            $('.loginMsg').text(response.message);

                            setTimeout($.unblockUI, 3000);
*/