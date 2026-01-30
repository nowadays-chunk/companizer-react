import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card, Grid, Typography, Chip } from '@mui/material';

const VendorAssessmentsAnalytics = ({ fetchItems }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchItems();
      setData(response || []); // Ensure data is an array
      setLoading(false);
    }
    fetchData();
  }, [fetchItems]);

  if (loading) return <Typography>Loading...</Typography>;

  // KPIs
  const totalAssessments = data.length;
  const avgScore = totalAssessments > 0
    ? data.reduce((sum, record) => sum + (Number(record.score) || 0), 0) / totalAssessments
    : 0;

  // Count assessments by outcome
  const outcomeCounts = data.reduce((acc, record) => {
    acc[record.outcome] = (acc[record.outcome] || 0) + 1;
    return acc;
  }, {});

  const outcomeDistribution = Object.keys(outcomeCounts).map(outcome => ({
    name: outcome.charAt(0).toUpperCase() + outcome.slice(1),
    y: outcomeCounts[outcome],
  }));

  // Highcharts options for outcome distribution
  const outcomeChartOptions = {
    chart: { type: 'pie' },
    title: { text: 'Outcome Distribution of Vendor Assessments' },
    series: [{
      name: 'Outcomes',
      colorByPoint: true,
      data: outcomeDistribution,
    }]
  };

  // Highcharts options for assessment scores
  const scoreChartOptions = {
    chart: { type: 'bar' },
    title: { text: 'Assessment Scores by Vendor' },
    xAxis: { categories: data.map(record => record.vendorName || 'Unknown') },
    yAxis: { title: { text: 'Score' } },
    series: [{
      name: 'Score',
      data: data.map(record => Number(record.score) || 0),
    }]
  };

  return (
    <Grid container spacing={4}>
      {/* KPI Cards */}
      <Grid item xs={12} md={6}>
        <Card>
          <Typography variant="h6" gutterBottom>Total Assessments</Typography>
          <Typography variant="h4">{totalAssessments}</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Typography variant="h6" gutterBottom>Average Score</Typography>
          <Typography variant="h4">{avgScore.toFixed(2)}</Typography>
        </Card>
      </Grid>

      {/* Highcharts */}
      <Grid item xs={12} md={6}>
        <Card>
          <HighchartsReact highcharts={Highcharts} options={outcomeChartOptions} />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <HighchartsReact highcharts={Highcharts} options={scoreChartOptions} />
        </Card>
      </Grid>

      {/* Tags */}
      <Grid item xs={12}>
        <Card>
          <Typography variant="h6" gutterBottom>Tags</Typography>
          {data.map((record, index) => (
            <div key={index}>
              <Typography variant="subtitle1">{record.vendorName}:</Typography>
              {Array.isArray(record.tags) ? record.tags.map((tag, tagIndex) => (
                <Chip key={tagIndex} label={tag.label} style={{ margin: '5px' }} />
              )) : 'No Tags'}
            </div>
          ))}
        </Card>
      </Grid>
    </Grid>
  );
};

export default VendorAssessmentsAnalytics;
