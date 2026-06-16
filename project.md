[Reflection](index.md) | [Project](project.md)

# Data exploration of citizen study ‘Looking for Cowslips’

## Introduction & data

The data I used comes from the paper “A pan-European citizen science study shows population size, climate and land use are related to biased morph ratios in the heterostylous plant Primula veris” by Aavik et al. (2025). As the title suggests, a pan-European citizen science campaign was conducted to study the heterostyly of Primula veris, also known as cowslips, which is a model species for researching this phenomenon.

The dataset consists of 2,791 features (observations of Primula veris populations) with 11 fields: fid, ID, Date, Population size, S-morphs, L-morphs, Latitude, Longitude, Country, Proportion of S-morphs, and ABSdev. People participating in the study would look into 100 flowers and record on the webpage how many of these were S- and L-morphs. In addition, they estimated the size of the population as a categorical variable with three levels: small (<100 individuals), medium (about 100–200 individuals), and large (>200 individuals). They could also geolocate their observation (Aavik et al., 2025).

In fact, I have a personal connection with this data. The plant is edible and very commonly used for herbal teas in Estonia, where I am from. Moreover, I have uploaded a few observations of cowslips myself near my country cottage during several springs. Before this specific study, the researchers conducted a country wide study (Aavik et al., 2020), which was advertised on national television and social media. The observation-uploading process was made very easy and accessible. When they launched the pan-European study, I already knew about it and uploaded a few observations when I was at my country cottage during the season.

Since most maps I have created during my (short) GIS career have been about urban environments, I decided to choose a different topic and a different scale for this project for the sake of challenge and new insights. Biodiversity is dear to my heart and highly relevant in both urban and broader regional contexts, especially when dealing with the important question of how landscape change affects biodiversity. Biodiversity is complex and also depends on the wellbeing of pollinators. I find it fascinating how citizens can be engaged in studying such an important and large-scale challenge. In conclusion, I decided to choose a dataset that would allow me to gain new knowledge about mapmaking.
Regarding the data used, GBIF (2026) cowslip observation data (2016–2026) was also used to visualise the approximate habitat area of the plant.

<img src="20180511KK0490-min_large.jpg" width="100%">

Figure 2. Photo of cowslip. Nurmenukk (n.d.).

## Geospatial narrative

TODO: Explain the purpose of the project.

<img src="nurmenukk5.png" width="100%">

Figure 3. Map of observation density and activity in countries. Used coordinate system was ESPG:3301.

![](obs_per_qountry_over35.png)

Figure 4. Bar plot of cowslip of highest number of observations per country (N>=35).

<h2>Interactive Map 1</h2>

<iframe
src="interactive/map1/"
width="100%"
height="700"
frameborder="0">
</iframe>

<h2>Interactive Map 2</h2>

<iframe
src="interactive/map2/"
width="100%"
height="700"
frameborder="0">
</iframe>

## Conclusion

TODO: Paste conclusion.

## References

Paste references.

---

[Back to Reflection](index.md)
