App.PieChartComponent = App.BaseChartComponent.extend({
    chart: PieChart()
        .oneColor('#BE3600')
        .labelColor('white')
        .labelSize('11px')
    // .margin({left: 40, top: 40, bottom: 50, right: 40})
    // .hideAxisLabels(true)
    // .noTicks(true)
    // .staticDataLabels(true)
});
