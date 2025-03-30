---
layout: post
title:  "Assignment 2"
date:   2025-03-25 10:18:03 +0100
categories: jekyll update
---

# San Francisco Crime Data Analysis: Vehicle Theft  

The San Francisco crime data contains records of reported crimes in San Francisco, categorized by various attributes such as crime type, date and time, police district, and geographic coordinates (latitude and longitude). The dataset typically includes information on crimes like assault, theft, vandalism, robbery, and more. Data is collected starting from 2003 until the end of 2024. This dataset is valuable for understanding crime patterns, identifying high-crime areas, and enhancing public safety efforts. In this analysis, we take a closer look at vehicle theft data.  

## Assault Trends Over Time

This visualization examines the annual trend of reported assaults in San Francisco from 2003 to 2024. At first glance, the red line chart reveals a gradual long-term decline in assaults across the two-decade span, punctuated by sharp changes in the late 2010s and early 2020s. A dashed trendline reinforces this steady downward pattern, while a shaded area highlights the COVID-19 pandemic period.

Between 2003 and 2017, assault levels remained relatively stable, fluctuating just above 10,000 incidents per year. However, a sharp decline occurred in 2020, coinciding with the pandemic’s peak. With social distancing, lockdowns, and reduced public activity, the number of reported assaults dropped dramatically, reaching the lowest point in the dataset. This shift suggests a strong correlation between social interaction levels and violent crime.

Interestingly, the post-pandemic years (2021–2024) show only a modest rebound. While assault rates rose slightly after 2020, they remained lower than pre-pandemic levels, indicating a potential long-term shift in urban dynamics, policing, or public behavior.

By visualizing the data in this way, we can clearly observe how large-scale societal disruptions like COVID-19 can dramatically influence patterns of violent crime—insights that could be valuable for both urban planning and public safety strategy moving forward.

<div style="width: 800px; margin: 0 auto;">
    <iframe src="/assets/interactive_assaults.html" width="100%" height="500px" frameborder="0"></iframe>
</div>  

## Heatmap of Arrest Locations Over Time  

Additionally, we examine a heatmap of vehicle theft arrests in San Francisco, year by year. One noticeable trend is the overall decrease in the crime rate over time, suggesting that crime prevention programs and effective police efforts have contributed to reducing vehicle thefts in the city.  

The heatmap also highlights that most crimes occur in downtown areas. This is expected, as downtown is typically more crowded and experiences higher levels of pedestrian and vehicular movement, providing potential cover for criminal activity. Beyond the downtown core, we observe elevated crime rates in Bayview and Mission Districts, areas known for higher population density and activity.  

In contrast, crime rates are noticeably lower in more suburban and rural areas, which aligns with the perception that these areas are generally safer due to lower population density and reduced foot traffic.  

<div style="width: 800px; margin: 0 auto;">
    <iframe src="/assets/plot2.html" width="100%" height="500px" frameborder="0"></iframe>
</div>  

## Hour-by-Hour Probabilities by Police District  

The third plot complements the insights from the previous plots by showing the hour-by-hour probabilities of vehicle theft arrests across different police districts. A key observation is that most districts follow a somewhat similar distribution, with peaks during the evening or midday.  

For instance, the Ingleside district exhibits a more pronounced peak during the evening hours. The Tenderloin district, on the other hand, shows a higher peak around lunchtime, likely reflecting increased movement and activity during this period.  

In the Central district, there is a very distinct peak at 6 p.m., which makes sense given that this area contains many office buildings and experiences heavy pedestrian and vehicular traffic at the end of the workday. A similar pattern can be seen in the Richmond district.  

Meanwhile, the Southern district has a more evenly distributed crime rate compared to the other districts, with less pronounced peaks, possibly reflecting different activity patterns and levels of police presence.  

<div style="width: 800px; margin: 0 auto;">
    <iframe src="/assets/normalized_assaults_vs_others_with_muted.html" width="100%" height="500px" frameborder="0"></iframe>
</div>  
