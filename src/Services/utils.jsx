export async function fetchCollegeByName(collegeName, filters = {}) {
  const apiKey = "AnUQWaDgEEcBtJL8oD8asCbezAizLxajVwlUdIwq";

  const fields = [
    "school.name",
    "school.city",
    "school.state",
    "school.school_url",
    "latest.student.size",
    "latest.cost.attendance.academic_year",
    "latest.admissions.sat_scores.average.overall",
    "latest.admissions.act_scores.midpoint.cumulative",
    "latest.admissions.act_scores.25th_percentile.composite",
    "latest.admissions.sat_scores.midpoint.math",
    "latest.admissions.sat_scores.midpoint.critical_reading",
    "school.carnegie_size_setting",
    "school.ownership",
    "school.degrees_awarded.predominant",
    "latest.student.demographics.race_ethnicity.black",
    "latest.student.demographics.race_ethnicity.hispanic",
    "latest.student.demographics.race_ethnicity.asian",
    "latest.student.demographics.men",
    "latest.student.demographics.women"
  ].join(",");

  const baseUrl = `https://api.data.gov/ed/collegescorecard/v1/schools`;
  const params = new URLSearchParams({
    api_key: apiKey,
    "school.name": collegeName,
    fields,
    per_page: 20,
  });

  // Use fuzzy match instead of exact match
  params.append("school.name__icontains", collegeName);

  // Add location filter
  if (filters.location && filters.location.length > 0) {
    filters.location.forEach((stateCode) => {
      params.append("school.state", stateCode);
    });
  }
  // Add field of study filter (CIP family codes)
  if (filters.field && filters.field.length > 0) {
    filters.field.forEach((cipCode) => {
      params.append("programs.cip_family", cipCode);
    });
  }

  const endpoint = `${baseUrl}?${params.toString()}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log("API response:", data);
    console.log("Returned colleges:", data.results);

    return data.results;
  } catch (error) {
    console.error("Failed to fetch college data:", error);
    throw error;
  }
}
