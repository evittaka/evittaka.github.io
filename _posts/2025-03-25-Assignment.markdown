---
layout: post
title:  "Assignment 2"
date:   2025-03-25 10:18:03 +0100
categories: jekyll update
---

# San Francisco Crime Data Analysis: Assault

The San Francisco crime dataset contains records of reported crimes, categorized by attributes such as crime type, date and time, police district, and geographic coordinates. It includes offenses like assault, theft, vandalism, and robbery, spanning from 2003 to 2024. This dataset is valuable for understanding crime trends, identifying high-crime areas, and informing public safety measures. In this analysis, we focus on assault data. 

## Assault Trends Over Time

This visualization examines the annual trend of reported assaults in San Francisco from 2003 to 2024. At first glance, the red line chart reveals a gradual decline in assaults over the two decades, with notable shifts in the late 2010s and early 2020s. A dashed trendline highlights this downward trajectory, while a shaded area marks the COVID-19 pandemic period.

Between 2003 and 2017, assault levels remained relatively stable, fluctuating around 10,000 incidents per year. However, a sharp decline occurred in 2020, coinciding with the peak of the pandemic. Social distancing, lockdowns, and reduced public activity contributed to a dramatic drop, reaching the lowest point in the dataset. This trend suggests a strong correlation between crime rates and social interaction levels.

Interestingly, post-pandemic years (2021–2024) show only a modest rebound. While assault rates increased slightly after 2020, they remained below pre-pandemic levels. This suggests a potential long-term shift influenced by changes in urban dynamics, policing, or public behavior.

By visualizing the data, we can see how large-scale societal disruptions—such as the COVID-19 pandemic—can significantly impact violent crime patterns. These insights could be useful for urban planning and public safety strategies moving forward.

<div style="width: 800px; margin: 0 auto;">
    <iframe src="/assets/interactive_assaults.html" width="100%" height="500px" frameborder="0"></iframe>
</div>  

## Heatmap of Arrest Locations Over Time  

The next visualization presents a heatmap of assault-related arrests across San Francisco, showing trends over time. The overall decrease in crime supports the insights from the previous plot.

The heatmap highlights that most crimes occur in downtown areas, which is expected due to higher population density and increased law enforcement presence. Outside the downtown core, we observe elevated crime rates in Bayview and Mission Districts, areas known for high activity and dense populations.

In contrast, crime rates are significantly lower in suburban and residential areas, reinforcing the perception that these regions are generally safer due to lower foot traffic and population density.

<div style="width: 800px; margin: 0 auto;">
    <iframe src="/assets/plot2.html" width="100%" height="500px" frameborder="0"></iframe>
</div>  

## Assault Correlation with Other Crimes

The third visualization explores how assault correlates with other types of crime in San Francisco. Each dot represents normalized crime rates for a given time of the week, allowing direct comparisons across different crime types. Assault is fixed on the x-axis, while selected crimes appear on the y-axis.

A strong positive correlation is evident between assault and crimes such as robbery, burglary, and vehicle theft. These crimes tend to increase and decrease alongside assault, as shown by the red trendlines indicating a linear relationship.

For crimes like robbery and burglary, the data points form tight, upward-sloping clusters, indicating a strong temporal relationship—when assault rates rise, these crimes rise as well. In contrast, crimes such as vandalism and prostitution display more scattered distributions with flatter trendlines, suggesting little or no alignment with assault trends.

Understanding these relationships provides deeper insights into crime dynamics. If assault and burglary peak together in specific areas or time periods, targeted interventions can address both issues simultaneously, leading to more effective crime prevention and public safety strategies.

<div style="width: 800px; margin: 0 auto;">
    <iframe src="/assets/normalized_assault_vs_others_with_muted.html" width="100%" height="620px" frameborder="0"></iframe>
</div>

## Conclussion

This analysis highlights key patterns in assault trends, arrest locations, and correlations with other crimes in San Francisco. The data reveals a long-term decline in assaults, with a significant increase during the COVID-19 pandemic and only a partial recovery in recent years. Geospatial analysis confirms that crime is concentrated in high-density areas such as downtown and specific districts like Bayview and Mission.

Additionally, examining the relationships between assault and other crimes suggests that certain offenses tend to occur together, which can inform targeted policy measures. These findings offer valuable insights for law enforcement, policymakers, and urban planners in designing strategies to improve public safety and crime prevention in San Francisco.



