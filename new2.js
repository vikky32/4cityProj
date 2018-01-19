$("#addDynamicExtraFieldButton").click(function(){
    addStep()
});

function addStep() {
    $(".realisation-steps").clone(true).appendTo($("#DynamicExtraFieldsContainer"));
}