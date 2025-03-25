---
layout: post
title:  "Assignment 2"
date:   2025-03-25 10:18:03 +0100
categories: jekyll update
---

# San Francisco Crime Data Analysis: Vehicle Theft  

The San Francisco crime data contains records of reported crimes in San Francisco, categorized by various attributes such as crime type, date and time, police district, and geographic coordinates (latitude and longitude). The dataset typically includes information on crimes like assault, theft, vandalism, robbery, and more. Data is collected starting from 2003 until the end of 2024. This dataset is valuable for understanding crime patterns, identifying high-crime areas, and enhancing public safety efforts. In this analysis, we take a closer look at vehicle theft data.  

## Arrest Frequency by Time of Day  

In the first plot, we analyze the frequency of vehicle theft arrests by the time of day. Interestingly, the data reveals two distinct peaks: one between 17:00 and 23:00 and another around midday.  

The evening peak, from 5 p.m. to 11 p.m., coincides with the time when people are returning home from work or other daily activities. This suggests that thieves might exploit the increased movement and busy streets as a form of cover, attempting to blend in with the crowd to avoid detection. Contrary to what one might expect, arrests are less frequent during the late-night hours when streets are quieter and more deserted.  

Additionally, we observe a smaller peak around lunchtime, a period characterized by high street activity and increased pedestrian and vehicular movement. This further supports the hypothesis that vehicle thieves tend to operate during times of greater public presence, potentially leveraging the commotion and crowds to conceal their actions.  

This pattern offers valuable insight into the behavior of vehicle thieves and the circumstances under which arrests are more likely to occur, which could inform targeted crime prevention efforts during these high-risk periods.  

![Vehicle Theft Arrest Frequency by Time of Day](/assets/images/plot1.png)  

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
    <iframe src="/assets/plot3.html" width="100%" height="500px" frameborder="0"></iframe>
</div>  
