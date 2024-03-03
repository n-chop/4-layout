$.validator.addMethod("phone", function(value, element) {
    return this.optional(element) || /^\d{10}$/.test(value);
}, "Введіть валідний номер телефону");

$.validator.addMethod("interest", function(value, element) {
    return this.optional(element) || /^(developer|QA)$/.test(value);
}, "Введіть валідний номер телефону");

$(function() {
    $("form[name='regestration']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            interest: {
                required: true,
                interest:true
            },
            phone: {
                required: true,
                phone: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            firstname: {
                required: "Це поле необхідно заповнити",
                firstname: ""
            },
            lastname: {
                required: "Це поле необхідно заповнити",
                lastname: ""
            },
            interest: {
                required: "Це поле необхідно заповнити",
                interest: "Введіть 'developer' або 'QA'"
            },
            email: {
                required: "Це поле необхідно заповнити",
                email: "Введіть валідний Email"
            },
            phone: {
                required: "Це поле необхідно заповнити",
                phone: "Введіть валідний номер телефону"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});