App.Company = DS.Model.extend({
    monthlyReport: DS.belongsTo('monthly-report'),
    name: DS.attr('string'),
    newContracts: DS.attr('number'),
    feeIncreases: DS.attr('number'),
    attritions: DS.attr('number')
});