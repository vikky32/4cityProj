

//запрет на ввод буквенных символов

function testNum(){
    if (event.keyCode < 48 || event.keyCode > 57)
        event.returnValue= false;
}



// function testSymb(test) {
//     finInput.value = finInput.value.replace(/[^0-9+]/, '');
// }
//Добавление и удаление динамических полей

$('#addDynamicExtraFieldButton').click(function(event) {
    addDynamicExtraField();
    return false;
});
function addDynamicExtraField() {
    var div = $('<div/>', {
        'class' : 'DynamicExtraField'
    }).appendTo($('#DynamicExtraFieldsContainer'));
    var br = $('<br/>').appendTo(div);
    // var label = $('<label/>').html("Доп. поле ").appendTo(div);

    var br = $('<br/>').appendTo(div);
    var textarea = $('<input/>', {
        name : 'DynamicExtraField[]',
        type: 'text',
        'class': 'newFields'
    }).appendTo(div);
    var img = $('<img />', {
        'class': 'garbageImg',
        src: 'images/garbage.svg',
        alt: ''
    })
        .appendTo(div);
    img.click(function() {
        $(this).parent().remove();
    });
}
//Для удаления первого поля
$('.delete-field').click(function(event) {
    $(this).parent().remove();
    return false;
});
