import { Metric } from 'web-vitals';

function ReportHandler(metric) {
    getEventValueFromMetric(metric);
    //gaTrigger(metric);
}

function getEventValueFromMetric(metric) {
    if (metric.name === 'CLS') {
        return Math.round(metric.value * 1000);
    }
    return Math.round(metric.value);
}

function gaTrigger(metric) {
    ga('send', 'event', {
        eventCategory: 'Web Vitals',
        eventAction: metric.name,
        eventValue: getEventValueFromMetric(metric),
        eventLabel: metric.id,
        nonInteraction: true,
    });
}

export default ReportHandler;