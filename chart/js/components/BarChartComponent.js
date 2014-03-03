App.BarChartComponent = App.BaseChartComponent.extend({
    chart: BarChart()
        .margin({left: 40, top: 40, bottom: 80, right: 40})
        .manyColors(true)
        .colors(['#be3600', '#ff4b00', '#ff6100', '#ff7600', '#ff8c00'])
        // .oneColor('#BE3600')
        .rotateAxisLabels(true)
    // .hideAxisLabels(true)
    // .noTicks(true)
    // .staticDataLabels(true)
});
