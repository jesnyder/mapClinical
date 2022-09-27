# mapClinical
An interactive map of clinical trials using a mesenchymal stromal cell (MSC) therapeutic intervention. Group the trials based on the source of the MSCs - allogeneic, autologous, both, or undeclared. All trials are assigned to one group. 

Explore the map here:
https://jesnyder.github.io/mapClinical/

Watch an introduction to the map here:
https://youtu.be/wNrNCIRuCok

The tasks to build the map include:

1. Build database: List clinical trials (with metadata) that use a mesenchymal stromal cell as the therapeutic intervention. Use the Advanced Search function on the ClinicalTrials.gov website and use the "Intervention/treatment" field to search for terms for mesenchymal stromal cells - like "mesenchymal stem", "mesenchymal stromal", "allogeneic mesenchymal",and "autologous mesenchymal", as well as trade names for allogeneic mesenchymal stormal cells, such as  "ALLO-ASC", "allo-MSCs", and "remestemcel-l". Edit the file in user_provided>admin>search_terms.csv Go to the webpage to conduct the search. Download the results and save the files in user_provided>clinicalTrialsDownload before running the code. Use the "URL" field in the trial data as a unique identifier to ensure each entry is unique.

2. Assign groups: Search the "Interventions" field of each trial in the database for terms indicative of either an allogeneic or autologous source. If one or more allogeneic terms are found in the "Interventions" field, then the trial is assigned to the allogeneic group. Terms included "allogeneic", as well as trade names for allogeneic MSC products, and sources of MSCs that must be allogeneic, like placenta and umbilical cord. A full list of allogeneic terms can be found and edited in user_provided>admin>allo_terms.csv

If one or more autologous terms are found in the "Interventions" field, then the trial is assigned to the autologous group. Terms included "autologous" as well as trade names for autologous MSC products. A full list of autologous terms can be found and edited in user_provided>admin>auto_terms.csv

If terms from both the allogeneic and autologous lists are found, then the trial is assigned to the "both" group. If no terms from either group are found, then the trial is assigned to the "undeclared" group. Each trial is assigned to only one group.

3. Geolocate trials: Search the "Locations" field of each trial to find all the locations of the trials. Some trials have multiple locations that are separated by the '|' character. Save a list of all the unique locations to program_generated>locations.csv Lookup the latitude and longitude for each location using the OpenStreetMap API.

4. Write geojson: Coregister the ClinicalTrials.gov trial data with the geolocated locations. Prepare geojson for each group. Write the code as a unique variable with the group name that is set equal to the geojson and saved as a ".js" file in the docs>js location.   

4. Annual counts: Count the number of trials and participants enrolled for all the trials and for each group.

5. Summarize fields: List unique fields for all the trials
