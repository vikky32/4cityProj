//
// $('#addDynamicExtraFieldButton').click(function(event) {
//     addDynamicExtraField();
//     return false;
// });
//
// function addDynamicExtraField() {
//     var div = $('<div/>', {
//         'class': 'DynamicExtraField'
//     }).appendTo($('#DynamicExtraFieldsContainer'));
//     var br = $('<br/>').appendTo(div);
//     var label = $('<label/>').html("Доп. поле ").appendTo(div);
//     var input = $('<input/>', {
//         value: 'Удаление',
//         type: 'button',
//         'class': 'DeleteDynamicExtraField'
//     }).appendTo(div);
//     input.click(function() {
//         $(this).parent().remove();
//     });
//     var br = $('<br/>').appendTo(div);
//     var input = $('<input/>', {
//         name: 'DynamicExtraField[]',
//
//     }).appendTo(div);
// }
// //Для удаления первого поля. если оно не динамическое
// // $('.DeleteDynamicExtraField').click(function(event) {
// //     $(this).parent().remove();
// //     return false;
// // });

//

$("#addDynamicExtraFieldButton").click(function(){
    addStep()
});

function addStep() {
    $(".realisation-steps").clone(true).appendTo($("#DynamicExtraFieldsContainer"));
}